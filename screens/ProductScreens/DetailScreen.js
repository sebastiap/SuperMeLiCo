import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import {  Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { addItem } from '../../store/actions/cart.actions';

import COLORS from '../../constants/colors';

export default function BreadDetailScreen() {

  let [cantidad, setcant] = useState(0)

  const product = useSelector(state => state.products.selectedID);

  const products = useSelector(state => state.products.list);
  const Prod = products.find(item => item.id === product);

  const dispatch = useDispatch()

  const handlerAddItemCart = () => {setcant(cantidad+1);dispatch(addItem(Prod))}



  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Prod.name}</Text>
      <Text style={styles.text}>{Prod.description}</Text>
      <Text style={styles.text}>$ {Prod.price}</Text>
      {/* <Text>{Prod.weight}</Text> */}
      <Button
        style={styles.Button}
        title="Agregar al carrito"
        icon={<Ionicons name="add" size={24} color="white" />}
        color={COLORS.PACIFIC}
        onPress={handlerAddItemCart}

      />
      {cantidad >0?
      <Text style={styles.minitext}>Se han agregado {cantidad} de este articulo.</Text>
      :
      <Text style={styles.minitext}>Desea llevar este producto?</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SILVERSAND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  minitext: {
    fontSize: 15,
    marginTop: 10,
    color: COLORS.CLARET
  },
  Button: {
    fontSize: 20,
    marginTop: 10,
    paddingTop:10
  },
});