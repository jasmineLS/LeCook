import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BasketStackScreen from "./screens/BasketStackScreen";
import Login from "./screens/Login";
import RootTabScreen from "./screens/RootTabScreen";
import AppContext from "./AppContext";
import { useState } from "react";
export default function App() {
  const Stack = createStackNavigator();
  const [savedItems, setSavedItems] = useState([]);

  const updateSaved = item => {
    setSavedItems([...savedItems, item]);
    console.log(item)
  };

  const context = {
    savedItems: savedItems,
    setSavedItems,
    updateSaved
  };
  return (
    <AppContext.Provider value={context}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerLeft: () => null, gestureEnabled: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Root" component={RootTabScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
