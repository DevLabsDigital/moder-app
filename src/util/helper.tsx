import React from 'react';
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"

export const getIcon = (type, name, size, color) => {
  switch(type) {
    case 'AntDesign': {
      return (
        <AntDesign name={name} size={size} color={color}></AntDesign>
      )
      break;
    }
    case 'Entypo': {
      return (
        <Entypo name={name} size={size} color={color}/>
      )
    }
    case 'Feather': {
      return (
        <Feather name={name} size={size} color={color}/>
      )
    }
    case 'Foundation': {
      return (
        <Foundation name={name} size={size} color={color}/>
      )
    }
    case 'FontAwesome': {
      return (
        <FontAwesome name={name} size={size} color={color}/>
      )
    }
    case 'Ionicons': {
      return (
        <Ionicons name={name} size={size} color={color}/>
      )
    }
    case 'MaterialIcons': {
      return (
        <MaterialIcons name={name} size={size} color={color}/>
      )
    }
    case 'MaterialCommunityIcons': {
      return (
        <MaterialCommunityIcons name={name} size={size} color={color}/>
      )
    }
    case 'FontAwesome5': {
      return (
        <FontAwesome5 name={name} size={size} color={color}/>
      )
    }
  }
}