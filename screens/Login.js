import { StyleSheet, Text, View, TextInput,Button, Pressable } from 'react-native';
import React from 'react';
import { Image } from 'react-native';

const Login = ({navigation}) =>{
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    return(
        <View style={styles.container}>
            <Image source={require('../assets/Logo_LeCook.png')} style={{width: 250, height: 250}}/>
            <Text style={styles.Text}></Text>
            <TextInput style={styles.TextInput} placeholder=" Username" value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
            <TextInput style={styles.TextInput} placeholder=" Password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
            <Pressable style={styles.Button} color='000000' onPress={()=>{
                navigation.navigate("BasketStackScreen")
            }}><Text style={{color:"white"}}>Submit</Text></Pressable>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
    },
    TextInput:{
        height:60,
        borderColor:'black',
        borderWidth:2,
        width:300,
        margin:10,
        color:'#000',
        borderRadius:10,
        padding:10,
    },
    Text:{
        fontSize:33,
        fontWeight:'bold',
        marginBottom:40,
    },
    Button:{
        paddingVertical:12,
        paddingHorizontal:32,
        borderRadius:8,
        elevation:3,
        width:300,
        justifyContent:'center',
        alignItems:'center',
        margin:30,
        backgroundColor:'black',
        color:'white',
        borderWidth:1,
    },
});
export default Login;