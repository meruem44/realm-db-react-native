import React, { useCallback, useState, useEffect } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { api } from "../../services/api";
import { getRealm } from "../../services/realm";
import { Keyboard } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { RepositorySchemaType } from "../../schemas/RepositorySchema";

import {
  Repository,
  RepositoryType,
} from "../../components/repository/repository.screen";

import {
  Container,
  Title,
  Form,
  Input,
  ButtonSubmit,
  List,
} from "./home.styles";

type RepositoryResponse = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
};

const Home: React.FC = () => {
  const [input, setInput] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState<RepositoryType[]>([]);

  useEffect(() => {
    loadRepositories();
  }, []);

  const loadRepositories = useCallback(async () => {
    const realm = await getRealm();

    const data = realm.objects("Repository").sorted("stars", true);

    setRepositories(data);
  }, []);

  const saveRepository = useCallback(async (repo: RepositoryResponse) => {
    try {
      const data: RepositorySchemaType = {
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
      };

      const realm = await getRealm();

      realm.write(() => {
        realm.create("Repository", data, "modified");
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleAddRepository = useCallback(async () => {
    Keyboard.dismiss();

    try {
      setError(false);

      setIsLoading(true);

      const response = await api.get(`/repos/${input}`);

      await saveRepository(response.data);

      setInput("");
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [input, saveRepository]);

  const handleRefreshRepository = useCallback(async (repo: RepositoryType) => {
    console.log(repo);

    try {
      const response = await api.get(`/repos/${repo.fullName}`);

      const data = await saveRepository(response.data);

      setRepositories((oldValue) =>
        oldValue.map((repo) => (repo.id === repo.id ? data : repo))
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <Title>Repositórios</Title>

      <Form>
        <Input
          isError={error}
          autoCapitalize="none"
          autoCorrect={false}
          value={input}
          editable={!isLoading}
          onChangeText={setInput}
          keyboardType="ascii-capable"
          placeholderTextColor="#999999"
          placeholder="Procurar Repositório..."
        />

        <ButtonSubmit activeOpacity={0.9} onPress={handleAddRepository}>
          <MaterialIcons name="add" size={RFValue(22)} color="#fff" />
        </ButtonSubmit>
      </Form>

      <List
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: RFValue(20) }}
        data={repositories}
        keyboardShouldPersistTaps="always"
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Repository
            data={item as RepositoryType}
            onRefresh={() => handleRefreshRepository(item as RepositoryType)}
          />
        )}
      />
    </Container>
  );
};

export { Home };
