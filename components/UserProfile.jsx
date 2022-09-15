import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import userContext from "../context/context";
import { getReviews } from "../dbCalls/review";
import { logoutUser } from "../dbCalls/User";

const UserProfile = ({ navigation }) => {
	const { currUser, setCurrUser } = useContext(userContext);
	const [reviews, setReviews] = useState([]);
	const [rating, setRating] = useState(0);

	useEffect(() => {
		getReviews(currUser.username)
			.then((data) => {
				setReviews(data.reviews);
			})
			.then(() => {
				let total_ratings = 0;
				for (let i = 0; i < reviews.length; i++) {
					total_ratings += reviews[i].rating;
				}
				if (total_ratings == 0) {
					setRating(0);
				} else {
					setRating(total_ratings / reviews.length);
				}
			});
	}, [currUser]);

	const logoutHandler = () => {
		logoutUser().then(() => {
			console.log("get lost");
			setCurrUser({})
			navigation.navigate("Login")
			Alert.alert("You've Been Logged Out!");
		})
	}

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<View style={styles.avatarContainer}>
					<Image
						style={styles.avatar}
						source={{
							uri: currUser.avatar_url,
						}}
					/>
				</View>
				<Text style={styles.listingTitle}>
					Welcome '{currUser.username}' to Your Profile
				</Text>
			</View>
			<Text style={styles.content}></Text>
			<View style={styles.infoContainer}>
				<Text style={styles.heading}>Bio: </Text>
				<Text style={styles.content}>{currUser.bio}</Text>
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.heading}>Location: </Text>
				<Text style={styles.content}>{currUser.location} 🌎 </Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.heading}>My Rating: </Text>
				<Text style={styles.content}>{rating}/5</Text>
			</View>
			<TouchableOpacity
				style={styles.infoContainer}
				onPress={() => {
					navigation.navigate("Reviews", { user: currUser.username });
				}}
			>
				<Text style={styles.heading}>My Reviews: </Text>
				<Text style={styles.content}></Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.infoContainer}
				onPress={() => {
					navigation.navigate("WatchList");
				}}
			>
				<Text style={styles.heading}>My Watchlist: </Text>
				<Text style={styles.content}></Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.contactButton}>
				<Text style={styles.contactButtonText}>Edit My Profile</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.contactButton} onPress={logoutHandler}>
				<Text style={styles.contactButtonText}>Logout</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		borderRadius: 15,
		borderColor: "pink",
		borderStyle: "solid",
		backgroundColor: "pink",
		margin: 10,
		padding: 6,
	},
	avatar: {
		width: "100%",
		height: "100%",
	},
	avatarContainer: {
		borderRadius: 50,
		borderWidth: 1,
		width: 75,
		height: 75,
		overflow: "hidden",

		marginTop: 5,
		marginBottom: 5,
	},
	listingTitle: {
		fontSize: 20,
		fontWeight: "700",
		margin: 10,
	},
	datesContainer: {
		flexDirection: "row",
	},

	infoContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 10,
		borderColor: "pink",
		borderStyle: "solid",
		backgroundColor: "pink",
		margin: 10,
		padding: 6,
	},
	heading: {
		fontWeight: "600",
		fontSize: 20,
	},
	content: {
		fontSize: 18,
	},
	payment: {
		fontSize: 20,
		fontWeight: "700",
		margin: 10,
	},
	contactButton: {
		margin: 10,
		padding: 6,
		backgroundColor: "pink",
		borderRadius: 6,
		color: "white",
		alignItems: "center",
	},
	contactButtonText: {
		color: "white",
		fontSize: 24,
		fontWeight: "700",
	},
});

export default UserProfile;
