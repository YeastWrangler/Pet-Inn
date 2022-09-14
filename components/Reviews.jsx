import React, { useContext, useEffect, useState } from "react";
import {
	StyleSheet,
	FlatList,
	Text,
	View,
	Image,
	Pressable,
	ActivityIndicator,
} from "react-native";
import { colors } from "../assets/colors";
import moment from "moment";
import userContext from "../context/context";
import { getReviews } from "../dbCalls/review";

const Reviews = ({ route }) => {
	const [reviews, setReviews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { currUser, setCurrUser } = useContext(userContext);
	const { user } = route.params;

	useEffect(() => {
		getReviews(user).then((data) => {
			setReviews(data.reviews);
			setIsLoading(false);
		});
	}, [currUser]);

	if (isLoading)
		return <ActivityIndicator style={styles.loadingIndicator} size="large" />;

	return (
		<View>
			<View style={styles.headerContainer}>
				<Text style={styles.pageHeader}>Reviews for {user}</Text>
			</View>

			<FlatList
				contentContainerStyle={{ paddingBottom: 50 }}
				keyExtractor={(item) => item._id}
				data={reviews}
				//need to destructure item as FlatList has created an object with multiple keys
				renderItem={({ item }) => {
					return (
						<View style={styles.singleListing}>
							<Pressable onPress={() => {}} style={styles.centerContent}>
								<Text>Reviewer: {item.posted_by}</Text>
								<Text style={styles.body}>Review: {item.body}</Text>
								<Text>
									Created at: {moment(item.created_at).format("MMM Do, YYYY")}
								</Text>
								<Text style={styles.body}>Rating: {item.rating}</Text>
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
		margin: 10,
		fontSize: 16,
		fontWeight: "900",
		color: "white",
		textAlign: "center",
	},
	singleListing: {
		backgroundColor: "pink",
		marginTop: 10,
		padding: 16,
		fontSize: 16,
		alignItems: "center",
	},
	centerContent: {
		alignItems: "center",
	},
	featuredImage: {
		width: 150,
		height: undefined,
		aspectRatio: 1,
	},
	body: {
		fontWeight: "700",
	},
	loadingIndicator: {
		flex: 1,
	},
});

export default Reviews;
