import { Platform } from 'react-native';
import React, { FC, useState, useEffect } from "react";
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

interface Props {
  navigation: any
}

const FirstStep:FC<Props> = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [document, setDocument] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');

  const [image, setImage] = useState(undefined);

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
    navigation.navigate('SecondStep')
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
        <FormInput value={name} placeholder='Nome Completo' onChangeText={(value) => setName(value)}/>
        <FormInput value={document} placeholder='CPF' onChangeText={(value) => setDocument(value)}/>
        <FormInput value={email} placeholder='E-mail' onChangeText={(value) => setEmail(value)}/>
        <FormInput value={phone} placeholder='Telefone' onChangeText={(value) => setPhone(value)}/>
        <FormInput value={vehicle} placeholder='Veículo utilizado' onChangeText={(value) => setVehicle(value)}/>
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