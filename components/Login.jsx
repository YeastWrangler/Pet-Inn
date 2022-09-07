import React from 'react'
import { colors } from '../assets/colors';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

 const Login = ({navigation}) => {

    const pressHandler = () => {
        navigation.navigate("Loggedin")
    }

  return (
    <View style={styles.backGround}>
        <Text style={styles.text}>
        You've reached the login page
        </Text>
        <Button title="Click to Login as Guest" onPress={pressHandler}/>
        <TextInput placeholder="username"/>
        <TextInput placeholder="password" />
    </View>
  )

 }
const styles = StyleSheet.create({
    backGround: {
        flex: 1,
       
        backgroundColor: colors.secondColor
    },
    text: {
        color: "black",
        fontSize: "20px",
        alignContent: "center"
    }

})
 

export default Login