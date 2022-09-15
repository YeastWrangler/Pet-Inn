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
          <Image style={ styles.logo} source={require ("../assets/MicrosoftTeams-image.png")}/>
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
      width: 100,
      height: 100,
      alignSelf: "center",
     alignContent: "center",
     marginTop: 15,
     marginRight: 10
    
    
    },

    logoBox: {
      height:140,
      width:140,
      overflow:"hidden",
      backgroundColor: "white",
      textAlign:"center",
      border:"solid",
      position: "absolute",
      top:40,
      //in order to center logo box the marginLeft has to be 1/2 of the visible width of the element(including border,padding etc.)
      left: "50%",
      marginLeft: -59,
      borderColor:"pink",
      borderWidth: 5,
      borderRadius:75
    },

    login: {
      position:"absolute",
      bottom:"50%",
    },

    loginContainer: {
      backgroundColor: colors.mainColor,
      width: "100%",
      height: "10%",
      padding: 15
    }
})

export default Homepage