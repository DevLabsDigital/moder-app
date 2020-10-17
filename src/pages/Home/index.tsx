import { Image, Text, View } from 'react-native';
import React, { FC, useState } from "react";
import CustomHeader from '../../components/CustomHeader';
import { 
  Container, 
  ContainerHome,
  ContainerSection,
  Label,
  ContainerDescription,
  SectionTitle,
  SectionDescription,
  StatusImage,
  WalletImage,
  ReportImage,
  ContainerAction,
  StatusText,
  ExtractBtn,
  ExtractText
} from './styles';
import { getIcon } from '../../util/helper';
import { ContainerLogo } from '../Login/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  navigation: any
}

const Home:FC<Props> = ({navigation}) => {
  
  return (
    <Container>
      <CustomHeader/>
      <ContainerHome>
        <Label>Status</Label>
        <ContainerSection>
          <StatusImage source={require('../../images/status-icon.png')} />
          <ContainerDescription>
            <SectionTitle>Offline</SectionTitle>
            <SectionDescription>Não quero realizar entregas</SectionDescription>
          </ContainerDescription>
          <ContainerAction>
            <TouchableOpacity onPress={() => navigation.navigate('DeliveryStatus')}>
              { getIcon('MaterialCommunityIcons', 'power', 36, 'red') }              
            </TouchableOpacity>
            <StatusText style={{color: 'red'}}>ficar online</StatusText>
          </ContainerAction>
        </ContainerSection>
        <Label>Carteira</Label>
        <ContainerSection>
          <WalletImage source={require('../../images/wallet-icon.png')} />
          <ContainerDescription>
            <SectionTitle>R$ 562,00</SectionTitle>
            <SectionDescription>Total a receber</SectionDescription>
          </ContainerDescription>
          <ContainerAction>
            { getIcon('Feather', 'eye-off', 36, '#000000') }
            <StatusText>ocultar</StatusText>
          </ContainerAction>
        </ContainerSection>
        <Label>Desempenho</Label>
        <ContainerSection>
          <ReportImage source={require('../../images/bike-icon.png')}/>
          <ContainerDescription>
            <SectionTitle>71 entregas este mês</SectionTitle>
            <SectionDescription>15 entregas hoje</SectionDescription>
          </ContainerDescription>
        </ContainerSection>
        <ExtractBtn>
            <ExtractText>Ver extrato de entregas detalhado</ExtractText>
            { getIcon('Entypo', 'chevron-small-right', 24, 'black') }
          </ExtractBtn>
        <ContainerLogo>
          <Image
              style={{width: '40%', height: 100, resizeMode: 'contain'}}
              source={require('../../images/logo.png')}
            />
        </ContainerLogo>
      </ContainerHome>
    </Container>
  )
};

export default Home;