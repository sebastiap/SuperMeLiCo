import React from 'react';
import { Platform } from 'react-native';

//Esta linea se saca para hacer el nuevo Stack compartido
// import {createStackNavigator} from "@react-navigation/stack";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../../screens/ProductScreens/categoriesScreen";
import ProductScreen from "../../screens/ProductScreens/ProductScreen";
import DetailScreen from '../../screens/ProductScreens/DetailScreen';

import COLORS from '../../constants/colors'

const Stack = createNativeStackNavigator();

const ROUTES = {
    HOME: 'Categorias',
    PRODUCTLIST: 'Productos',
    DETALLE: 'DETALLE'
};

const ProductNavigator = () => (
   // Se saca esto cuando se incluye un navigator combinado
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? COLORS.PACIFIC : '',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        }}
    >
            <Stack.Screen name={ROUTES.HOME} options = {{title:"SELECCIONE UNA CATEGORIA"}} component={CategoriesScreen} />
            <Stack.Screen name={ROUTES.PRODUCTLIST} options={ ({route}) => ({title: route.params.name}) } component={ProductScreen} />
            <Stack.Screen name={ROUTES.DETALLE}         options={({ route }) => ({
          title: route.params.name,
        })} component={DetailScreen} />
        </Stack.Navigator>
    // </NavigationContainer>
);

export default ProductNavigator;