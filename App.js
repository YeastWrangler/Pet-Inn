import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavBar from "./components/NavBar";


export default function App () {
  

const Stack = createNativeStackNavigator();

  
  return (
    <NavigationContainer>
        <NavBar/>
  </NavigationContainer>
  )

}