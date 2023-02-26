import { View, Text, FlatList, Pressable, Image, ScrollView } from "react-native";
import { useContext } from "react";
import AppContext from "../AppContext";
import { Linking } from "react-native";
import { useState } from "react";
//import console = require("console");
const SavedRecipesScreen = () => {
  const myContext = useContext(AppContext);
  //const [savedItems, setSavedItems] = useState(myContext.savedItems);

  const Saved = (item)=>{
      return(
          <Text>{item}</Text>
      )
  }

  const removeItem = (id) =>{
      filtered = myContext.savedItems.filter(i=>i.id !== id);
      myContext.setSavedItems(filtered);
  }


  return(
  <ScrollView>
  <View style={{flex:1, backgroundColor:"white", }}>

    {myContext.savedItems.length > 0 ? myContext.savedItems.map((item)=>{
      food_item = JSON.parse(item.item);
        return(
            <View style={{padding: 5,
              borderWidth: 3,
              borderRadius: 10,
              flexDirection: 'row',
              fontSize: 40,
              height: 120,
              backgroundColor:'black',
              margin: 10,
              alignContent: 'center',}}
              key={item.id}>
              <Image source={{uri:food_item.image}}style={{"width":100,"height":100, borderRadius:10}}/>
             <Text style={{color:'white', fontSize:20, marginLeft:10, width:200,}} onPress={()=>{Linking.openURL(food_item.url)}}>{food_item.label}</Text>
             <Pressable onPress={()=>removeItem(item.id)}><Text style={{color:"white", fontSize:30, marginLeft:30}}>⤫</Text></Pressable>
            </View>
            );
    }) : <Text>None Saved</Text>}
  </View>
  </ScrollView>
  );
};

export default SavedRecipesScreen;
