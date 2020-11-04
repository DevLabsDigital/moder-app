import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SwipeButton from 'rn-swipe-button';
import { getIcon } from '../../util/helper';
import { ClientDetail, ClientName, Container, ContainerImage, DeliveryDetail, Description, DetailContainer, FooterContainer, Header, Label, LogoImage, Price, Title, LogoContainer, Logo, Icon, AcceptView, CancelButton } from './styles';

const Racer: React.FC = () => {
  const FacebookIcon = <Icon name="facebook" color="#3b5998" size={30} />;
  return (
    <Container>
      <ContainerImage source={require('../../images/background.png')}>
        <Header>
          <LogoImage source={require('../../images/group.png')}/>
          <Title>Nova entrega</Title>
        </Header>
        <DetailContainer>
          <DeliveryDetail>
            <Label>Valor Corrida</Label>            
            <Price>R$ 4,70</Price>
          </DeliveryDetail>
          <ClientDetail>
            <Label>Solicitado por</Label>
            <ClientName>Burguer King</ClientName>
            <Description>Setor Central - Jataí-GO</Description>
            <Description>Avenida das Nações, 987</Description>
            <Description>Qd.09, Lt.19 - n.6778 </Description>
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
              title="Aceitar corrida"
              height={65}
              onSwipeSuccess={() => console.log('Slide success!')}
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