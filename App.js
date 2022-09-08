import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from "react-native";

import NavBar from "./components/NavBar";


export default function App () {
  
  return (
    <NavigationContainer>

        <NavBar/>

   </NavigationContainer>
  )

}