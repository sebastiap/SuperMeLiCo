   
import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from '../../screens/ProductScreens/cartScreen';
import  COLORS  from '../../constants/colors';

const Stack = createNativeStackNavigator();

const CartNavigator = () => (
  <Stack.Navigator
    initialRouteName="Cart"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.PACIFIC : '',
      },
      headerTintColor: Platform.OS === 'android' ? COLORS.JUNGLE: COLORS.SILVERSAND,
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}
  >
    <Stack.Screen
      name="Cart"
      component={CartScreen}
      options={{ title: 'Carrito' }}
    />
  </Stack.Navigator>
);

export default CartNavigator;