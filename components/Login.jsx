import React, { useState, useContext } from "react";
import { colors } from "../assets/colors";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	TouchableOpacity,
} from "react-native";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import userContext from "../context/context";
import { loginUser } from "../dbCalls/User";

const Login = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { currUser, setCurrUser } = useContext(userContext);

	const pressHandler = () => {
		navigation.navigate("LoggedinHome");
	};
	const handleLoginPress = () => {
		// console.log("handle login press")
		// setCurrUser({email:email, password:password})
		const loginData = { email: email, password: password };
		loginUser(loginData).then((data) => {
			setCurrUser(data.user);
			navigation.navigate("LoggedinHome");
		});
	};
	const handleSignUp = () => {
		console.log("handle signup press");
		//need stuff
	};

	return (
		<KeyboardAvoidingView style={styles.container} behavior="padding">
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Email"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					secureTextEntry
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button} onPress={handleLoginPress}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, styles.buttonOutline]}
					onPress={handleSignUp}
				>
					<Text style={styles.buttonOutlineText}>Register</Text>
				</TouchableOpacity>
				<Button
					style={[styles.guestButton, styles.guestButtonOutline]}
					title="Continue as Guest"
					onPress={pressHandler}
				/>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "pink",
	},
	inputContainer: {
		width: "80%",
	},
	input: {
		backgroundColor: "white",
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 5,
	},
	buttonContainer: {
		width: "60%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 40,
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
	guestButton: {
		backgroundColor: colors.mainColor,
		width: "100%", //adjust size so buttons match in width
		padding: 20,
		borderRadius: 10,
		alignItems: "center",
	},
	guestButtonOutline: {
		backgroundColor: "white",
		marginTop: 20,
		borderWidth: 2,
		borderColor: colors.secondColor,
	},
	buttonText: {
		color: "white",
		fontWeight: "700",
		fontSize: 16,
	},
	buttonOutlineText: {
		color: colors.buttonColor,
		fontWeight: "700",
		fontSize: 16,
	},
});

export default Login;
