import React from 'react';
import { CircleStatus, Container, Description, DescriptionContainer, DescriptionTitle, TitleContainer, Label, AddressContainer } from './styles';

type Withdrawal = {
  index?: number;
  name?: string;
  neighboor?: string;
  street?: string;
  number?: string;
  finished?: boolean;
}

const WithdrawalCard: React.FC<Withdrawal> = (withdrawal) => {
  console.log('with: ', withdrawal)
  return (
    <Container>
      <TitleContainer>
        <CircleStatus {...{finished: withdrawal.finished}}/>
        <Label {...{finished: withdrawal.finished}}>Retirada { withdrawal.index }</Label>
      </TitleContainer>
      <DescriptionContainer>
        <DescriptionTitle {...{finished: withdrawal.finished}}>{ withdrawal.name }</DescriptionTitle>
        { !withdrawal.finished &&
          <AddressContainer>
            <Description>{ withdrawal.neighboor }</Description>
            <Description>{ withdrawal.street }</Description>
            <Description>{ withdrawal.number }</Description>
          </AddressContainer>
        }
      </DescriptionContainer>
    </Container>
  );
}

export default WithdrawalCard;