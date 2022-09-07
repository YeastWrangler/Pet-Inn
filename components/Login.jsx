import React, {useState} from 'react'
import { colors } from '../assets/colors';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { TouchableOpacity } from 'react-native-gesture-handler';

 const Login = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const pressHandler = () => {
        navigation.navigate("Loggedin")
    }
    const handleLoginPress = () => {
        console.log("handle login press")
        //need stuff
    }
    const handleSignUp = () => {
        console.log("handle signup press")
        //need stuff
    }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
        <TextInput style={styles.input}placeholder="Email" value={email} onChangeText={text => setEmail(text)}/>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={text => setPassword(text)} />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={handleSignUp}>
                <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
            <Button style={[styles.guestButton, styles.guestButtonOutline]}title="Continue as Guest" onPress={pressHandler}/>
        </View>
    </KeyboardAvoidingView>
    // <View style={styles.backGround}>
    //     <Text style={styles.text}>
    //     You've reached the login page
    //     </Text>
    //     <Button title="Click to Login as Guest" onPress={pressHandler}/>
    //     <TextInput placeholder="username"/>
    //     <TextInput placeholder="password" />
    // </View>
  )

 }
const styles = StyleSheet.create({
    
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    inputContainer: {
        width:"80%"
    },
    input: {
        backgroundColor:"white",
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,

    },
    buttonContainer: {
        width:"60%",
        justifyContent:"center",
        alignItems:"center",
        marginTop:40,
    },
    button:{
        backgroundColor:colors.buttonColor,
        width:"100%",//adjust size so buttons match in width
        padding:15,
        borderRadius:10,
        alignItems:"center"

    },
    buttonOutline:{
        backgroundColor:"white",
        marginTop:5,
        borderWidth:2,
        borderColor:colors.buttonColor
    },
    guestButton: {
        backgroundColor:colors.mainColor,
        width:"100%",//adjust size so buttons match in width
        padding:20,
        borderRadius:10,
        alignItems:"center"
    },
    guestButtonOutline:{
        backgroundColor:"white",
        marginTop:20,
        borderWidth:2,
        borderColor:colors.secondColor
    },
    buttonText: {
        color:"white",
        fontWeight:"700",
        fontSize:16,
    },
    buttonOutlineText: {
        color:colors.buttonColor,
        fontWeight:"700",
        fontSize:16,
    }


})
 

export default Login