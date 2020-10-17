import React from 'react';
import { CircleStatus, Container, Description, DescriptionContainer, DescriptionTitle, TitleContainer, Label, AddressContainer, DescriptionCity } from './styles';

type Delivery = {
  index: number;
  neighboor: string;
  street: string;
  number: string;
  city: string;
  finished: boolean;
}

const DeliveryCard: React.FC<Delivery> = (delivery) => {

  return (
    <Container>
      <TitleContainer>
        <Label {...{finished: delivery.finished}}>Retirada { delivery.index }</Label>
        <CircleStatus {...{finished: delivery.finished}}/>
      </TitleContainer>
      <DescriptionContainer>
        <DescriptionCity {...{finished: delivery.finished}}>{ delivery.city }</DescriptionCity>        
        <DescriptionTitle {...{finished: delivery.finished}}>{ delivery.neighboor }</DescriptionTitle>
        { !delivery.finished &&
          <AddressContainer>
            <Description>{ delivery.street }</Description>
            <Description>{ delivery.number }</Description>
          </AddressContainer>
        }
      </DescriptionContainer>
    </Container>
  );
}

export default DeliveryCard;