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
    enteredText.length>0?setBasket([...basket, enteredText]):alert("Please enter a valid item");
    setText("");
  };

  const PantryItem = item => {
    return (
      <View style={styles.itemContainer}>
        <Text style={{fontSize:20, color:"black", margin:10 }}>{item.item}</Text>
        <Pressable onPress={() => setBasket(basket.filter(i => i !== item.item))}>
        <View style={styles.deleteContainer}>
        <Text style={styles.delete}>⤫</Text>
        </View>
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
        placeholder="What's in your pantry?"
      ></TextInput>
      <FlatList
        data={basket}
        renderItem={({ item }) => {
          return <PantryItem item={item} />;
        }}
      />
      <Pressable
        onPress={() => navigation.navigate("RecipesStack", { basket: basket })}
      >
        <View styles={styles.find}>
        <Text style={styles.texts}>{basket.length?"Find a recipe!":"Please Add Items"}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 70,
    margin: 12,
    padding: 10,
    color:'black',
    backgroundColor:"white",
    borderRadius: 10,
    height: 50
  },
  body:{
    backgroundColor:'black',
    color:'#fff',
    flex:1,
    
  } ,
  texts: {
    textAlign: "center",
    color:'black',
    fontSize:30,
    borderWidth: 2,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor:'white',
  },
  list:{
    color:'#fff',
    height: 40,
    margin: 2,
    padding: 2,
    borderWidth: 2

  },
  find:{

  },
  delete:{
  color:'black',
  fontSize:40,
  padding: 10,
  borderRadius: 10,
  height: 2,
  flex:1,
  alignSelf: "center",
  alignItems: "center",
  justifyContent: "center"
  },
  itemContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor:'white',
    color:'#fff',
    height: 90,
    margin: 2,
    padding: 2,
    borderWidth: 2,
    borderRadius: 10
  },
  deleteContainer:{
    fontSize:20,
    height: 0.5,
    flex:1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default BasketScreen;
