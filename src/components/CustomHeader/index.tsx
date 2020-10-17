import React, { FC } from "react";
import { Text } from "react-native";
import { Container, ContainerHeader, ContainerEnd, Title } from './styles'
import { StatusBar } from "expo-status-bar";
import { getIcon } from '../../util/helper'

const CustomHeader:FC = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#e0e0e0" />
      <ContainerHeader>
        { getIcon('Feather', 'menu', 24, '#000000') }
        <Title>Olá, Fabiano</Title>
        <ContainerEnd>
          { getIcon('MaterialCommunityIcons', 'motorbike', 27, '#e0e0e0') }
          { getIcon('Entypo', 'dots-three-vertical', 27, '#6d7278') }
        </ContainerEnd>
      </ContainerHeader>
    </Container>
  )
}

export default CustomHeader;