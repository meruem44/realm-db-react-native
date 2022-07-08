import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

type ErrorType = {
  isError: boolean;
};

export const Container = styled(LinearGradient).attrs({
  colors: ["#7159c1", "#9b49c1"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding-top: ${RFValue(30) + getStatusBarHeight(true)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-weight: bold;
  color: #fff;
  padding: 0 ${RFValue(20)}px;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(10)}px;
  padding: 0px ${RFValue(20)}px;
`;

export const Input = styled.TextInput<ErrorType>`
  flex: 1;
  padding: ${RFValue(12)}px ${RFValue(15)}px;
  border-radius: ${RFValue(4)}px;
  background-color: #fff;
  font-size: ${RFValue(16)}px;
  color: #333;
  border: ${RFValue(2)}px solid
    ${({ isError }) => (isError ? "#ff7272" : "#fff")};
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #6bd4c1;
  margin-left: ${RFValue(10)}px;
  justify-content: center;
  border-radius: ${RFValue(4)}px;
  padding: 0px ${RFValue(14)}px;
`;

export const List = styled.FlatList`
  margin-top: ${RFValue(20)}px;
`;
