import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	FlatList,
	Text,
	View,
	Image,
	ScrollView,
	Pressable,
	ActivityIndicator,
} from "react-native";
import { colors } from "../assets/colors";
import { getOneSitterListing } from "../dbCalls/sitterListing";

const IndividualSitterListing = ({ navigation, route }) => {
	const { id } = route.params;
	const [sitterListing, setSitterListing] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getOneSitterListing(id)
			.then(({ sitterListings }) => {
				setSitterListing(sitterListings);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				//need to error handle
			});
	}, []);
	console.log(sitterListing.suitable_pets);
	if (isLoading)
		return <ActivityIndicator style={styles.loadingIndicator} size="large" />;
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.listingTitle}>{sitterListing.title}</Text>
				<Text style={styles.content}>{sitterListing.location}</Text>
				<View style={styles.datesContainer}>
					<View style={styles.infoContainer}>
						<Text style={styles.heading}>Date From: </Text>
						<Text style={styles.content}>{sitterListing.date_from}</Text>
					</View>
					<View style={styles.infoContainer}>
						<Text style={styles.heading}>Date To: </Text>
						<Text style={styles.content}>{sitterListing.date_to}</Text>
					</View>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.heading}>Pet(s) covered: </Text>
					<Text style={styles.content}>
						{sitterListing.suitable_pets.map((pet, index) => {
							if (index === sitterListing.suitable_pets.length - 1) {
								return pet;
							} else {
								return `${pet}, `;
							}
						})}
					</Text>
				</View>

				<Text style={styles.payment}>
					{sitterListing.payment === 0 ? "Free" : `£${sitterListing.payment}`}
				</Text>

				<View style={styles.infoContainer}>
					<Text style={styles.heading}>Date Posted: </Text>
					<Text style={styles.content}>{sitterListing.data_posted}</Text>
				</View>
				<View style={styles.infoContainer}>
						<Text style={styles.heading}>Posted By: </Text>
						<Text style={styles.content}>{filteredData.username}</Text>
					</View>
					<View style={styles.infoContainer}>
					<Text style={styles.heading}>Rating: </Text>
					<Text style={styles.content}>⭐️ ⭐️</Text>
					{/* need to insert rating */}
				</View>
				<Pressable
					style={styles.contactButton}
					onPress={() => {
						navigation.navigate("Reviews", { user: sitterListing.username });
					}}
				>
					<View style={styles.infoContainer}>
						<Text style={styles.heading}>Posted By: </Text>
						<Text style={styles.content}>{sitterListing.username}</Text>
					</View>
				</Pressable>
				<View style={styles.infoContainer}>
					<Text style={styles.heading}>Rating: </Text>
					<Text style={styles.content}>Insert Rating</Text>
				</View>

				<Pressable
					style={styles.contactButton}
					onPress={() => {
						console.log("open chat clicked");
						//needs to open chat window/page when clicked
					}}
				>
					<Text style={styles.contactButtonText}>Contact Service Provider</Text>
				</Pressable>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: "pink",
		height:1000
	},
	listingTitle: {
		fontSize: 20,
		fontWeight: "700",
		margin: 20,
		width:"80%",
		textAlign: "center"
	},
	datesContainer: {
		flexDirection: "row",
	},
	featuredImage: {
		width: 150,
		height: undefined,
		aspectRatio: 1,
	},
	secondaryImage: {
		width: 100,
		height: undefined,
		aspectRatio: 1,
	},
	infoContainer: {
		flexDirection: "row",
		margin: 10,
		alignItems: "center",
	},
	heading: {
		fontWeight: "700",
		fontSize: 20
	},
	content: {
		fontSize: 18,
	},

	content2: {
		fontSize: 18,
		fontWeight: "700",
		color: "yellow",
		textDecorationLine: "underline"
	},
	payment: {
		fontSize: 20,
		fontWeight: "700",
		margin: 10,
	},
	contactButton: {
		margin: 10,
		padding: 6,
		backgroundColor: colors.buttonColor,
		borderRadius: 6,
		color: "white",
	},
	contactButtonText: {
		color: "white",
		fontSize: 20,
		fontWeight: "700",
	},
});

export default IndividualSitterListing;
