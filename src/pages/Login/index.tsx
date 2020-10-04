import { Image, Text, View } from 'react-native';
import React, { FC, useState } from "react";
import InputIcon from '../../components/InputIcon';
import { 
  Container, 
  ContainerImage, 
  ContainerForm, 
  ContainerLogo, 
  Footer, 
  FormLabel, 
  LoginBtn, 
  LoginText, 
  SimpleText,
  SignInBtn, SignInText, LinkText 
} from './styles';
import { getIcon } from '../../util/helper';

const Login:FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <ContainerImage source={require('../../images/background.png')}>
        <ContainerLogo>
          <Image
            style={{width: '80%', height: 100, resizeMode: 'contain'}}
            source={require('../../images/logo.png')}
          />
        </ContainerLogo>
        <ContainerForm>
          <FormLabel>ACESSO ENTREGADOR</FormLabel>
          <InputIcon 
            value={email} 
            placeholder="E-mail" 
            onChangeText={(value) => setEmail(value)}
            icon={{ name: 'email-outline', type: 'MaterialCommunityIcons', size: 24, color: '#d2d2d2' }}
          />
          <InputIcon 
            value={password} 
            placeholder="Senha" 
            onChangeText={(value) => setPassword(value)}
            icon={{ name: 'lock', type: 'AntDesign', size: 24, color: '#d2d2d2' }}
          />
          <LoginBtn>
            <LoginText>Fazer login</LoginText>
          </LoginBtn>
        </ContainerForm>
        <Footer>
          <SimpleText>Não possui acesso?</SimpleText>
          <SignInBtn>
            { getIcon('FontAwesome5', 'user-plus', 24, '#32c5ff') }
            <SignInText>Cadastre-se</SignInText>
          </SignInBtn>
          <SignInText>
            Ao solicitar ou fazer login em uma conta, você concorda com nossos
            <LinkText> Termos e Condições</LinkText> e
            <LinkText> Declarações de Privacidade.</LinkText>
          </SignInText>
        </Footer>
      </ContainerImage>

    </Container>
  )
};

export default Login;