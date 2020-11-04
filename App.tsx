import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login/index'
import Home from './src/pages/Home/index'
import DeliveryStatus from './src/pages/DeliveryStatus';
import Extract from './src/pages/Extract';
import Racer from './src/pages/Racer';
import FirstStep from './src/pages/Register/firstStep'
import SecondStep from './src/pages/Register/secondStep'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="FirstStep" 
          component={FirstStep}
          options={{ 
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="SecondStep" 
          component={SecondStep}
          options={{ 
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ 
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="DeliveryStatus" 
          component={DeliveryStatus}
          options={{ 
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Extract" 
          component={Extract}
          options={{ 
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Racer" 
          component={Racer}
          options={{ 
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
