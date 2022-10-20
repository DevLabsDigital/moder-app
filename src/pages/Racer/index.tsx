import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import SwipeButton from 'rn-swipe-button';
import { TokensContext } from '../../contexts/Authentication';
import { OrderContext } from '../../contexts/Order';
import { fetchData } from '../../Settings';
import { getIcon } from '../../util/helper';
import { ClientDetail, ClientName, Container, ContainerImage, DeliveryDetail, Description, DetailContainer, FooterContainer, Header, Label, LogoImage, Price, Title, LogoContainer, Logo, AcceptView, CancelButton } from './styles';
interface Props {
  navigation: any
}
const Racer:React.FC<Props> = ({navigation}) => {
  const {currentOrder, setCurrentOrder} = useContext(OrderContext);
  const {token} = useContext(TokensContext);

  const accept = ()=>{
    fetchData({
      path: `/orders/${currentOrder?.id}/accept.json`,
      method: "POST",
      token: token,
      callback: (json)=>{
        
        setCurrentOrder(json.data.attributes)
        navigation.navigate('DeliveryStatus')
      }
    })
  }
  return (
    <Container>
      <ContainerImage source={require('../../images/background.png')}>
        <Header>
          <LogoImage source={require('../../images/group.png')}/>
          <Title>Nova entrega</Title>
        </Header>
        <DetailContainer>
          <DeliveryDetail>
            {/* <Label>Valor Corrida</Label>             */}
            {/* <Price>R$ 4,70</Price> */}
          </DeliveryDetail>
          <ClientDetail>
            <Label>Solicitado por</Label>
            <ClientName>{currentOrder?.company?.name}</ClientName>
            <Description>{currentOrder?.company?.address}</Description>
          </ClientDetail>
          <LogoContainer>
            <Logo source={require('../../images/logo.png')}/>
          </LogoContainer>
          
        </DetailContainer>
        <FooterContainer>
          <AcceptView>
            <SwipeButton
              thumbIconImageSource={require('../../images/group.png')}
              thumbIconBackgroundColor="#6dd400"
              railBackgroundColor="transparent"
              title="       Aceitar corrida"
              height={65}
              onSwipeSuccess={() => accept()}
            />
          </AcceptView>
          <CancelButton>
            { getIcon('AntDesign', 'close', 27, '#FFFFFF') }
          </CancelButton>
        </FooterContainer>
      </ContainerImage>
    </Container>
  );
}

export default Racer;