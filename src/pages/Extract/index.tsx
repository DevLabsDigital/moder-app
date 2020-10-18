import React from 'react';
import { View } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import { getIcon } from '../../util/helper';

import { Container, ExtractHeader, FirstRow, Label, SecondRow, ThirdRow, WalletImage, ContainerDescription, SectionTitle, SectionDescription, PayDetailsText, ExtractListContainer, ExtractRow, IdText, DateText } from './styles';

const Extract: React.FC = () => {
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
            <SectionTitle>R$ 562,00</SectionTitle>
            <SectionDescription>Total a receber</SectionDescription>
            <PayDetailsText>Próximo pagamento 22/03. Terça-Feira</PayDetailsText>
          </ContainerDescription>

        </SecondRow>
        <ThirdRow>
          <Label>Entregas</Label>
          <SectionDescription>71 entregas este mês</SectionDescription>
        </ThirdRow>
      </ExtractHeader>
      <ExtractListContainer>
        <ExtractRow {...{isGray: false}}>
          <IdText>#156168</IdText>
          <Label>R$ 3,15</Label>
          <DateText>22/03</DateText>
          { getIcon('Entypo', 'chevron-small-right', 24, 'black') }
        </ExtractRow>
        <ExtractRow {...{isGray: true}}>
          <IdText>#156128</IdText>
          <Label>R$ 13,15</Label>
          <DateText>25/03</DateText>
          { getIcon('Entypo', 'chevron-small-right', 24, 'black') }
        </ExtractRow>
        <ExtractRow {...{isGray: false}}>
          <IdText>#156178</IdText>
          <Label>R$ 34,15</Label>
          <DateText>25/03</DateText>
          { getIcon('Entypo', 'chevron-small-right', 24, 'black') }
        </ExtractRow>
        <ExtractRow {...{isGray: true}}>
          <IdText>#156128</IdText>
          <Label>R$ 13,15</Label>
          <DateText>25/03</DateText>
          { getIcon('Entypo', 'chevron-small-right', 24, 'black') }
        </ExtractRow>
        <ExtractRow {...{isGray: false}}>
          <IdText>#156178</IdText>
          <Label>R$ 34,15</Label>
          <DateText>25/03</DateText>
          { getIcon('Entypo', 'chevron-small-right', 24, 'black') }
        </ExtractRow>
      </ExtractListContainer>
    </Container>
  );
}

export default Extract;