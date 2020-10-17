import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const ContainerHome = styled.ScrollView`
  flex: 1;
  padding: 18px;
`;
export const Label = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #00a2d9;
`;
export const ContainerSection = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin: 40px 0px;
`;
export const ContainerDescription = styled.View`
  flex: 3;
  margin-left: 20px;
`;
export const ContainerAction = styled.View`
  flex: 1;
  align-items: center;
`;
export const StatusText = styled.Text`
  font-size: 14px;
`;
export const StatusImage = styled.Image`
  width: 50px;
  height: 60px;
  resize-mode: contain;
  padding: 15px;
`;
export const WalletImage = styled.Image`
  width: 50px;
  height: 40px;
  padding: 15px;
  resize-mode: contain;
`;
export const ReportImage = styled.Image`
  width: 50px;
  height: 40px;
  padding: 15px;
  resize-mode: contain;
`;
export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;
export const SectionDescription = styled.Text`
  font-size: 14px;
  color: #6d7278;
`;
export const ExtractBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 42px;
  border: solid 1px #e9e9e9;
  padding: 10px;
`;
export const ExtractText = styled.Text`
  font-size: 14px;
  color: #6d7278;
`;
export const ContainerLogo = styled.View`
  justify-content: center;
  align-items: center;
`;