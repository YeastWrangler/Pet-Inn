import React from 'react'
import { colors } from '../assets/colors';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';

const Homepage = ({navigation}) => {
  
const pressHandler = () => {
  navigation.navigate("Login")

}
    return(
        <ImageBackground style={styles.backGround} source={{ uri: "https://www.we-love-pets.co.uk/hubfs/A05I8719-1.jpg"}}>
          
          <View style={styles.logoBox}>
          <Image style={ styles.logo} source={{uri: "https://images-platform.99static.com/OIRRT4xa5hwUOYh3r9nQoxbDf_w=/0x0:2000x2000/500x500/top/smart/99designs-contests-attachments/101/101748/attachment_101748619"}}/>
          </View>
          <View style={styles.loginContainer}>
          <Button style={styles.login} title="Login Here →" onPress={pressHandler} />
          </View>
        
          </ImageBackground>)
}

const styles = StyleSheet.create({
    backGround: {
        flex: 1,
        justifyContent: 'flex-end',
        alignContent:"center",
        backgroundColor: colors.secondColor
    },
    container: {
        flex: 1,
        backgroundColor: colors.secondColor,
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    
    logo: {
      width: 120,
      height: 120,
     

    },

    logoBox: {
      height:120,
      width:120,
      overflow:"hidden",
      backgroundColor: "white",
      textAlign:"center",
      border:"solid",
      position: "absolute",
      top:40,
      //in order to center logo box the marginLeft has to be 1/2 of the visible width of the element(including border,padding etc.)
      left: "50%",
      marginLeft: -59,
      borderColor: colors.mainColor,
      borderWidth: 2,
      borderRadius:75
    },

    login: {
      position:"absolute",
      bottom:"50%",

 
    },

    loginContainer: {
      backgroundColor: colors.mainColor,
      width: "100%",
      height: "7%"
    }
})

export default Homepage