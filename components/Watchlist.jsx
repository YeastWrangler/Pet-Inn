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
import {
	deleteFromWatchList,
	getUserInfo,
	getWatchList,
} from "../dbCalls/User";

const WatchList = ({ navigation }) => {
	const [watchList, setwatchList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { currUser, setCurrUser } = useContext(userContext);
	const [count, setCount] = useState("");

	useEffect(() => {
		getWatchList(currUser.username).then((data) => {
			setwatchList(data);
			setIsLoading(false);
		});
	}, [count]);

	if (isLoading)
		return <ActivityIndicator style={styles.loadingIndicator} size="large" />;

	return (
		<View>
			<View style={styles.headerContainer}>
				<Text style={styles.pageHeader}>Your Watch List</Text>
			</View>

			<FlatList
				contentContainerStyle={{ paddingBottom: 50 }}
				keyExtractor={(item) => item._id}
				data={watchList}
				//need to destructure item as FlatList has created an object with multiple keys
				renderItem={({ item }) => {
					return (
						<View style={styles.singleListing}>
							<Pressable
								onPress={() => {
									navigation.navigate("OwnerListing", { id: item._id });
								}}
								style={styles.centerContent}
							>
								<Text>{item.title}</Text>
								<Image
									style={styles.featuredImage}
									source={{
										uri: item.image_urls[0],
									}}
								/>
								<Text style={styles.location}>{item.location}</Text>
								<Text>
									{moment(item.from_date).format("MMM Do, YYYY")} to{" "}
									{moment(item.to_date).format("MMM Do, YYYY")}
								</Text>
								<Text>
									{item.pets.map((pet, index) => {
										if (index === item.pets.length - 1) {
											return pet;
										} else {
											return `${pet}, `;
										}
									})}
								</Text>

								<Text>{item.payment === 0 ? "Free" : `£${item.payment}`}</Text>
							</Pressable>
							<Pressable
								onPress={() => {
									console.log("hello");
									deleteFromWatchList(currUser.username, item._id);
									setCount(item._id);
								}}
								style={styles.centerContent}
							>
								<Text>Delete from Watchlist</Text>
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
	location: {
		fontWeight: "700",
	},
	loadingIndicator: {
		flex: 1,
	},
});

export default WatchList;
