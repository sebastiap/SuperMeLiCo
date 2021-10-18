import React from 'react';
import { StyleSheet,FlatList} from 'react-native';

import ListItem from './ListItem';

const List = ({ itemList, handleModal }) => {
    return (
      <FlatList
        data={itemList}
        renderItem={(data) => <ListItem handleModal={handleModal} data={data} />}
        keyExtractor={item => item.id}
        style={styles.List}
      />
    );
  }

const styles = StyleSheet.create({ 
  List: {
    // justifyContent:'space-between',
    // alignItems:'center',
    // flexDirection:'row',
    marginBottom: "70%"
  },
});

export default List;