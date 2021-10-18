import React, { useEffect, useLayoutEffect} from 'react'
import { StyleSheet,Text, TouchableOpacity, View,FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import HeaderButton from '../components/HeaderButton';
// import PlaceItem from '../components/PlaceItem';

import COLORS from '../../constants/colors';

import { loadOrders } from '../../store/actions/orders.actions';

const OrderListScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);

    useEffect(() => {
        dispatch(loadOrders());
    }, []);

    const handleSelectedOrder = (item) => {
      navigation.navigate('OrderDetailScreen', {
        OrderId:item.item.id
      });
    }
  
    const renderItem = (data) => (
        <TouchableOpacity
        item={data}
        onPress={() => handleSelectedOrder(data)}
      >
        <View >
          <Text style={styles.title}>{data.item.name} {data.item.id}</Text>
          <Text style={styles.address}>Total:  {parseInt(data.item.total)}</Text>
        </View>
      </TouchableOpacity>

    )

    return (
        <FlatList style={styles.container}
            data={orders}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    )
}



const styles = StyleSheet.create({
  container: {
    paddingTop:15,
    paddingHorizontal:20,
    flexDirection: "column",
    display: 'flex',
    flex:1,
    backgroundColor: COLORS.BEAUBLUE,
    marginBottom:"35%"
  },
    placeItem: {
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      paddingVertical: 16,
      paddingHorizontal: 30,
      flexDirection: 'row',
      alignItems: 'center',
    },
    info: {
      marginLeft: 25,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: COLORS.BEAUBLUE,
    },
    title: {
      fontSize: 18,
      marginBottom: 6,
    },
    address: {
      color: '#777',
      fontSize: 16,
    }
  });

export default OrderListScreen