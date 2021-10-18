import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserScreen from '../../screens/UserScreen';
import OrderListScreen from '../../screens/Orders/OrderListScreen'
import OrderDetailScreen from '../../screens/Orders/OrderDetailScreen'

import COLORS from '../../constants/colors'

const Stack = createNativeStackNavigator();

const ProductNavigator = () => (
    <Stack.Navigator
      initialRouteName={UserScreen}
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? COLORS.PACIFIC : '',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        }}
    >
    <Stack.Screen name="UserScreen" 
    component={UserScreen}
    options={{ title: 'Usuario' }} />
    <Stack.Screen
      name="OrderListScreen"
      component={OrderListScreen}
      options={{ title: 'Ordenes' }}
    />
    <Stack.Screen
      name="OrderDetailScreen"
      component={OrderDetailScreen}
      options={ ({route}) => ({title: "Compra Nro " + route.params.OrderId}) }
    />
        </Stack.Navigator>
);

export default ProductNavigator;