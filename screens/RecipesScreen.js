import { StyleSheet, Text, TextInput, View, FlatList,Image, Linking} from "react-native";
import { useState } from "react";

const RecipesScreen = () => {
  const [textInput, SetText] = useState("");
  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(true);
  async function handleTextSubmit() {
    const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${textInput}&app_id=ed925693&app_key=93f5a31f0f66825a0a45b9f258ff29f8`;
    let resp = await fetch(URL);
    d = await resp.json();
    console.log(d)
    setData(d.hits);
  }

  const Recipe = ({recipe}) =>(
      <View style ={styles.box}>
          <Image source={{uri:recipe.image}}style={{"width":200,"height":100}}/>
          <Text onPress={() => {Linking.openURL(recipe.url)}}>{recipe.label}</Text>
      </View>
  );

  return (
    <View style ={styles.body}>
      <TextInput
        style={styles.input}
        onChangeText={curr_text => {
          SetText(curr_text);
        }}
        onEndEditing={() => handleTextSubmit()}
        defaultValue={textInput}
      ></TextInput>
      <View style={styles.lists}>
      <FlatList data={data}
          renderItem={({item})=><Recipe recipe={item.recipe}/>}
      /> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    color:'#fff',
    borderWidth: 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  } ,
  body:{
    backgroundColor:'#6b8e23',
    flex:1,
  } ,
  lists:{
    color:'#fff',
    padding: 10,
    height: 600,
    margin: 10,
   
  } ,
  box:{
    padding: 5,
    borderWidth: 3,
    alignItems: "center",
    fontSize: 40
    
  }
  
  

});

export default RecipesScreen;
