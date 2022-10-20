import { Alert, Image, Text, View } from 'react-native';
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
import OneSignal from 'react-native-onesignal';
import { OrderContext, Order } from '../../contexts/Order';


interface Props {
  navigation: any
}

const Home:FC<Props> = ({navigation}) => {
  const { currentUser, token, setCurrentUser} = useContext(TokensContext);
  const [isOnline, setIsOnline] = useState(currentUser?.isOnline)
  const {orders, setOrders, currentOrder, setCurrentOrder} = useContext(OrderContext);
  const [todayOrders, setTodayOrders] = useState([]);
  const [monthOrders, setMonthOrders] = useState([]);

  useEffect(()=>{
    fetchData({
      path: '/deliverymen/fetch_data.json',
      token,
      callback: (json)=>{
        setCurrentUser(json?.data?.attributes)
        setIsOnline(json?.data?.attributes?.isOnline)
        setupOneSignal(json)
        getOrders()
      }
    })
  }, [])

  const setupOneSignal = (userData) =>{
      /* O N E S I G N A L   S E T U P */
      interface NotificationData {
        notification_type?: string 
      }
      try{
        OneSignal.setLogLevel(6, 0);
        OneSignal.setAppId("02a91ec1-1013-4c40-a5bd-f498f427174e")
        OneSignal.setEmail(userData.email)
        OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
          console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
          let notification = notificationReceivedEvent.getNotification();
          //console.log("notification: ", notification);
          //alert(JSON.stringify(notification.additionalData))
          //setCurrentOrder(notification.additionalData?.["order"]?.["data"]?.["attributes"])
          
          const data = notification.additionalData as NotificationData;
          //console.log("additionalData: ", data);
          //alert(JSON.stringify(data.notification_type))
          //const button2 = { text: "Complete", onPress: () => { notificationReceivedEvent.complete(notification); }};
          if(data.notification_type == "new_order"){
            
            setCurrentOrder(notification.additionalData?.["order"]?.["data"]?.["attributes"])
            setTimeout(()=>{
              showOrderScreen()
            }, 200)
            
          }
         });
      }catch(e){

      }
  }

  const showOrderScreen = () =>{
    navigation.navigate('Racer')
  }
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

  const getOrders = () =>{
    fetchData({
      method: "GET",
      path: '/orders.json',
      token,
      callback: (json)=>{
        let ordersData = json.data.map((order)=> order.attributes)
        let monthData = json.data.filter((order)=> order.attributes.createdThisMonth)
        let todayData = json.data.filter((order)=> order.attributes.createdToday)
        setOrders(ordersData)
        setTodayOrders(todayData)
        setMonthOrders(monthData)
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
            <SectionTitle>R$ 00,00</SectionTitle>
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
            <SectionTitle>{monthOrders?.length} entregas este mês</SectionTitle>
            <SectionDescription>{todayOrders?.length} entregas hoje</SectionDescription>
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