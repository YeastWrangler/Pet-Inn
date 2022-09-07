import React from 'react'
import { colors } from '../assets/colors';
import { StyleSheet, Text, View, Button} from 'react-native';

 const LoggedinHome = () => {
  return (
    <View style={styles.backGround}>
        <Text style={styles.text}>
        you Are Now Logged in
        </Text>
        <Text>
            Lots of different posts:
        </Text>
        <View style={styles.container}>
        <Button title="postings"/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    backGround: {
        flex: 1,
       
        backgroundColor: colors.mainColor
    },
    text: {
        color: "white",
        fontSize: "20px",
        alignContent: "center",
        margin: 20
    },
    container: {
        width:"100%",
        height:50,
        marginTop: 10,
        backgroundColor: "lightblue",
        justifyContent: "flex-end"
    }

})

export default LoggedinHome