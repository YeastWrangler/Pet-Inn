import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Pressable,
	ActivityIndicator,
	Image
} from "react-native";
import { colors } from "../assets/colors";
import { getSitterListings } from "../dbCalls/sitterListing";
import moment from "moment";

const ServicesList = ({ navigation }) => {
	const [sitterListings, setSitterListings] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getSitterListings()
			.then(({ sitterListings }) => {
				setSitterListings(sitterListings);
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
		<View>
			<View style={styles.headerContainer}>
				<Text style={styles.pageHeader}>Services list</Text>
			</View>

			<FlatList
				contentContainerStyle={{ paddingBottom: 50 }}
				keyExtractor={(item) => item._id}
				data={sitterListings}
				//need to destructure item as FlatList has created an object with multiple keys
				renderItem={({ item }) => {
					return (
						<View style={styles.singleListing}>
							<Pressable
								onPress={() => {
									navigation.navigate("SitterListing", { id: item._id });
								}}
								style={styles.centerContent}
							>
								 
                
								<Text style={[styles.location, styles.content]}>
									{item.location}
								</Text>

								<Text style={styles.content}>{item.title}</Text>

								<View style={styles.infoContainer}>
									<Text style={styles.heading}>Pet(s) covered: </Text>
									<Text style={styles.content}>
										{item.suitable_pets.map((pet, index) => {
											if (index === item.suitable_pets.length - 1) {
												return pet;
											} else {
												return `${pet}, `;
											}
										})}
									</Text>
								</View>

								<Text style={styles.content}>
									{moment(item.date_from).format("MMM Do, YYYY")} to {moment(item.date_to).format("MMM Do, YYYY")}
								</Text>

								<Text style={[styles.payment, styles.content]}>
									{item.payment === 0 ? "Free" : `??${item.payment}`}
								</Text>
							</Pressable>
						</View>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: colors.buttonColor,
	},
	pageHeader: {
		margin: 15,
		fontSize: 18,
		fontWeight: "900",
		color: "white",
		textAlign: "center",
	},
	
	singleListing: {
		backgroundColor: "pink",
		marginTop: 20,
		padding: 16,
		fontSize: 16,
		alignItems: "center",
		borderRadius: 15,
   		width: "90%",
    	alignSelf: "center",
		// paddingBottom: 50,
	},
	centerContent: {
		alignItems: "center",
	},
	location: {
		fontWeight: "700",
	},
	infoContainer: {
		flexDirection: "row",
		margin: 10,
		alignItems: "center",
	},
	heading: {
		fontWeight: "700",
		fontSize: 17,
	},
	content: {
		fontSize: 20,
	},
	loadingIndicator: {
		flex: 1,
	},
});

export default ServicesList;
