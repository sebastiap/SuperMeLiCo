import React, { useEffect, useLayoutEffect} from 'react'
import { StyleSheet,Text, TouchableOpacity, View,FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import { fetchitems } from '../../store/actions/orders.actions';

import COLORS from '../../constants/colors';

const OrderDetailScreen = ({ route, navigation }) => {

    const {OrderId} = route.params;

    const dispatch = useDispatch();
    const items = useSelector(state => state.orders.items);
    
    useEffect(() => {
        dispatch(fetchitems(OrderId))
    }, []);

    const renderItem = (data) => (
        <TouchableOpacity
        style={styles.placeItem}
      >
        <View style={styles.info}>
          <Text style={styles.title}>ITEM: {data.item.name}</Text>
          <Text style={styles.address}>Cantidad: {parseInt(data.item.total)}</Text>
        </View>
      </TouchableOpacity>

    )

    return (
        <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    )
}



const styles = StyleSheet.create({
  container: {
    padding:30,
    marginTop:40,
    flexDirection: "column",
    display: 'flex',
    flex:1,
    backgroundColor:COLORS.BEAUBLUE

  },
    placeItem: {
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      paddingVertical: 16,
      paddingHorizontal: 30,
      flexDirection: 'row',
      alignItems: "center",
      backgroundColor:COLORS.BEAUBLUE
    },
    info: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: COLORS.JUNGLE,
      fontSize: 18,
      marginBottom: 6,
    },
    address: {
      color: '#777',
      fontSize: 16,
    }
  });

export default OrderDetailScreen