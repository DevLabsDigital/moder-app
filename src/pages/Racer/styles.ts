import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 34px;
`;
export const ContainerImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  padding-left: 42px;
  padding-right: 42px;
  opacity: 0.8;
`;
export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const LogoImage = styled.Image`
  width: 61px;
  height: 24px;  
  resize-mode: contain;
  margin-right: 50px;
`;
export const Title = styled.Text`
  text-align: left;
  font-size: 18px;
  font-weight: 700;
  color: #00a2d9;
`;
export const DetailContainer = styled.View`
  flex: 4;
`;
export const DeliveryDetail = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;
export const Price = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #6d7278;
`;
export const ClientDetail = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
export const ClientName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #6d7278;
`;
export const Description = styled.Text`
  font-size: 14px;
  color: #6d7278;
`;
export const LogoContainer = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.Image`
  width: 50%;
  height: 80px;  
  resize-mode: contain;
`;
export const FooterContainer = styled.View`
  flex: 2;
  flex-direction: row;
  margin-left: -40px;
  padding-bottom: 20px;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const AcceptView = styled.View`
  flex: 4;
`;
export const Label = styled.Text`
  font-size: 12px;
  color: #00a2d9;
`;
export const CancelButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 60px;
  height: 60px;
  background-color: #fa6400;
  border-radius: 50px;
`;