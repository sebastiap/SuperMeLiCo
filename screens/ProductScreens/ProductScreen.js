import React, { useEffect }  from 'react';
import { Text,FlatList, View,StyleSheet } from 'react-native';
import ProductItem from '../../components/Grid/ProductGrid';

import { useSelector, useDispatch } from 'react-redux';
import { selectProduct,filterProduct } from '../../store/actions/products.action';


export default function DetailScreen({ navigation, route }) {

//REDUX
const dispatch = useDispatch();
const categoryID = useSelector(state => state.categories.selectedID)
const categoryColor = useSelector(state => state.categories.color)
const categoryProducts = useSelector(state => state.products.filtered)

useEffect(() => {
  dispatch(filterProduct(categoryID));
}, [categoryID]);


  const handleSelectedProduct = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('DETALLE', {
      name: item.name,
    });
  }

  const renderGridItem = ({ item }) => (
    <ProductItem item={item} onSelected={handleSelectedProduct} />
  );

  return (
    <View style={styles.ProductView }>
      <FlatList
        data={categoryProducts}
        keyExtractor={item => item.id}
        renderItem={renderGridItem}
        numColumns={1}
        style={{backgroundColor:categoryColor}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ProductView: {
    marginBottom: "35%",
    borderRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
  }
})