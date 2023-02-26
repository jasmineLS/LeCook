import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import BasketScreen from './BasketScreen'

const SearchStack =  createStackNavigator();

const SearchStackScreen = ()=>{
    return(
        <SearchStack.Navigator>
            <SearchStack.Screen name="Search" component={SearchScreen}/>
            <SearchStack.Screen name="Basket" component={BasketScreen}/>
        </SearchStack.Navigator>
    )
}

export default SearchStackScreen;