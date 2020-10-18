import React from 'react';
import { View } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import WithdrawalCard from './components/withdrawalCard';
import DeliveryCard from './components/deliveryCard';

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
  WithdrawalContainer
} from './styles';

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

const DeliveryStatus: React.FC = () => {
  return (
    <Container>
      <CustomHeader title='Em andamento' showBtnDelivery={false}/>
      <DeliveryStatusContainer>
        <StatusContainer>
          <FirstStatusSection>
            <StatusText>Em andamento</StatusText>
            <DeliveryTagText>Entrega #560987</DeliveryTagText>
            <DateText>Segunda, 09 de Maio</DateText>
          </FirstStatusSection>
          <SecondStatusSection>
            <LabelText>Valor Corrida</LabelText>
            <ValueText>R$ 24,60</ValueText>
          </SecondStatusSection>
        </StatusContainer>
        <DetailContainer>
          <WithdrawalContainer>
            <WithdrawalCard {...withdrawal1}/>
            <WithdrawalCard {...withdrawal2}/>
          </WithdrawalContainer>

          <DeliveryContainer>
            <DeliveryCard {...delivery1}/>
            <DeliveryCard {...delivery2}/>
          </DeliveryContainer>
        </DetailContainer>
      </DeliveryStatusContainer>

    </Container>
  );
}

export default DeliveryStatus;