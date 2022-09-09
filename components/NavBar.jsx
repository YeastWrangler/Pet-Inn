import React from 'react'
import Login from './Login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from "react-native-vector-icons/Ionicons"
import PetsList from './PetsList';
import ServicesList from './ServicesList';

import Screens from './Screens';

const NavBar = () => {

    const Tab = createBottomTabNavigator()
  return (
    
    <Tab.Navigator
    initialRouteName='Home'

    screenOptions={({route}) => ({
        tabBarIcon: () => {
            let iconName;
            let rn=route.name

            if (rn === "Home") {
                iconName = 'home' 
            } else if (rn === "Inbox") {
                iconName = "mail" 
            }
            else if (rn === "Wishlist") {
                iconName = "heart" 
            }
            else if (rn === "Profile") {
                iconName = "person-add" 
            }

            return <Ionicons name={iconName} size={25} color="gray"/>
        }, 
        
    })}>
        <Tab.Group screenOptions={{ headerShown: false }} >
            <Tab.Screen name="Home" component={Screens}/>
            <Tab.Screen name="Inbox" component={ServicesList} options={{tabBarBadge: 2}}/>
            <Tab.Screen name="Wishlist" component={PetsList}/>
            <Tab.Screen name="Profile" component={Login}/>
            </Tab.Group>
            </Tab.Navigator>
            
  )
}

export default NavBar