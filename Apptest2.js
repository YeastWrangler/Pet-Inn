import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Route, NativeRouter, Routes } from 'react-router-native';
import { StyleSheet, Text, View, ImageBackground, Image, Link } from 'react-native';
import {colors} from "./assets/colors";
import  HomepageTest  from './components/HomepageTest';
import { Login } from './components/Login';


export default function App() {
  return (
      <NativeRouter>
        <View>
        <Link to="/" underlayColor="#f0f4f7" >
          <Text>Home</Text>
        </Link>
      <Routes>
      <Route exact path="/" component={HomepageTest} />
      </Routes>
      </View>
      </NativeRouter>
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
