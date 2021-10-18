  
import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Modal,
} from 'react-native';
import  COLORS  from '../constants/colors';

const modal = (props)=> {
    const { modalVisible, itemSelected , handleConfirmDelete, handleModalCancel,GlobalOption } = props;
return (      
<Modal animationType="slide" visible={modalVisible}>
      {!GlobalOption?  
      <View>
        <View style={styles.modalTitle}><Text >Eliminar un item de la lista </Text></View>
        <View style={styles.modalMessage}><Text style={styles.modalQuestion}>Esta seguro de que quiere borrar este item?</Text></View>
        <View style={styles.modalMessage}><Text style={styles.modalItem}> {itemSelected.value}</Text></View>
      </View>
      :
      <View>
        <View style={styles.modalTitle}><Text >Agregar Items al Carrito </Text></View>
        <View style={styles.modalMessage}><Text style={styles.modalQuestion}> Todos los Articulos que sean encontrados en nuestras bases seran incorporados al Carrito. Desea Confirmar?</Text></View>
      </View>
      }
      
      <View style={styles.modalButtonGroup}>
        <View style={styles.modalButton}><Button style={styles.modalButton} title="Confirmar" onPress={handleConfirmDelete}/></View>
        <View style={styles.modalButton}><Button title="Cancelar" onPress={handleModalCancel}/></View>
      </View>
    </Modal>)
};


const styles = StyleSheet.create({ 
  modalTitle: {
    backgroundColor: COLORS.SILVERSAND,
    color: 'white',
    height: 30,
    alignItems: 'center',
  },
  modalMessage: {
    marginBottom:10,
    justifyContent:'center',
    alignItems:'center',
    alignContent: 'center'
  },
  modalButtonGroup: {
    flexDirection: 'row',
  justifyContent:'space-around',
  
},

  modalButton: {
    marginBottom:10,
    color: COLORS.SILVERSAND,

  },

  modalQuestion: {
    fontSize:20,
    textAlign:'center'
  
  },
  modalItem: {
      fontSize:30},
});

export default modal;