import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { getIcon } from '../../util/helper'

import { Container, ContainerIcon, InputComponent } from './styles';

type IconProps = {
  name: string;
  type: string;
  size: number;
  color: string;
}

type InputProps = {
  value: any;
  placeholder: string;
  onChangeText: Function;
  icon: IconProps;
}

const InputIcon: React.FC<InputProps> = ({value, placeholder, onChangeText, icon}) => {
  return (
    <Container>
      <ContainerIcon>
        { getIcon(icon.type, icon.name, icon.size, icon.color) }
      </ContainerIcon>
      <InputComponent
        underlineColorAndroid='transparent'
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder={placeholder}
      />
    </Container>
  );
}

export default InputIcon;