import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: ${RFValue(20)}px;
  border-radius: ${RFValue(4)}px;
  background-color: #fff;
  margin-bottom: ${RFValue(20)}px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.Text`
  margin-top: ${RFValue(5)}px;
  color: #666;
  line-height: ${RFValue(20)}px;
`;

export const Stats = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(15)}px;
`;

export const Stat = styled.View`
  flex-direction: row;
  margin-right: ${RFValue(15)}px;
`;

export const StatCount = styled.Text`
  margin-left: ${RFValue(6)}px;
`;

export const ButtonRefresh = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(20)}px;
`;

export const RefreshText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #7159c1;
  font-weight: bold;
  margin-left: ${RFValue(5)}px;
`;
