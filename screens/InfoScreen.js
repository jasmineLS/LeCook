import { View, Text, StyleSheet } from "react-native";

const InfoScreen = ({ route, navigation }) => {
  const { recipe } = route.params;
  return (
    <View style={styles.box}>
      <Text style={{ color: "white" ,fontSize:20}}>{recipe.label}{"\n"}</Text>
      <Text style={{ color: "white", margin: 3}}>
        Kcal: {Math.round(recipe.calories)} {"\n"}
      </Text>
      <Text style={{color: "white"}}>Ingredients:{"\n"}</Text>
      <View style={{padding: 5}}>
        {recipe.ingredientLines.map(ingredient => {
          return (
            <Text style={{ color: "white" }} key={ingredient}>
              {ingredient}
            </Text>
          );
        })}
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
    color: "#fff",
    borderWidth: 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  body: {
    backgroundColor: "white",
    flex: 1
  },
  lists: {
    color: "#fff",
    padding: 10,
    height: 600,
    margin: 0,
    flex: 1
  },
  box: {
    padding: 5,
    borderWidth: 3,
    borderRadius: 10,   
    height: 500,
    flexGrow: 1,
    backgroundColor: "black",
    alignContent: "center",
    color: "white"
  }
});

export default InfoScreen;
