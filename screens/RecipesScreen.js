import { StyleSheet, Text, TextInput, View, FlatList,Image} from "react-native";
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
      <View>
          <Text>{recipe.label}</Text>
      </View>
  );

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={curr_text => {
          SetText(curr_text);
        }}
        onEndEditing={() => handleTextSubmit()}
        defaultValue={textInput}
      ></TextInput>
      <FlatList data={data}
          renderItem={({item})=><Recipe recipe={item.recipe}/>}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});

export default RecipesScreen;
