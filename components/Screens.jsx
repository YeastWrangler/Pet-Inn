import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./Homepage";
import Login from "./Login";
import LoggedinHome from "./LoggedinHome";
import PetsList from "./PetsList";
import IndividualOwnerListing from "./IndividualOwnerListing";

export default function Screens() {
  // syntax to move to new screen is navigation.navigate("screenname"). navigation needs to be given to component as props
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Homepage"
    >
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoggedinHome" component={LoggedinHome} />
      <Stack.Screen name="PetsList" component={PetsList} />
      <Stack.Screen name="OwnerListing" component={IndividualOwnerListing} />
      {/* add further screens here */}
    </Stack.Navigator>
  );
}
