import React from 'react';
import { CircleStatus, Container, Description, DescriptionContainer, DescriptionTitle, TitleContainer, Label, AddressContainer, DescriptionCity, NoteDescription } from './styles';

type Delivery = {
  index?: number;
  name?: string;
  neighboor?: string;
  street?: string;
  number?: string;
  city?: string;
  finished: boolean;
  uf?: string;
  neighborhood?: string;
  note?: string;
}

const DeliveryCard: React.FC<Delivery> = (delivery) => {

  return (
    <Container>
      <TitleContainer>
        <Label {...{finished: delivery.finished}}>Entrega { delivery.index }</Label>
        <CircleStatus {...{finished: delivery.finished}}/>
      </TitleContainer>
      <DescriptionContainer>
        <DescriptionCity {...{finished: delivery.finished}}>{ delivery.city } - { delivery.uf }</DescriptionCity>        
        <DescriptionTitle {...{finished: delivery.finished}}>{ delivery.neighborhood }</DescriptionTitle>
        
        { !delivery.finished &&
          <AddressContainer>
            <Description>{ delivery.street }</Description>
            <Description>{ delivery.number }</Description>
          </AddressContainer>
        }
        <NoteDescription>{ delivery.note }</NoteDescription>
      </DescriptionContainer>
    </Container>
  );
}

export default DeliveryCard;