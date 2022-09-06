import React from 'react'
import { colors } from '../assets/colors';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';

const HomepageTest = ({navigation}) => {

  console.log(navigation)
const pressHandler = () => {
  navigation.navigate("Login")

}

    return(

        <ImageBackground style={styles.backGround} source={{ uri: "https://www.we-love-pets.co.uk/hubfs/A05I8719-1.jpg"}}>
          <Image style={[styles.container, styles.logo]} source={{uri: "https://images-platform.99static.com/OIRRT4xa5hwUOYh3r9nQoxbDf_w=/0x0:2000x2000/500x500/top/smart/99designs-contests-attachments/101/101748/attachment_101748619"}}/>
          <Button title="login here" onPress={pressHandler} />
          </ImageBackground>)
}

const styles = StyleSheet.create({
    backGround: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: colors.secondColor
    },
    container: {
        flex: 1,
        backgroundColor: colors.secondColor,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
    
    logo: {
      width: 120,
      height: 100,
      padding:20,
      margin:75,
      position: "absolute",
    },
})

export default HomepageTest