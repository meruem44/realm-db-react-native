import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { FontAwesome } from "@expo/vector-icons";

import {
  Container,
  Name,
  Description,
  Stats,
  Stat,
  StatCount,
  ButtonRefresh,
  RefreshText,
} from "./repository.styles";

export type RepositoryType = {
  id: number;
  name: string;
  stars: number;
  forks: number;
  description: string;
  fullName: string;
};

type RepositoryProps = {
  data: RepositoryType;
  onRefresh(): void;
};

const Repository: React.FC<RepositoryProps> = ({ data, onRefresh }) => {
  return (
    <Container>
      <Name>{data.name}</Name>

      <Description numberOfLines={2}>{data.description}</Description>

      <Stats>
        <Stat>
          <FontAwesome name="star" size={RFValue(16)} color="#333" />
          <StatCount>{data.stars}</StatCount>
        </Stat>

        <Stat>
          <FontAwesome name="code-fork" size={RFValue(16)} color="#333" />
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>

      <ButtonRefresh activeOpacity={0.9} onPress={onRefresh}>
        <FontAwesome name="refresh" color={"#7159c1"} size={RFValue(16)} />
        <RefreshText>ATUALIZAR</RefreshText>
      </ButtonRefresh>
    </Container>
  );
};

export { Repository };
