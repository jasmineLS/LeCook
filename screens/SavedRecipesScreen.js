import { View, Text, FlatList, Pressable, Image, ScrollView } from "react-native";
import { useContext } from "react";
import AppContext from "../AppContext";
import { Linking } from "react-native";
import { useState } from "react";
//import console = require("console");
const SavedRecipesScreen = () => {
  const myContext = useContext(AppContext);
  const [savedItems, setSavedItems] = useState(myContext.savedItems);

  const Saved = (item)=>{
      return(
          <Text>{item}</Text>
      )
  }
  return(
  <ScrollView>
  <View style={{flex:1, backgroundColor:"white", }}>
    {console.log(savedItems)}
    {myContext.savedItems.length > 0 ? savedItems.map((item)=>{
      item = JSON.parse(item);
        return(
            <View style={{padding: 5,
              borderWidth: 3,
              borderRadius: 10,
              flexDirection: 'row',
              fontSize: 40,
              height: 120,
              backgroundColor:'black',
              margin: 10,
              alignContent: 'center',}}>
              <Image source={{uri:item.image}}style={{"width":100,"height":100, borderRadius:10}}/>
             <Text style={{color:'white', fontSize:20, marginLeft:10, width:200,}} onPress={()=>{Linking.openURL(item.url)}}>{item.label}</Text>
             <Pressable><Text style={{color:"white", fontSize:30, marginLeft:30}}>⤫</Text></Pressable>
            </View>
            );
    }) : <Text>None Saved</Text>}
  </View>
  </ScrollView>
  );
};

export default SavedRecipesScreen;
