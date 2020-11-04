import CheckBox from '@react-native-community/checkbox';
import React, { FC, useState, useEffect } from "react";
import { 
  CloseButton,
  Container,
  Form,
  Header,
  Title,
  Description,
  FormInput,
  SubmitButton,
  SubmitText,
  CityContainer,
  TermsContainer,
  DocumentDescription
} from './styles';
import { getIcon } from '../../util/helper';
import { StatusBar } from 'expo-status-bar';

interface Props {
  navigation: any
}

const SecondStep:FC<Props> = ({navigation}) => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [terms, setTerms] = useState(false);

  const goToLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <Container>
      <StatusBar backgroundColor="#e0e0e0" />
      <Header>
        <CloseButton onPress={goToLogin}>
          { getIcon('AntDesign', 'close', 24, '#0091ff') }
        </CloseButton>
        <Title>MODER DELIVERY - CADASTRO</Title>
      </Header>
      <Form>
        <Description>Informe seu endereço e conclua seu cadastro</Description>
        <FormInput value={cep} placeholder='CEP' onChangeText={(value) => setCep(value)}/>
        <FormInput value={address} placeholder='Endereço' onChangeText={(value) => setAddress(value)}/>
        <FormInput value={district} placeholder='Bairro' onChangeText={(value) => setDistrict(value)}/>
        <CityContainer>
          <FormInput value={state} placeholder='UF' onChangeText={(value) => setState(value)} style={{ flex: 1 }}/>
          <FormInput value={city} placeholder='Cidade' onChangeText={(value) => setCity(value)} style={{ flex: 4 }}/>
        </CityContainer>
        <TermsContainer>
          <CheckBox
            disabled={false}
            value={terms}
            onValueChange={(value) => setTerms(value)}
          />
          <DocumentDescription>
            Li e aceito os Termos e Condições e 
            Declaração de Privacidade.
          </DocumentDescription>
        </TermsContainer>
        <SubmitButton>
          <SubmitText>Concluir cadastro</SubmitText>
        </SubmitButton>
      </Form>
    </Container>
  )
};

export default SecondStep;