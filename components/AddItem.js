import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import COLORS from '../constants/colors';

const AddItem = ({
  handleChangeText,
  handleAddItem,
  inputText,
  inputError,
}) => {
return (       
 <View >
   <View style={styles.inputcontainer}>
      <TextInput placeholder="Ingrese un articulo " style={styles.input} value={inputText} onChangeText={handleChangeText}></TextInput>
      <TouchableOpacity
      style={styles.button} onPress={handleAddItem}   >
        <Text>Agregar</Text>
      </TouchableOpacity>
    </View>
    <View>
      <Text style={styles.inputError}>{inputError}</Text>
    </View>
    
 </View>     )
};


const styles = StyleSheet.create({ 
    inputcontainer: {
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
      },
    input: {
        borderBottomColor:'black',
        borderBottomWidth: 1,
        width: 200
      },
      button: {
        backgroundColor: COLORS.PACIFIC,
        padding: 10
      },
      inputError: {
        color: COLORS.CLARET,
        textAlign:'center',
      },
});

export default AddItem;