import React from "react";
import {
	StyleSheet,
	FlatList,
	Text,
	View,
	Image,
	ScrollView,
	Pressable,
} from "react-native";
import { colors } from "../assets/colors";
import { sitterListingTestData } from "../test data/sitterListingTestData";

const IndividualSitterListing = ({ navigation, route }) => {
	const { id } = route.params;
	// console.log(id);
	const testData = sitterListingTestData;

	const [filteredData] = testData.filter((element) => element._id === id);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.listingTitle}>{filteredData.title}</Text>
				
				<Text style={styles.content}>{filteredData.location}</Text>
				<View style={styles.datesContainer}>
					<View style={styles.infoContainer}>
						<Text style={styles.heading}>Date From: </Text>
						<Text style={styles.content}>{filteredData.dates.from}</Text>
					</View>
					<View style={styles.infoContainer}>
						<Text style={styles.heading}>Date To: </Text>
						<Text style={styles.content}>{filteredData.dates.to}</Text>
					</View>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.heading}>Pet(s) covered: </Text>
					<Text style={styles.content}>
						{filteredData.suitable_pets.map((pet, index) => {
							if (index === filteredData.suitable_pets.length - 1) {
								return pet;
							} else {
								return `${pet}, `;
							}
						})}
					</Text>
				</View>

				<Text style={styles.payment}>
					{filteredData.payment === 0 ? "Free" : `£${filteredData.payment}`}
				</Text>

				<View style={styles.infoContainer}>
					<Text style={styles.heading}>Date Posted: </Text>
					<Text style={styles.content}>{filteredData.data_posted}</Text>
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
						navigation.navigate("Reviews", { user: filteredData.username });
					}}
				><View style={styles.infoContainer}>
				<Text style={styles.contactButtonText}>Click to See Reviews of User: </Text>
				<Text style={styles.content2}>{filteredData.username}</Text>
			</View>
					
				
				</Pressable>

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
