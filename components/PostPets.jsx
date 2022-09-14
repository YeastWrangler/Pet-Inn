import React, { useState } from "react";
import { colors } from "../assets/colors";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	KeyboardAvoidingView,
	TouchableOpacity,
	ScrollView,
	Alert
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { getListingByOwner, loginUser, postListingByOwner } from "../api";
import { useEffect, useContext } from "react";
import userContext from "../context/context";
import DateTimePicker from '@react-native-community/datetimepicker';

const PostPets = () => {

	const { currUser } = useContext(userContext);

	const [pet, setPet] = useState([]);
	const [username, setUsername] = useState("Alex");
	const [title, setTitle] = useState("");
	const [toDate, setToDate] = useState(new Date())
	const [fromDate, setFromDate] = useState(new Date())
	const [location, setLocation] = useState("")
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

	const handlePress = () => {
		// loginUser(currUser).then((data) => {
		// 	//console.log("logged in:", currUser);
		// });
		postListingByOwner(newListing).then((data) => {
			Alert.alert("Your Post Was Successful", "You Deserve a Treat!")
			
		}).catch((err) => {
			Alert.alert("Whoops! Your Post was Not Successful. Please Try Again")
		})
	};

	const onChangeFrom = (event, selectedDate) => {
		const currentDate = selectedDate;
		setFromDate(currentDate);
	
	  };
	const onChangeTo = (event, selectedDate) => {
		const currentDate = selectedDate;
		setToDate(currentDate)

	  };

	return (
		<SafeAreaView>
			<ScrollView >
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<View style={styles.inputContainer}>
					<Text style={styles.text}>🐶 Post About Your Pets 🐭</Text>
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
					
					{/* <DatePicker date={fromDate} onDateChange={setFromDate} />
					<DatePicker date={toDate} onDateChange={setToDate} /> */}
				
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
					<Text style={styles.header}>Select Starting Date: </Text>
					<DateTimePicker  style={styles.datePicker}  value={fromDate} onChange={onChangeFrom} />
					<Text style={styles.header}>Select Ending Date: </Text>
					<DateTimePicker  style={styles.datePicker}  value={toDate} onChange={onChangeTo} />
					<View style={{ marginTop: 10,borderWidth: 3, borderColor:colors.buttonColor, borderRadius: 15, backgroundColor: "white", height:280 }}>
						<Text style={styles.header2}>Select Your Pet Type: {pet}</Text>
						<Picker
						itemStyle={{ color: colors.buttonColor, fontweight: "800" ,fontSize:30 }}
							selectedValue={pet}
							onValueChange={(currentPet) => setPet(currentPet)}
						>
							<Picker.Item label="Select: ⬇️" value="Select:" />
							<Picker.Item label="Cat" value="Cat 🐈" />
							<Picker.Item label="Dog" value="Dog 🦮" />
							<Picker.Item label="Fish" value="Fish 🐡" />
							<Picker.Item label="Ogre" value="Ogre 🐸" />
							<Picker.Item label="Other" value="Other 🙈" />
						</Picker>
					</View>

					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.button} onPress={handlePress}>
							<Text style={styles.buttonText}>Submit Your Post!</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		
		backgroundColor: "pink"
	},
	header: {
		fontSize: 20,
		fontWeight:"500",
		color: "white",
		height:40,
		marginTop:20,
		marginBottom: 20,
		justifyContent: "center",
		backgroundColor: colors.buttonColor,
		width:"85%",
		borderRadius: 15,
		borderWidth: 2,
		textAlign:"center",
		padding:5,
		borderColor: "gray",
		overflow: "hidden",
		alignSelf: "center",
		
	},

	header2: {
		fontSize: 20,
		fontWeight:"500",
		color: "white",
		height:40,
		marginTop:15,
		justifyContent: "center",
		backgroundColor: colors.buttonColor,
		width:"85%",
		borderRadius: 15,
		borderWidth: 2,
		textAlign:"center",
		padding:5,
		borderColor: "white",
		overflow: "hidden",
		alignSelf: "center",
		
	},
	datePicker: {
	
		alignContent:"center",
		alignSelf: "center",
		alignItems: "center",
		marginBottom: 5,
		height: 50,
		width:75,
		backgroundColor:"white",
		borderRadius: 15,
		borderWidth:1,
		borderColor: colors.buttonColor,
		overflow:"hidden"
},

	petPicker: {

		
		
	},
	text: {
		color: "white",
		fontSize: 26,
		fontWeight:"600",
		alignContent: "center",
		margin: 10,
		textShadowColor:"black",
		textShadowRadius:10
	},

	inputContainer: {
		width: "80%",
		margin: 10,
		
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
		marginTop: 20,
		marginBottom: 50

	},
	button: {
		backgroundColor: colors.red,
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
