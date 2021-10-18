import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,Text, TouchableOpacity, View} from 'react-native';

import Modal from "../components/Modal.js";
import List from '../components/List/List.js';
import AddItem from '../components/AddItem.js';
import { useDispatch } from 'react-redux';

import { addItem } from '../store/actions/cart.actions';

import COLORS from '../constants/colors.js';

//SACAR DESPUES
import { PRODUCTS } from "../data/products"

const ListScreen = () => {
  const [textItem, settextItem] = useState('')
  const [itemList, setItemList] = useState([])
  const [inputError, setInputError] = useState('');

  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  const [modalCVisible, setModalCVisible] = useState(false)

    //REDUX
  const dispatch = useDispatch();
  

  const handlerAddItemCart = () => {
    let newlist = [];
    let producto = null;
    itemList.forEach(Prod => {
      (producto = PRODUCTS.filter((item) => Prod.value == item.name)); 
      if (producto[0] != null ) {
      for (let i = 0; i < Prod.quantity; i++) {
        newlist= [...newlist,producto[0]] 
      } 
    }  
    }
    );
    newlist.forEach(Prod => dispatch(addItem(Prod)));
    newlist = [];
    setItemList([])
    setModalCVisible(false);
  };
    

//Metodos AddItem
//Cuando ingresan un item, lo actualizo dinamicamente
const handleChangeText = (text) => {
  settextItem(text);
  setInputError('');
};

//Valida y Agrega un item a la lista si no esta vacio ni repetido
const handleAddItem = () =>{
  let grabo = false;
  let completado = false;
  let error = ""

  {textItem == ""?  error = "El campo no puede estar vacio" : completado=true}

  let lista = itemList.find(item => item.value === textItem)

  if (completado && lista == undefined) {
    grabo=true
  }
  else {
    grabo=false;
    if (completado) {
      error = 'Ese item ya esta en la lista';
    }
  }

  {grabo ? (
            setItemList(currentItems => [
              ...currentItems,
                {id: Math.random().toString(),
                value: textItem,
                quantity:1}
              ])) 
  : setInputError(error); }
  settextItem("")
}

//Metodos List

  const handleModal = id => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(true);
  }


  const handleConfirmDelete = () => {
    //Si no hay nada seleccionado es porque estoy borrando todo
    if (typeof itemSelected !== "undefined") {
    // Devuelve la lista menos lo que  es igual al id seleccionado 
    setItemList(itemList => itemList.filter(item => item.id !== itemSelected.id))
    setItemSelected({})
    }
    else {
    setItemList([])
    }
    setModalVisible(false)
  }
  const handleModalCancel = () => {
    setModalVisible(false)
  }

  const handleModalConfirm = () => {
    setModalCVisible(true);
  }
  const handleModalConfirmCancel = () => {
    setModalCVisible(false);
  }
  return (

    <View style={styles.container}>
      <Text style={styles.title}> Mi Lista </Text>
      <Text >Ingrese los articulos que desea agregar al carrito.</Text>

      <AddItem
      //Componente para agregar Items, le paso los 2 metodos que usara y 2 variables para mostrar informacion
        handleChangeText={handleChangeText}
        handleAddItem={handleAddItem}
        inputError={inputError}
        inputText={textItem}
      />
      <List
        itemList={itemList}
        handleModal={handleModal}
      />
      <Modal
        modalVisible={modalVisible}
        handleConfirmDelete={handleConfirmDelete}
        handleModalCancel={handleModalCancel}
        itemSelected={itemSelected}
        GlobalOption={false}
      />
      <Modal
        modalVisible={modalCVisible}
        handleConfirmDelete={handlerAddItemCart}
        handleModalCancel={handleModalConfirmCancel}
        itemSelected={itemSelected}
        GlobalOption={true}
      />
      <StatusBar style="auto" />
      {itemList.length > 0? 
      <View>
        <TouchableOpacity style={styles.confirmButton} onPress={handleModalConfirm} >
          <Text style={styles.resetText}>Confirmar Lista</Text>
        </TouchableOpacity>
      </View>:
       <View/>}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding:30,
    flexDirection: "column",
    display: 'flex',
    flex:1,
    backgroundColor: COLORS.BEAUBLUE,

  },
  title: {
    fontSize: 30,
    fontWeight:'bold',
    textAlign: 'center',
    paddingBottom:20,
    paddingTop:15

  },
  resetButton: {
    backgroundColor: COLORS.PACIFIC,
    alignItems: 'center',
    width: "100%",
    height: 40,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 130,
    paddingBottom: 50
  },
  confirmButton: {
    backgroundColor: COLORS.PACIFIC,
    alignItems: 'center',
    width: "100%",
    height: 40,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 120,
    paddingBottom: 50
  },
  resetText: {
    fontSize: 30,
    textAlign: 'center',
  }

});

export default ListScreen;