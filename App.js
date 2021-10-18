// Importo React para usar sus caracteristicas. Puntualmente tambien importo el hook useState
import React, {useState} from 'react';

// Importo los componentes que considero necesario de React Native
// Estos componentes serian el equivalente al HTML en React
import { Button, StyleSheet,Text, TouchableOpacity, View} from 'react-native';


import { StatusBar } from 'expo-status-bar';

// Pantallas 
import ListScreen from './screens/ListScreen.js';
import CategoriesScreen from './screens/ProductScreens/categoriesScreen'

// Navigator
import MainNavigator from './navigation/index'

//Redux
import { Provider } from 'react-redux'
import store from './store'

import { init,init_items,insertOrder,insertOrder_item,fetchOrders,selectItems,truncateTable,truncateTable2 } from './db/index.js';
// import { Tab } from 'react-native-elements/dist/tab/Tab';



export default function App() {
  const [modo, setmodo] = useState(false)
  const invertir = () => {
    setmodo(!modo) 
  }

  let pantalla = <ListScreen/>;

//Pendientes 
// Documentar

// Opcionales
// Resetear Stacks al cambiar de Tab
// Guardar Sesion con Async Storage

// Borrado para DEBUG
  // truncateTable("orders")
  // .then(() => console.log('Data Deleted'))
  // .catch(err => {
  //   console.log('Data failed to delete');
  //   console.log("Y el error fue " + err.message);
  // })

  // truncateTable("order_item")
  // .then(() => console.log('Data Deleted'))
  // .catch(err => {
  //   console.log('Data failed to delete');
  //   console.log("Y el error fue " + err.message);
  // })
  


  init()
  .then(() => console.log('Database initialized'))
  .catch(err => {
    console.log('Database failed to connect');
    console.log("El error fue " + err.message);
  })

  init_items()
  .then(() => console.log('Database initialized'))
  .catch(err => {
    console.log('Database failed to connect');
    console.log("El error fue " + err.message);
  })


  if (!modo) {
    pantalla = <MainNavigator/>
  }
  return (

    <Provider store={store} style={styles.container}>
      {pantalla}
      <StatusBar style="auto" />
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    // padding:30,
    // flexDirection: "column",
    // display: 'flex',
    flex:1

  },
});
