import { StyleSheet, Text, TextInput, View, FlatList,Image, Linking, Pressable,ScrollView,SafeAreaView} from "react-native";
import { useState, useEffect } from "react";
import {useContext} from "react";
import AppContext from '../AppContext';


const RecipesScreen = ({route, navigation}, props) => {
  const myContext = useContext(AppContext);
  const {basket} = route.params;
  const [textInput, SetText] = useState("");
  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [savedRecipes, setSavedRecipes] = useState("");
  const [saved, setSaved] = useState(false);
  async function findRecipe() {
    console.log(basket)
    str="";
    basket.map((item)=>{str+="%20"+item});
    console.log(str)
    const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${str}&app_id=ed925693&app_key=93f5a31f0f66825a0a45b9f258ff29f8`;
    let resp = await fetch(URL);
    d = await resp.json();
    //console.log(d)
    setData(d.hits);
  }

  useEffect(() => {
    findRecipe()
  }, [])

  const handleSaveItem = (item)=>{
    myContext.saveItem(json.stringify(item));
  }

  const Recipe = ({recipe}) =>(
 
      <View style ={styles.box}>
        <Image source={{uri:recipe.image}}style={{"width":100,"height":100, borderRadius:10}}/>
        <Text style={{color:'white', fontSize:20, marginLeft:10, width:200,}} onPress={() => {Linking.openURL(recipe.url)}}>{recipe.label}</Text> 
        <Text style={{color:"white", fontSize:30, marginLeft:10}} onPress={()=>{myContext.updateSaved(JSON.stringify(recipe)); alert("Saved")}}>+</Text>
        <Pressable onPress={() => navigation.navigate("Info", { recipe: recipe })}><Text style={{color:"white", marginBottom: 0}}>More Info</Text></Pressable>
      </View>

  );

  return (
    <View style ={styles.body}>
      <View style={styles.lists}>
      {data.length>0?<FlatList data={data} style={{flex:3, length:1000, alignSelf:'stretch', marginBottom: 0,} }
          renderItem={({item})=><Recipe recipe={item.recipe} style={{flex:2}}/>}
      />:<Text style ={styles.denied}>No found Recipes</Text>} 
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
    backgroundColor:'white',
    flex:1,
   
  } ,
  lists:{
    color:'#fff',
    padding: 10,
    height: 600,
    margin: 0,
    flex:1,
   
  } ,
  box:{
    padding: 5,
    borderWidth: 3,
    borderRadius: 10,
    flexDirection: 'row',
    fontSize: 40,
    height: 120,
    backgroundColor:'black',
    margin: 10,
    alignContent: 'center',
    flexWrap: "wrap",
  },
});

export default RecipesScreen;
