import React,{ useState } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';

const ListItem = ({ data, handleModal }) => {
  const [check, setcheck] = useState("🛒")
  let [quantity,setquantity] = useState(data.item.quantity)

// const Oncheck = () => {
//   if (check == "🛒") {
//   setcheck("✔️")
// }
// else {
//   setcheck("🛒")
// }}

const Onplus = () => {
  setquantity(quantity+1);
  data.item.quantity++;
}

const Onminus = () => {
  if (quantity > 1) {
  setquantity(quantity-1);
  data.item.quantity--;
  }
  else {
    handleModal(data.item.id)
  }
}

  return (
    <View style={styles.item}>
      <Text>{data.item.value} x {quantity}</Text>
      <View style={styles.botones}>
      {/* <Button
          title={check}
          color= "white"
          onPress={Oncheck}
        /> */}
      <Button
          title= "➕"
          color= "white"
          onPress={Onplus}
        />
      <Button
          title= "➖"
          color= "white"
          onPress={Onminus}
      />
        <Button
          title="❌"
          color="white"
          onPress={() => handleModal(data.item.id)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor:"red",
    borderColor: "black",
    borderWidth:1
  },
  check: {
    color: "black"
  }
});

export default ListItem;