import { View, Text, FlatList, Pressable, Image } from "react-native";
import { useContext } from "react";
import AppContext from "../AppContext";
import { Linking } from "react-native";
//import console = require("console");
const SavedRecipesScreen = () => {
  const myContext = useContext(AppContext);
  const Saved = (item)=>{
      return(
          <Text>{item}</Text>
      )
  }
  return(
  <View style={{flex:1, backgroundColor:"white", }}>
    {console.log(myContext.savedItems)}
    {myContext.savedItems.length > 0 ? myContext.savedItems.map((item)=>{
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
             <Pressable><Text style={{color:"white", fontSize:30, marginLeft:30}} onPress={()=>{}}>⤫</Text></Pressable>
            </View>
            );
    }): <Text>None Saved</Text>}
  </View>
  );
};

export default SavedRecipesScreen;
