import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BasketStackScreen from './BasketStackScreen'
import RecipesScreen from './RecipesScreen';
import SavedRecipesScreen from './SavedRecipesScreen';

const RootTab =  createBottomTabNavigator();

const RootTabScreen = ()=>{
    let STORAGE_KEY = '@key';
    return(
        <RootTab.Navigator screenOptions={{headerShown: false}}>
            <RootTab.Screen name="BasketStackScreen" component={BasketStackScreen} />
            <RootTab.Screen name="SavedRecipesScreen" component={SavedRecipesScreen} />
        </RootTab.Navigator>
    )
}

export default RootTabScreen;