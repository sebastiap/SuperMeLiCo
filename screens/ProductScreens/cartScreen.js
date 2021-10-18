
import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet, Alert  } from 'react-native';
import { useSelector, useDispatch} from 'react-redux';
import { removeItem, confirmCart } from '../../store/actions/cart.actions';
import { addOrder,addOrderItem } from '../../store/actions/orders.actions';
import CartItem from '../../components/Cart/cartItem';
import COLORS  from '../../constants/colors';

const CartScreen = () => {
  const dispatch = useDispatch();
  //Saco del state los datos del carro
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const status = useSelector(state => state.cart.status);
  let index_final = useSelector(state => state.orders.orders.length) + 1;

  const userId = useSelector(state => state.auth.userId);

  const handlerDeleteItem = (id) => dispatch(removeItem(id));
  const handlerConfirmCart = () => {
    if (items.length > 0) {
    dispatch(confirmCart(items,userId))
    dispatch(addOrder("Compra " ,total))

    items.map(item => dispatch(addOrderItem(index_final,item.name,item.quantity)))
    }
    else {
      Alert.alert("CARRITO VACIO",
    "No es posible realizar una compra con el carrito vacio, seleccione uno o mas productos y reintente",      [
      { text: "OK" }
    ],)
    }
  }; 

  const renderItem = (data) => (
    <CartItem item={data.item} onDelete={handlerDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        {status === 'loading'
         ? (
            <ActivityIndicator
              size="large"
              color={COLORS.BEAUBLUE}
            />
         )
         : (
            <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
              <Text>Confirmar</Text>
              <View style={styles.total}>
                <Text style={styles.text}>Total</Text>
                <Text style={styles.text}>${total}</Text>
              </View>
            </TouchableOpacity>
         )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: COLORS.BEAUBLUE
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: COLORS.BEAUBLUE,
    borderTopWidth: 1,
    marginBottom:100
  },
  confirm: {
    backgroundColor:  COLORS.SILVERSAND,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
});

export default CartScreen;
