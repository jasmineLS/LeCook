import { View, Text, FlatList, Pressable } from "react-native";
import { useContext } from "react";
import AppContext from "../AppContext";
//import console = require("console");
const SavedRecipesScreen = () => {
  const myContext = useContext(AppContext);
  const Saved = (item)=>{
      return(
          <Text>{item}</Text>
      )
  }
  return(
  <View>
    <Text>Hello</Text>
    {console.log(myContext.savedItems)}
    {myContext.savedItems.length > 0 ? myContext.savedItems.map((item)=>{
        return(
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
             <Text>{item}</Text>
             <Pressable ><Text>Delete Item</Text></Pressable>
            </View>
            );
    }): "No"}
  </View>
  );
};

export default SavedRecipesScreen;
