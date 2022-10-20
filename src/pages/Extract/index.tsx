import React, { useContext } from 'react';
import { View } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import { OrderContext } from '../../contexts/Order';
import { getIcon } from '../../util/helper';

import { Container, ExtractHeader, FirstRow, Label, SecondRow, ThirdRow, WalletImage, ContainerDescription, SectionTitle, SectionDescription, PayDetailsText, ExtractListContainer, ExtractRow, IdText, DateText } from './styles';
interface Props {
  navigation: any
}
const Extract:React.FC<Props> = ({navigation}) => {
  const {orders, setOrders, currentOrder, setCurrentOrder} = useContext(OrderContext);

  const openOrder= (order) => {
    setCurrentOrder(order)
    navigation.navigate('DeliveryStatus')
  }
  return (
    <Container>
      <CustomHeader title='Extrato' showBtnDelivery={true} />
      <ExtractHeader>
        <FirstRow>
          <Label>Carteira</Label>
        </FirstRow>
        <SecondRow>
        <WalletImage source={require('../../images/wallet-icon.png')} />
          <ContainerDescription>
            <SectionTitle>R$ --,--</SectionTitle>
            <SectionDescription>Total a receber</SectionDescription>
            <PayDetailsText>Próximo pagamento --/--. Terça-Feira</PayDetailsText>
          </ContainerDescription>

        </SecondRow>
        <ThirdRow>
          <Label>Entregas</Label>
          <SectionDescription>{orders?.filter((order)=> order.createdThisMonth)?.length} entregas este mês</SectionDescription>
        </ThirdRow>
      </ExtractHeader>
      <ExtractListContainer>
        {orders?.map((order)=>{
          return <ExtractRow onPress={()=> openOrder(order)} {...{isGray: false}}>
            <IdText>#{order.id}</IdText>
            {/* <Label>R$  </Label> */}
            <DateText>{order.createdAt}</DateText>
            { getIcon('Entypo', 'chevron-small-right', 24, 'black') }
          </ExtractRow>
        })}
        
        
      </ExtractListContainer>
    </Container>
  );
}

export default Extract;