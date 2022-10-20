import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login/index'
import Home from './src/pages/Home/index'
import DeliveryStatus from './src/pages/DeliveryStatus';
import Extract from './src/pages/Extract';
import Racer from './src/pages/Racer';
import FirstStep from './src/pages/Register/firstStep'
import SecondStep from './src/pages/Register/secondStep'
import { TokensContext, User } from './src/contexts/Authentication';
import { RegisterDatasContext, RegisterData } from './src/contexts/Register';
import { Order, OrderContext } from './src/contexts/Order';



const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState<User>();
  const [registerData, setRegisterData] = useState<RegisterData>();
  const [currentOrder, setCurrentOrder] = useState<Order>();
  const [orders, setOrders] = useState<Order[]>();
  

  const getToken = () => {
    setIsLoading(true);
  }
 
  const removeToken = ()=>{
    setToken("")
  }
  return (
   
    <RegisterDatasContext.Provider value={{
      registerData,
      setRegisterData
    }}>
      <TokensContext.Provider value={{
        token,
        currentUser,
        isLoading,
        getToken,
        removeToken,
        setToken,
        setCurrentUser
      }}>
        <NavigationContainer>
          <OrderContext.Provider value={{
            currentOrder, setCurrentOrder, orders, setOrders
          }}>
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
          </OrderContext.Provider>
        </NavigationContainer>
      </TokensContext.Provider>
    </RegisterDatasContext.Provider>
    
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
