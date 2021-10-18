import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ProductItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.ProductItem}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.details}>$ {item.price}</Text>
          {/* <Text style={styles.details}>{item.weight}</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  ProductItem: {
    padding: 20,
    margin: 10,
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.10,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    // fontFamily: 'OpenSansBold',
  },
  details: {
    fontSize: 18,
  },
});

export default ProductItem;