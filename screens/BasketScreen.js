import {
  Text,
  FlatList,
  View,
  StyleSheet,
  TextInput,
  Pressable
} from "react-native";
import { useState } from "react";

const BasketScreen = ({navigation }) => {
  const [enteredText, setText] = useState("");
  const [basket, setBasket] = useState([]);
  const handleTextSubmit = () => {
    setBasket([...basket, enteredText]);
    setText("");
  };

  const PantryItem = item => {
    return (
      <View>
        <Text>{item.item}</Text>
        <Pressable onPress={() => setBasket(basket.filter(i => i !== item.item))}>
        <Text>Remove</Text>
        </Pressable>
      </View>
    );
  };


  return (
    <View style ={styles.body}>
      <TextInput
        style={styles.input}
        onChangeText={curr_text => setText(curr_text)}
        value={enteredText}
        onEndEditing={handleTextSubmit}
      ></TextInput>
      <FlatList
        data={basket}
        renderItem={({ item }) => {
          return <PantryItem item={item} />;
        }}
      />
      <Pressable
        onPress={() => navigation.navigate("Recipes", { basket: basket })}
      >
        <Text style={styles.texts}>Find a recipe!</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color:'#fff',
    
  },
  body:{
    backgroundColor:'#6b8e23',
    color:'#fff',
    flex:1,
  } ,
  texts: {
    textAlign: "center",
    backgroundColor:'#6b8e23',
    color:'#ffa500',
    fontSize:30,
    padding: 10,
    borderWidth: 5,
  },
  list:{
    color:'#fff',
    height: 40,
    margin: 2,
    padding: 2,

  }
});

export default BasketScreen;
