import React, {useState} from 'react'
import { colors } from '../assets/colors';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';



const handleLoginPress = () => {
console.log("pressed")
}



const PostServices = () => {
    const [services, setServices] = useState([])


  return (
    <SafeAreaView>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
       
        <View style={styles.inputContainer}>
        <Text style={styles.header}>Post About Your Services</Text>
    <TextInput style={styles.input}placeholder="Title of Post"  />
     <TextInput style={styles.input} placeholder="Info About Your Services" />
     <TextInput style={styles.input} placeholder="Dates Available" />
     <TextInput style={styles.input} placeholder="Location" />
     <TextInput style={styles.input} placeholder="Distince Willing to Travel" />
     <View style={styles.inputContainer}>
     <Picker
          selectedValue={services}
          onValueChange={currentServices => setServices(currentServices)}>
          <Picker.Item label="" value="" />
          <Picker.Item label="Dog Walking" value="Dog Walking" />
          <Picker.Item label="Pet Sitting" value="Pet Sitting" />
          <Picker.Item label="Dog Grooming" value="Dog Grooming" />
          <Picker.Item label="Act Cuddling" value="Cat Cuddling" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
        <Text style={styles.picker}>
          Select Your Service Type: {services}
        </Text>
        </View>

        <View  style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                <Text style={styles.buttonText}>Upload Your CV Here</Text>
            </TouchableOpacity>
            </View>
            </View>
            </KeyboardAvoidingView> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop:150
    },
    header:{
        fontSize: 30,
        color: "pink",
        height: 40,
        width: "95%",
        margin:5,
    },
    picker:{
        fontSize: 20,
        color: "black",
        height: 30,
        width: "100%",
        marginBottom:30
    },
    
    inputContainer: {
      width: "80%",
      margin: 40
    },
    input: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 200,
      },
      button: {
        backgroundColor: colors.buttonColor,
        width: "100%", //adjust size so buttons match in width
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
      },
      buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderWidth: 2,
        borderColor: colors.buttonColor,
      },
      buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 20,
      },
      buttonOutlineText: {
        color: colors.buttonColor,
        fontWeight: "700",
        fontSize: 16,
      },
})

export default PostServices