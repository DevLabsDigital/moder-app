import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const ExtractHeader = styled.View`
  padding: 15px;
  border-bottom-color: #e9e9e9;
  border-bottom-width: 1px;
`;
export const FirstRow = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;
export const Label = styled.Text`
  font-size: 14px;
  color: #00a2d9;
  font-weight: 500;
  margin-right: 20px;
`;
export const SecondRow = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;
export const WalletImage = styled.Image`
  width: 50px;
  height: 40px;
  padding: 15px;
  resize-mode: contain;
`;
export const PayDetailsText = styled.Text`
  font-size: 12px;
  color: #fa6400;
  font-weight: 300;
  margin-bottom: 15px;
`;
export const ContainerDescription = styled.View`
  flex: 3;
  margin-left: 20px;
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
export const ThirdRow = styled.View`
  flex-direction: row;
`;
export const ExtractListContainer = styled.View`
`;
export const ExtractRow = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 5px 15px;
  border-bottom-color: #e9e9e9;
  border-bottom-width: 1px;
  background-color: ${props => props.isGray ? 'rgba(201, 201, 201, 0.1)' : '#ffffff'}
`;
export const IdText = styled.Text`
  font-size: 14px;
  color: #6d7278;
`;
export const DateText = styled.Text`
  font-size: 12px;
  color: #6d7278;
  font-weight: 300;
`;