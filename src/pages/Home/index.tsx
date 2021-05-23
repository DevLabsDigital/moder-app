import { Image, Text, View } from 'react-native';
import React, { FC, Fragment, useContext, useEffect, useState } from "react";
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
import { TokensContext } from '../../contexts/Authentication';
import { fetchData } from '../../Settings';


interface Props {
  navigation: any
}

const Home:FC<Props> = ({navigation}) => {
  const { currentUser, token, setCurrentUser} = useContext(TokensContext);
  const [isOnline, setIsOnline] = useState(currentUser?.isOnline)

  useEffect(()=>{
    fetchData({
      path: '/deliverymen/fetch_data.json',
      token,
      callback: (json)=>{
        setCurrentUser(json?.data?.attributes)
        setIsOnline(json?.data?.attributes?.isOnline)
      }
    })
  }, [])
  const toggleUserOnline = (online) =>{
    setIsOnline(online)
    fetchData({
      method: "POST",
      path: '/deliverymen/toggle_online.json',
      params: {
        is_online: online
      },
      token,
      callback: (json)=>{
        setIsOnline(json.is_online)
      }
    })
    
    //navigation.navigate('DeliveryStatus')
  }
  let activeColor = () =>{
    return isOnline ? "green" : "red"
  }
  return (
    <Container>
      <CustomHeader title={`Olá, ${currentUser?.name}`} showBtnDelivery={true}/>
      <ContainerHome>
        <Label>Status</Label>
        <ContainerSection>
          <StatusImage source={require('../../images/status-icon.png')} />
          <ContainerDescription>
            {isOnline ? <Fragment>
              <SectionTitle>Online</SectionTitle>
              <SectionDescription>quero realizar entregas</SectionDescription>
            </Fragment> : 
            <Fragment>
              <SectionTitle>Offline</SectionTitle>
              <SectionDescription>Não quero realizar entregas</SectionDescription>
            </Fragment>
            }
          </ContainerDescription>
          <ContainerAction>
            <TouchableOpacity style={{alignItems: "center"}} onPress={() => toggleUserOnline(!isOnline)}>
              { getIcon('MaterialCommunityIcons', 'power', 36, activeColor()) }              
              <StatusText style={{color: activeColor(), textAlign: 'center'}}>ficar {isOnline ? 'offline' : 'online'}</StatusText>
            </TouchableOpacity>
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
            <TouchableOpacity onPress={() => navigation.navigate('Racer')}>
              { getIcon('Feather', 'eye-off', 36, '#000000') }
            </TouchableOpacity>
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
        <ExtractBtn onPress={() => navigation.navigate('Extract')}>
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