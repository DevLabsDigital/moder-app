import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const ContainerImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  padding-left: 42px;
  padding-right: 42px;
`;
export const ContainerLogo = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
export const ContainerForm = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
export const FormLabel = styled.Text`
  margin-bottom: 10px;
  font-size: 12px;
  letter-spacing: 0.14px;
  font-weight: bold;
`;
export const LoginBtn = styled.TouchableOpacity`
  width: 100%;
  border-radius: 40px;
  height: 44px;
  background-color: #009ed8;
  justify-content: center;
  align-items: center;
`;
export const LoginText = styled.Text`
  font-size: 16px;
  color: white;
`;
export const Footer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;
export const SimpleText = styled.Text`
  font-size: 12px;
  color: #5e5e5e;
  text-align: center;
`;
export const SignInBtn = styled.TouchableOpacity`
  flex-direction: row;
  padding-left: 16px;
  align-items: center;
  width: 100%;
  height: 44px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 40px;
  border-width: 1px;
  border-color: #32c5ff;
`;
export const SignInIconContainer = styled.View`
  flex: 1;
`;
export const SignInText = styled.Text`
  flex: 1;
  color: black;
  margin-right: 25px;
  text-align: center;
  font-size: 14px;
`;
export const LinkText = styled.Text`
  font-size: 12px;
  color: #5e5e5e;
  text-align: center;
  font-weight: bold;
`;