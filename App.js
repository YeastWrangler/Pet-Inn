import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import {colors} from "./assets/colors"
import Homepage from './components/Homepage';

export default function App() {
  return (
 
   
          <ImageBackground style={styles.backGround} source={{ uri: "https://www.we-love-pets.co.uk/hubfs/A05I8719-1.jpg"}}>
          <Image style={[styles.container, styles.logo]} source={{uri: "https://images-platform.99static.com/OIRRT4xa5hwUOYh3r9nQoxbDf_w=/0x0:2000x2000/500x500/top/smart/99designs-contests-attachments/101/101748/attachment_101748619"}}/>
          </ImageBackground>
        
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backGround: {
    flex: 1,
   
},

logo: {
  width: 120,
  height: 100,
  padding:20,
  margin:75,
  position: "absolute",
},
});
