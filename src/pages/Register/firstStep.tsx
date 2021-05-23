import { Platform } from 'react-native';
import React, { FC, useState, useEffect, useContext, useRef } from "react";
import InputIcon from '../../components/InputIcon';

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
  DocumentContainer,
  DocumentImage,
  DocumentDescription,
  ImageButton
} from './styles';
import { getIcon } from '../../util/helper';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import { RegisterData, RegisterDatasContext } from '../../contexts/Register';
import { MaskService } from 'react-native-masked-text';

interface Props {
  navigation: any
}

const FirstStep:FC<Props> = ({navigation}) => {
  const { registerData, setRegisterData } = useContext(RegisterDatasContext);
  const [name, setName] = useState(registerData?.name);
  const [email, setEmail] = useState(registerData?.email);
  // const [password, setPassword] = useState(registerData?.email);
  const [cpf, setCpf] = useState(registerData?.cpf);
  const [phone, setPhone] = useState(registerData?.phone);
  const [vehicle, setVehicle] = useState(registerData?.vehicle);
  const [image, setImage] = useState(undefined);

  const phoneInput = useRef();
  const cpfInput = useRef();
  const emailInput = useRef();
  const vehicleInput = useRef();
  

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }) as any;

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const goToLogin = () => {
    navigation.navigate('Login')
  }

  const goToSecondStep = () => {
    
    let newRegisterData: RegisterData = {
      name,
      cpf,
      email,
      phone,
      vehicle,
    }
    setRegisterData(newRegisterData)
    navigation.navigate('SecondStep')
  }
  const maskCpf = (cpf="")=>{
    return MaskService.toMask('cpf', cpf)
  }

  const maskPhone=(phone="")=>{
    return MaskService.toMask('cel-phone', phone)
    
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
        <Description>Que bom ter você por aqui!</Description>
        <FormInput 
          onSubmitEditing={() => cpfInput?.current?.focus()}
          returnKeyType="next"
          keyboardType={'default'} value={name} placeholder='Nome Completo' onChangeText={(value) => setName(value)}/>
        <FormInput 
          ref={cpfInput}
          onSubmitEditing={() => emailInput?.current?.focus()}
          returnKeyType="next"
          keyboardType={'number-pad'} value={maskCpf(cpf)} placeholder='CPF' onChangeText={(value) => setCpf(value)}/>
        <FormInput 
          ref={emailInput}
          onSubmitEditing={() => phoneInput?.current?.focus()}
          returnKeyType="next"
          keyboardType={'email-address'} value={email} placeholder='E-mail' onChangeText={(value) => setEmail(value)}/>
        <FormInput 
          ref={phoneInput}
          onSubmitEditing={() => vehicleInput?.current?.focus()}
          returnKeyType="next"
          keyboardType={'phone-pad'} value={maskPhone(phone)} placeholder='Telefone' onChangeText={(value) => setPhone(value)}/>
        <FormInput 
          ref={vehicleInput}
          keyboardType={'default'} value={vehicle} placeholder='Veículo utilizado' onChangeText={(value) => setVehicle(value)}/>
        <DocumentContainer>
          <ImageButton onPress={pickImage}>
            <DocumentImage 
              source={{
                uri: image,
              }}
            />
          </ImageButton>
          <DocumentDescription>Clique no ícone ao lado e adicione uma foto de sua Carteira Nacional de Habilitação (válida).</DocumentDescription>
        </DocumentContainer>
        <SubmitButton onPress={goToSecondStep}>
          <SubmitText>Avançar</SubmitText>
        </SubmitButton>
      </Form>
    </Container>
  )
};

export default FirstStep;