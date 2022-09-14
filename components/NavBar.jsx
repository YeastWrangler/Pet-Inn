import React, { useContext, useEffect, useState } from "react";
import Login from "./Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import PetsList from "./PetsList";
import ServicesList from "./ServicesList";
import { StyleSheet, View, Image } from "react-native";

import Screens from "./Screens";
import UserProfile from "./UserProfile";
import userContext from "../context/context";
import WatchList from "./Watchlist";
import LoggedinHome from "./LoggedinHome";

const NavBar = () => {
	const Tab = createBottomTabNavigator();
	const { currUser, setCurrUser } = useContext(userContext);

	const [showTab, setShowTab] = useState(false);

	useEffect(() => {
		if (currUser.avatar_url !== undefined) {
			setShowTab(true);
		} else {
			setShowTab(false);
		}
	}, [currUser]);

	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarIcon: () => {
					let iconName;
					let rn = route.name;

					if (rn === "Home Page") {
						iconName = "home";
					} else if (rn === "Watchlist") {
						iconName = "heart";
					}
					// else if (rn === "Profile") {
					//     iconName = "person-add"
					// }

					return <Ionicons name={iconName} size={25} color="gray" />;
				},
			})}
		>
			{showTab ? (
				<Tab.Group screenOptions={{ headerShown: false }}>
					<Tab.Screen name="Main Screen" component={Screens} />
					<Tab.Screen name="Home Page" component={LoggedinHome} />
					<Tab.Screen name="Watchlist" component={WatchList} />
					<Tab.Screen
						name="Profile"
						component={UserProfile}
						options={{
							// tabBarShowLabel: false,
							tabBarIcon: () => (
								<View style={styles.avatarContainer}>
									<Image
										style={styles.avatar}
										source={{ uri: currUser.avatar_url }}
									/>
								</View>
							),
						}}
					/>
				</Tab.Group>
			) : (
				<Tab.Group screenOptions={{ headerShown: false }}>
					<Tab.Screen name="Main Screen" component={Screens} />
				</Tab.Group>
			)}
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	avatar: {
		width: "100%",
		height: "100%",
	},
	avatarContainer: {
		borderRadius: 50,
		// borderWidth: 1,
		width: 30,
		height: 30,
		overflow: "hidden",
		// marginLeft: 15,
		// marginTop: 5,
		// marginBottom: 5,
	},
});

export default NavBar;
