import React, { useContext } from 'react';
import { Alert, View } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import WithdrawalCard from './components/withdrawalCard';
import DeliveryCard from './components/deliveryCard';
import {Linking} from 'react-native'
import { 
  Container, 
  DeliveryStatusContainer, 
  StatusContainer, 
  StatusText, 
  DeliveryTagText, 
  FirstStatusSection, 
  SecondStatusSection, 
  DateText,
  LabelText,
  ValueText,
  DetailContainer,
  DeliveryContainer,
  WithdrawalContainer,
  DeliveryButton,
  DeliveryButtonText,
  GetBad,
  GetBadText,
  Center,
  CompletedTag,
  CompletedTagImage,
  CompletedText,
  CompletedTextSmall
} from './styles';
import { OrderContext } from '../../contexts/Order';
import { fetchData } from '../../Settings';
import { TokensContext } from '../../contexts/Authentication';

const withdrawal1 = {
  index: 1,
  name: 'Burguer King 85',
  neighboor: 'Setor Coimbra',
  street: 'Avenida D, 439',
  number: 'Qd.30, Lt.9',
  finished: true
}
const withdrawal2 = {
  index: 2,
  name: 'Burguer King 136',
  neighboor: 'Setor Marista',
  street: 'Avenida 136',
  number: 'Qd.10, Lt.9',
  finished: false
}
const delivery1 = {
  index: 1,
  city: 'Jatái-Go',
  neighboor: 'Setor Coimbra',
  street: 'Avenida D, 439',
  number: 'Qd.30, Lt.9',
  finished: true
}
const delivery2 = {
  index: 2,
  city: 'Jatái-Go',
  neighboor: 'Setor Marista',
  street: 'Avenida T-41',
  number: '345',
  finished: false
}

interface Props {
  navigation: any
}

const DeliveryStatus:React.FC<Props> = ({navigation}) => {
  const {currentOrder, setCurrentOrder} = useContext(OrderContext)
  const { token} = useContext(TokensContext);
  
  const updateOrderState = ()=>{
    if (currentOrder?.state == "completed"){
      navigation.navigate('Home');
    }
    else{
      Alert.alert("Status","Deseja atualizar o status?",[
        {
          "text": "Não"
        },
        {
          "text": "Sim",
          onPress:()=>{
            fetchData({
              path: `/orders/${currentOrder?.id}/status`,
              method: "PUT",
              token,
              callback: (json)=>{
                try {
                  console.log(JSON.stringify(json.data.attributes))
                  // alert(json.data.attributes.destinationAccountable)
                  setCurrentOrder(json.data.attributes)
                  // Alert.alert("Confirmação","Status atualizado")
                } catch (error) {
                  Alert.alert("Erro","Erro ao atualizar status")
                }
                
              }
              
            })
          }
        }
      ])
    }
    
  }

  const completedTag =()=>{
    if(currentOrder?.state == "completed"){
      return <>
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          <CompletedTag >
            <CompletedTagImage source={require('../../images/check-ico.png')} />
          </CompletedTag>
        </View>
      </>
    }
  }

  return (
    <Container>
      <CustomHeader title={currentOrder?.stateLabel == "CONCLUIDO" ? "CONCLUIDO" : "EM ANDAMENTO"} showBtnDelivery={false}/>
      <DeliveryStatusContainer>
        <StatusContainer>
          <FirstStatusSection>
            <StatusText>{currentOrder?.stateLabel}</StatusText>
            <DeliveryTagText>Entrega #{currentOrder?.id}</DeliveryTagText>
            <DateText>{currentOrder?.createdAt}</DateText>
          </FirstStatusSection>
          <SecondStatusSection>
            <LabelText>Valor Corrida</LabelText>
            <ValueText>R$ 24,60</ValueText>
          </SecondStatusSection>
        </StatusContainer>
        <DetailContainer>
          <WithdrawalContainer>
            <WithdrawalCard
              index={currentOrder?.id}
              name={currentOrder?.company?.name}
              neighboor={currentOrder?.company?.neighborhood}
              street={currentOrder?.company?.address}
              number={""}
              finished={!!currentOrder?.isPicked}
            />
          </WithdrawalContainer>
          {completedTag()}
          <DeliveryContainer>
            <DeliveryCard 
              index={currentOrder?.id}
              name={currentOrder?.destinationAccountable}
              neighboor={currentOrder?.destinationAddress}
              street={currentOrder?.destinationAddress}
              city={currentOrder?.destinationCity}
              uf={currentOrder?.destinationState}
              neighborhood={currentOrder?.destinationNeighborhood}
              note={currentOrder?.note}
              number={""}
              finished={!!currentOrder?.isDelivered}
            />
          </DeliveryContainer>
        </DetailContainer>
      </DeliveryStatusContainer>
      {["back_to_company", "completed"].includes(currentOrder?.state || "error")&& <>
        <View>
          <CompletedText>Entrega Concluida</CompletedText>
          {currentOrder?.state == "back_to_company" && <>
            <CompletedTextSmall>Retorne ao estabelecimento pra concluir sua rota</CompletedTextSmall>
          </>}
        </View>
      </>}
      {currentOrder?.state != "completed" && <>
      <Center>
        <GetBad onPress={()=> Linking.openURL(`tel:${55555555}`)}>
          <GetBadText>Deu ruim :(</GetBadText>
        </GetBad>
      </Center>
      </>}
      <DeliveryButton onPress={()=> updateOrderState()}>
        <DeliveryButtonText>
          {currentOrder?.actionText}
        </DeliveryButtonText>
      </DeliveryButton>
    </Container>
  );
}

export default DeliveryStatus;