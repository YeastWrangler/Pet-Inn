import React, { useState, useContext } from "react";
import { colors } from "../assets/colors";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import userContext from "../context/context";
import { loginUser } from "../dbCalls/User";

const Login = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setCurrUser } = useContext(userContext);

	const pressHandler = () => {
		navigation.navigate("LoggedinHome");
	};
	const loginData = { email: email, password: password };

	const handleLoginPress = () => {
		loginUser(loginData)
			.then((data) => {
				setCurrUser(data.user);
				Alert.alert(`You're now logged in as ${data.user.username}`);
				navigation.navigate("LoggedinHome");
			})
			.catch((err) => {
				setTimeout(() => {
					setEmail("Invalid Email/Password");
				}, 1000);
				setTimeout(() => {
					setEmail(""), setPassword("");
				}, 2000);
			});
	};

	const handleSignUp = () => {
		navigation.navigate("CreateUser");
	};
		

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
		  autoCapitalize="none"
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
		  autoCapitalize="none"
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
				<TouchableOpacity
					style={[styles.button, styles.buttonOutline]}
					onPress={pressHandler}
				>
					<Text style={styles.buttonOutlineText}>Continue as Guest</Text>
				</TouchableOpacity>
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
		// marginTop: 50,
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
