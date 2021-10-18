import React from 'react';
import { StyleSheet,View,Text } from 'react-native';

// Importo esto para usar los tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import COLORS from '../../constants/colors';

// Como Exporto por default le puedo poner el nombre que quiera al importar
import CartScreens from '../Cart/CartNavigator';
import ProductScreens from '../Product/ProductNavigator';
import UserScreens from '../User/userNavigator';

import ListScreen from '../../screens/ListScreen';

// Este componente de Tabs le paso un componente de React
// Dicho componente a su vez es un Navigator que tiene su propio Stack de pantallas
const Tabs = createBottomTabNavigator();

const TabNavigator = () => (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.shadow, ...styles.tabBar },
      }}
      initialRouteName="Shop"
    >
      <Tabs.Screen
        name="ShopTab"
        component={ProductScreens}
        options={{
          tabBarIcon: () => (
            <View style={styles.item}>
              <Ionicons name="md-basket" size={24} color="black" />
              <Text>Tienda</Text>
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="CartTab"
        component={CartScreens}
        options={{
          tabBarIcon: () => (
            <View style={styles.item}>
              <Ionicons name="md-cart" size={24} color="black" />
              <Text>Carrito</Text>
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="ListTab"
        component={ListScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.item}>
              <Ionicons name="document-outline" size={24} color="black" />
              <Text>Mi Lista</Text>
            </View>
          )
        }}
      />
        <Tabs.Screen
        name="UserScreens"
        component={UserScreens}
        options={{
          tabBarIcon: () => (
            <View style={styles.item}>
              <Ionicons name="person-outline" size={24} color="black" />
              <Text >Usuario</Text>
            </View>
          )
        }}
      />
    </Tabs.Navigator>
  )
  
  
  const styles = StyleSheet.create({
    shadow: {
      shadowColor: 'white',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.25,
      shadowRadius: 0.25,
      elevation: 5,
    },
    tabBar: {
      position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      borderRadius: 15,
      height: 90,
      backgroundColor: COLORS.PACIFIC
    },
    item: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
  
export default TabNavigator;



