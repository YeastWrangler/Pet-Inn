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

import Slideshow from "react-native-image-slider-show";
import { getOneOwnerListing } from "../dbCalls/ownerListing";
import moment from "moment";

const IndividualOwnerListing = ({ navigation, route }) => {
	const { id } = route.params;
	const [ownerListing, setOwnerListing] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getOneOwnerListing(id)
			.then(({ ownerListing }) => {
				setOwnerListing(ownerListing);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				//need to error handle
			});
	}, []);

	if (isLoading)
		return <ActivityIndicator style={styles.loadingIndicator} size="large" />;

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.listingTitle}>{ownerListing.title}</Text>
				<Text style={styles.content}>{ownerListing.location}</Text>
				<View style={styles.datesContainer}>
					<View style={styles.infoContainer}>
						<Text style={styles.heading}>Date From: </Text>
						<Text style={styles.content}>
							{moment(ownerListing.date_from).format("MMM Do, YYYY")}
						</Text>
					</View>
					<View style={styles.infoContainer}>
						<Text style={styles.heading}>Date To: </Text>
						<Text style={styles.content}>
							{moment(ownerListing.date_to).format("MMM Do, YYYY")}
						</Text>
					</View>
				</View>

				{/* <Text>{ownerListing.rating}</Text> */}

				<View style={styles.infoContainer}>
					<Text style={styles.heading}>Pet(s): </Text>
					<Text style={styles.content}>
						{ownerListing.pets.map((pet, index) => {
							if (index === ownerListing.pets.length - 1) {
								return pet;
							} else {
								return `${pet}, `;
							}
						})}
					</Text>
				</View>

				<Slideshow
					height={200}
					dataSource={ownerListing.image_urls.map((photo) => {
						return { url: photo };
					})}
				/>
				<Text style={styles.payment}>
					{ownerListing.payment === 0 ? "Free" : `£${ownerListing.payment}`}
				</Text>
				<View style={styles.infoContainer}>
					<Text style={styles.heading}>Additional Info: </Text>
					<Text style={styles.content}>{ownerListing.additional_info}</Text>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.heading}>Date Added: </Text>
					<Text style={styles.content}>
						{moment(ownerListing.date_added).format("MMM Do, YYYY")}
					</Text>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.heading}>Posted By: </Text>
					<Text style={styles.content}>{ownerListing.username}</Text>
				</View>

				<Pressable
					style={styles.contactButton}
					onPress={() => {
						console.log("open chat clicked");
						//needs to open chat window/page when clicked
					}}
				>
					<Text style={styles.contactButtonText}>Contact Owner</Text>
				</Pressable>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: "pink",
	},
	listingTitle: {
		fontSize: 20,
		fontWeight: "700",
		margin: 10,
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
	},
	content: {
		fontSize: 16,
	},
	payment: {
		fontSize: 20,
		fontWeight: "700",
		margin: 10,
	},
	contactButton: {
		margin: 10,
		padding: 6,
		backgroundColor: "blue",
		borderRadius: 6,
		color: "white",
	},
	contactButtonText: {
		color: "white",
		fontSize: 20,
		fontWeight: "700",
	},
});

export default IndividualOwnerListing;
