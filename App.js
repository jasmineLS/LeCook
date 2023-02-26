
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BasketStackScreen from "./screens/BasketStackScreen";
import Login from "./screens/Login";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerLeft: ()=>null, gestureEnabled: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BasketStackScreen" component={BasketStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
