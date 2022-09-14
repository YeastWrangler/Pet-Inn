import { useState } from "react";
import { colors } from "../assets/colors";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { registerUser } from "../dbCalls/User";

const CreateUser = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  //   console.log(password);

  const handleRegister = () => {
    const registerData = {
      email: email,
      username: username,
      password: password,
      avatar_url: imageURL,
      bio: bio,
      location: location,
    };
    registerUser(registerData)
      .then((status) => {
        if (status === 201) {
          console.log("register potentially successful");
          navigation.navigate("Login");
        }
      })
      .catch(() => {
        Alert.alert("Registration Failed!");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create User</Text>
      <View style={styles.inputContainer}>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Avatar URL:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter image URL"
          value={imageURL}
          onChangeText={(text) => setImageURL(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Bio:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter description"
          value={bio}
          onChangeText={(text) => setBio(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Location:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
      </View>
      <Pressable onPress={handleRegister}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "pink",
  },
  title: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginHorizontal: 15,
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "white",
    padding: 8,
    width: "70%",
    borderRadius: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.buttonColor,
    width: "70%", //adjust size so buttons match in width
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CreateUser;
