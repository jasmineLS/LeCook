import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipesSCreen from './screens/RecipesScreen';
import BasketStackScreen from './screens/BasketStackScreen';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BasketStackScreen" component={BasketStackScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

