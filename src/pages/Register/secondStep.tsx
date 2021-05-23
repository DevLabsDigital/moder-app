import CheckBox from '@react-native-community/checkbox';
import React, { FC, useState, useEffect, useContext, useRef } from "react";
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
import { RegisterDatasContext, RegisterData } from '../../contexts/Register';
import Settings, { fetchData } from '../../Settings';
import { MaskService } from 'react-native-masked-text';
interface Props {
  navigation: any
}

const SecondStep:FC<Props> = ({navigation}) => {
  const { registerData, setRegisterData } = useContext(RegisterDatasContext);
  const [cep, setCep] = useState(registerData?.address_attributes?.cep);
  const [address, setAddress] = useState(registerData?.address_attributes?.address);
  const [district, setDistrict] = useState(registerData?.address_attributes?.district);
  const [state, setState] = useState(registerData?.address_attributes?.state);
  const [city, setCity] = useState(registerData?.address_attributes?.city);
  const [terms, setTerms] = useState(false);
  
  const addressInput = useRef()
  const districtInput = useRef()
  const stateInput = useRef()
  const cityInput = useRef()
 

  const goToLogin = () => {
    navigation.navigate('Login')
    
  }

  const submit = ()=>{
    let newData = {
      ...registerData,
        cep,
        address,
        district,
        state,
        city
    }
    setRegisterData(newData)
    //alert(JSON.stringify(newData))
    registerUser()
  }

  const registerUser =() => {
    fetchData({
      method: "POST",
      path: '/users.json',
      params: {
        registerData
      },
      callback: (json)=>{
        alert(JSON.stringify(json))
      }
    })
  }

  let cepMask = (cep="")=>{
    return MaskService.toMask('custom', cep,{
      mask: '99.999-999'
    })
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
        <FormInput 
        onSubmitEditing={() => addressInput?.current?.focus()}
        returnKeyType="next"
        keyboardType={'number-pad'}
        value={cepMask(cep)} placeholder='CEP' onChangeText={(value) => setCep(value)}/>
        <FormInput 
        ref={addressInput}
        onSubmitEditing={() => districtInput?.current?.focus()}
        returnKeyType="next"
        value={address} placeholder='Endereço' onChangeText={(value) => setAddress(value)}/>
        <FormInput 
        ref={districtInput}
        onSubmitEditing={() => stateInput?.current?.focus()}
        returnKeyType="next"
        value={district} placeholder='Bairro' onChangeText={(value) => setDistrict(value)}/>
        <CityContainer>
          <FormInput 
          ref={stateInput}
          onSubmitEditing={() => cityInput?.current?.focus()}
          returnKeyType="next"
          value={state} placeholder='UF' onChangeText={(value) => setState(value)} style={{ flex: 1 }}/>
          <FormInput 
          ref={cityInput}
          value={city} placeholder='Cidade' onChangeText={(value) => setCity(value)} style={{ flex: 4 }}/>
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
        <SubmitButton onPress={submit}>
          <SubmitText>Concluir cadastro</SubmitText>
        </SubmitButton>
      </Form>
    </Container>
  )
};

export default SecondStep;