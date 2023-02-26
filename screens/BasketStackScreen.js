import { createStackNavigator } from '@react-navigation/stack';
import BasketScreen from './BasketScreen'
import RecipesStackScreen from './RecipeStackScreen';

const BasketStack =  createStackNavigator();

const BasketStackScreen = ()=>{
    return(
        <BasketStack.Navigator screenOptions={{headerShown: false}}>
            <BasketStack.Screen name="Basket" component={BasketScreen}/>
            <BasketStack.Screen name="RecipesStack" component={RecipesStackScreen}/>
        </BasketStack.Navigator>
    )
}

export default BasketStackScreen;