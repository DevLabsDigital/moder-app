import { Image, Text, View } from 'react-native';
import React, { FC, useState, useContext, useEffect} from "react";
import {AsyncStorage} from 'react-native';
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
import { TokensContext } from '../../contexts/Authentication';
import { fetchData } from '../../Settings';

interface Props {
  navigation: any
}

const Login:FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('benhur.onrails@gmail.com');
  const [password, setPassword] = useState('numero04');
  const { token, setToken } = useContext(TokensContext);
  const { currentUser, setCurrentUser } = useContext(TokensContext);

  useEffect(() => {
    AsyncStorage.getItem("authToken").then((token)=>{
      if(token){
        setToken(token)
        goToHome()
      }
    }, [])
    
    
  });
  
  const goToHome = () => {
    navigation.navigate('Home')
  }

  const goToFirstStep = () => {
    navigation.navigate('FirstStep')
  }

  const login =() => {
    fetchData({
      path: '/authenticate.json',
      method: "POST",
      params: {
        email,
        password,
      },
      callback: (json)=>{
        if(json.auth_token){
          AsyncStorage.setItem("authToken", json.auth_token);
          setToken(json.auth_token)
          goToHome()
        }else{
          alert("Usuário ou senha incorretos")
        }
        
      }
    })
    
  }

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
          <LoginBtn onPress={() => login()}>
            <LoginText>Fazer login</LoginText>
          </LoginBtn>
        </ContainerForm>
        <Footer>
          <SimpleText>Não possui acesso?</SimpleText>
          <SignInBtn onPress={() => goToFirstStep()}>
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