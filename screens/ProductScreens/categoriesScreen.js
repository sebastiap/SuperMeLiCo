import React from 'react';
import { FlatList } from 'react-native';
//Componente para ordenar la lista y agregarle estilos
import GridItem from '../../components/Grid/GridItem';

//Imports de Redux
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/actions/category.action';
import { loadOrders } from '../../store/actions/orders.actions';

export default function CategoriesScreen({ navigation }) {

  //REDUX
  const dispatch = useDispatch();
  const categorias = useSelector(state => state.categories.list);
  dispatch(loadOrders());


  const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id,item.color))
    navigation.navigate('Productos', {
      name: item.name,
    });
  }

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={categorias}
      keyExtractor={item => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
}