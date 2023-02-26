import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BasketStackScreen from './BasketStackScreen'
import RecipesScreen from './RecipesScreen';
import SavedRecipesScreen from './SavedRecipesScreen';
import { Ionicons } from '@expo/vector-icons';

const RootTab =  createBottomTabNavigator();

const RootTabScreen = ()=>{
    let STORAGE_KEY = '@key';
    return(
        <RootTab.Navigator screenOptions={{headerShown: false}}>
            <RootTab.Screen name="BasketStackScreen" component={BasketStackScreen} options={{
      tabBarLabel: 'Basket',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="cart-outline" color={color} size={size} />
      )}} />
            <RootTab.Screen name="SavedRecipesScreen" component={SavedRecipesScreen} options={{
      tabBarLabel: 'Saved Recipes',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="bookmark-outline" color={color} size={size} />
      )}} />
        </RootTab.Navigator>
    )
}

export default RootTabScreen;