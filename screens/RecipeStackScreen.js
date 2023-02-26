import { createStackNavigator } from '@react-navigation/stack';
import RecipesScreen from './RecipesScreen';
import InfoScreen from './InfoScreen';

const RecipeStack =  createStackNavigator();

const RecipeStackScreen = ({route,navigation})=>{
    const {basket} = route.params;
    return(
        <RecipeStack.Navigator>
            <RecipeStack.Screen name="Recipes" component={RecipesScreen} initialParams={{basket}}/>
            <RecipeStack.Screen name="Info" component ={InfoScreen}/>
        </RecipeStack.Navigator>
    )
}

export default RecipeStackScreen;