import React, { FC } from "react";
import { Text } from "react-native";
import { Container, ContainerHeader, ContainerEnd, Title } from './styles'
import { StatusBar } from "expo-status-bar";
import { getIcon } from '../../util/helper'

type HeaderProps = {
  title: string;
  showBtnDelivery: boolean;
}

const CustomHeader:FC<HeaderProps> = ({title, showBtnDelivery}) => {
  return (
    <Container>
      <StatusBar backgroundColor="#e0e0e0" />
      <ContainerHeader>
        { getIcon('Feather', 'menu', 24, '#000000') }
        <Title>{ title }</Title>
        <ContainerEnd>
          { showBtnDelivery && getIcon('MaterialCommunityIcons', 'motorbike', 27, '#e0e0e0') }
          { getIcon('Entypo', 'dots-three-vertical', 27, '#6d7278') }
        </ContainerEnd>
      </ContainerHeader>
    </Container>
  )
}

export default CustomHeader;