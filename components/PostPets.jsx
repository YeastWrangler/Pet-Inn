import React, { useState } from "react";
import { colors } from "../assets/colors";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	KeyboardAvoidingView,
	TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { getListingByOwner, loginUser, postListingByOwner } from "../api";
import { useEffect, useContext } from "react";
import userContext from "../context/context";

const PostPets = () => {
	const { currUser } = useContext(userContext);

	const [pet, setPet] = useState([]);
	const [username, setUsername] = useState("Alex");
	const [title, setTitle] = useState("");
	const [toDate, setToDate] = useState("");
	const [fromDate, setFromDate] = useState("");
	const [location, setLocation] = useState("");
	const [info, setInfo] = useState("");
	const [payment, setPayment] = useState(0);
	const [image_urls, setImage_urls] = useState("");

	let newListing = {
		username: username,
		title: title,
		pets: [pet],
		date_from: fromDate,
		date_to: toDate,
		location: location,
		additional_info: info,
		payment: parseInt(payment),
		image_urls: [image_urls],
	};
	console.log("new listing", newListing);

	const handlePress = () => {
		loginUser(currUser).then((data) => {
			console.log("logged in:", currUser);
		});
		postListingByOwner(newListing).then((data) => {
			console.log("post listing", data);
		});
	};

	return (
		<SafeAreaView>
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<View style={styles.inputContainer}>
					<Text style={styles.header}>Post About Your Pets</Text>
					<TextInput
						value={title}
						style={styles.input}
						onChangeText={setTitle}
						placeholder="Title of Post"
					/>
					<TextInput
						style={styles.input}
						onChangeText={setInfo}
						placeholder="Info About Your Pets"
					/>
					<TextInput
						style={styles.input}
						onChangeText={setToDate}
						placeholder="Dates To:"
					/>
					<TextInput
						style={styles.input}
						onChangeText={setFromDate}
						placeholder="Dates From:"
					/>
					<TextInput
						style={styles.input}
						onChangeText={setLocation}
						placeholder="Location"
					/>
					<TextInput
						style={styles.input}
						keyboardType="decimal-pad"
						onChangeText={setPayment}
						placeholder="Payment"
					/>
					<TextInput
						style={styles.input}
						onChangeText={setImage_urls}
						placeholder="Upload Your Photo URLs"
					/>
					<View style={styles.inputContainer}>
						<Picker
							selectedValue={pet}
							onValueChange={(currentPet) => setPet(currentPet)}
						>
							<Picker.Item label="" value="" />
							<Picker.Item label="Cat" value="Cat" />
							<Picker.Item label="Dog" value="Dog" />
							<Picker.Item label="Fish" value="Fish" />
							<Picker.Item label="Ogre" value="Ogre" />
							<Picker.Item label="Other" value="Other" />
						</Picker>
						<Text style={styles.picker}>Select Your Pet Type: {pet}</Text>
					</View>

					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.button} onPress={handlePress}>
							<Text style={styles.buttonText}>Upload Your Photos Here</Text>
						</TouchableOpacity>
					</View>
					{/* <Text style={styles.header}>Post About Your Pets Here</Text>
            <TextInput style={styles.input}placeholder="Title of Post"  />
             <TextInput style={styles.input} placeholder="Info About Your Pets" />
             <TextInput style={styles.input} placeholder="Info About Your Pets" />
             <TextInput style={styles.input} placeholder="Location" />
             <TextInput style={styles.input} placeholder="House Information" />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                <Text style={styles.buttonText}>Upload Your Photos Here</Text>
            </TouchableOpacity> */}
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 150,
	},
	header: {
		fontSize: 30,
		color: "pink",
		height: 40,
		width: "95%",
		margin: 5,
	},
	picker: {
		fontSize: 20,
		color: "black",
		height: 30,
		width: "100%",
		marginBottom: 30,
	},

	inputContainer: {
		width: "80%",
		margin: 30,
	},
	input: {
		backgroundColor: "white",
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 5,
		fontSize: 20,
		color: "black",
	},
	buttonContainer: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 200,
	},
	button: {
		backgroundColor: colors.buttonColor,
		width: "100%", //adjust size so buttons match in width
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
	},
	buttonOutline: {
		backgroundColor: "white",
		marginTop: 5,
		borderWidth: 2,
		borderColor: colors.buttonColor,
	},
	buttonText: {
		color: "white",
		fontWeight: "700",
		fontSize: 20,
	},
	buttonOutlineText: {
		color: colors.buttonColor,
		fontWeight: "700",
		fontSize: 16,
	},
});

export default PostPets;
