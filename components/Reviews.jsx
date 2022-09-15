import React, { useContext, useEffect, useState } from "react";
import {
	StyleSheet,
	FlatList,
	Text,
	View,
	Image,
	Pressable,
	ActivityIndicator,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { colors } from "../assets/colors";
import moment from "moment";
import userContext from "../context/context";
import { getReviews, postReview } from "../dbCalls/review";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

const Reviews = ({ route }) => {
	const [reviews, setReviews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { currUser, setCurrUser } = useContext(userContext);
	const { user } = route.params;
	const [review, setReview] = useState("");
	const [rating, setRating] = useState("");

	useEffect(() => {
		getReviews(user).then((data) => {
			setReviews(data.reviews);
			setIsLoading(false);
		});
	}, [currUser]);

	const handlePostReview = () => {
		const newReview = {
			listingUsername: user,
			username: currUser.username,
			body: review,
			rating: parseInt(rating),
		};
		if (currUser.username == undefined || user === currUser.username) {
			e.preventDefault();
		} else {
			postReview(newReview).then(() => {
				getReviews(user).then((data) => {
					setReviews(data.reviews);
					setIsLoading(false);
					setReview("");
					setRating("");
				});
			});
		}
	};

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
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textinput}
						placeholder="Review"
						value={review}
						onChangeText={(text) => setReview(text)}
					/>
					<TextInput
						style={styles.ratinginput}
						placeholder="Rating out of 5"
						secureTextEntry
						value={rating}
						onChangeText={(text) => setRating(text)}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button} onPress={handlePostReview}>
						<Text style={styles.buttonText}>Post Review</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
};

const styles = StyleSheet.create({
	// container: {
	// 	flex: 1,
	// 	justifyContent: "center",
	// 	alignItems: "center",
	// 	backgroundColor: "pink",
	// },
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
	inputContainer: {
		width: "80%",
	},
	textinput: {
		backgroundColor: "white",
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 5,
	},
	ratinginput: {
		backgroundColor: "white",
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 5,
	},
	button: {
		backgroundColor: colors.buttonColor,
		width: "100%", //adjust size so buttons match in width
		padding: 15,
		borderRadius: 30,
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontWeight: "700",
		fontSize: 16,
	},
	buttonOutline: {
		backgroundColor: "white",
		marginTop: 5,
		borderWidth: 2,
		borderColor: colors.buttonColor,
	},
	buttonOutlineText: {
		color: colors.buttonColor,
		fontWeight: "700",
		fontSize: 16,
	},
});

export default Reviews;
