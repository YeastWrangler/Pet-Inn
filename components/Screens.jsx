import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./Homepage";
import Login from "./Login";
import LoggedinHome from "./LoggedinHome";
import PostServices from "./PostServices";
import PostPets from "./PostPets";
import PetsList from "./PetsList";
import IndividualOwnerListing from "./IndividualOwnerListing";
import ServicesList from "./ServicesList";
import IndividualSitterListing from "./IndividualSitterListing";


export default function Screens() {
  // syntax to move to new screen is navigation.navigate("screenname"). navigation needs to be given to component as props
    const Stack = createNativeStackNavigator();
    
  //  to remove header thing, add this to Stack.Navigator: screenOptions={{ title: "" , headerStyle: {backgroundColor:"white"} }} 
      return (
        <Stack.Navigator initialRouteName="Homepage" >
          <Stack.Screen name="Homepage" component={Homepage} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="LoggedinHome" component={LoggedinHome} />
          <Stack.Screen name="PostServices" component={PostServices} />
          <Stack.Screen name="PostPets" component={PostPets} />
          <Stack.Screen name="PetsList" component={PetsList} />
      <Stack.Screen name="OwnerListing" component={IndividualOwnerListing} />
      <Stack.Screen name="ServicesList" component={ServicesList} />
      <Stack.Screen name="SitterListing" component={IndividualSitterListing} />
          {/* add further screens here */}
        </Stack.Navigator>
      )    
    }


