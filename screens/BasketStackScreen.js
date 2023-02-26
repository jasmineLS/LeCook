import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BasketScreen from './BasketScreen'
import RecipesScreen from './RecipesScreen';

const BasketStack =  createStackNavigator();

const BasketStackScreen = ()=>{
    return(
        <BasketStack.Navigator>
            <BasketStack.Screen name="Basket" component={BasketScreen}/>
            <BasketStack.Screen name="Recipes" component={RecipesScreen}/>
        </BasketStack.Navigator>
    )
}

export default BasketStackScreen;