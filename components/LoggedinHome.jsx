import React from "react";
import { colors } from "../assets/colors";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

const LoggedinHome = ({ navigation }) => {

  const handlePetsPress = () => {
    navigation.navigate("PetsList");
  };


  const handleServicesPress = () => {
    navigation.navigate("ServicesList");
  };

  const handlePostServices = () => {
    navigation.navigate("PostServices");
  };

  const handlePostPet = () => {
    navigation.navigate("PostPets");
  };

  return (
    <View style={styles.backGround}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://i.insider.com/60817ec5354dde0018c06960?width=1300&format=jpeg&auto=webp",
          }}
        />
      </View>
      <Text style={styles.text}>You Are Now Logged in</Text>
      <Text>Lots of different posts:</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePetsPress}>
          <Text style={styles.buttonText}>Pet Sitting Posts</Text>
          <Image
            style={styles.postImage}
            source={{
              uri: "https://www.princeton.edu/sites/default/files/styles/full_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Hy5eTACi",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleServicesPress}>
          <Text style={styles.buttonText}>Pet Services Posts</Text>
          <Image
            style={styles.postImage}
            source={{
              uri: "https://www.petbusinessinsurance.co.uk/img/dogwalking.jpg",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.secondButtonContainer}>
        <TouchableOpacity style={styles.secondButton} onPress={handlePostPet}>
          <Text style={styles.secondButtonText}>Needing Pet Help?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondButtonContainer}>
        <TouchableOpacity
          style={styles.secondButton}
          onPress={handlePostServices}
        >
          <Text style={styles.secondButtonText}>Offering Services?</Text>
        </TouchableOpacity>
      </View>
      <Button title="postings" />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: "100%",
    height: "100%",
  },
  avatarContainer: {
    borderRadius: 50,
    borderWidth: 1,
    width: 50,
    height: 50,
    overflow: "hidden",
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  postImage: {
    width: "60%",
    height: "60%",
    borderRadius: 10,
  },

  backGround: {
    flex: 1,
    backgroundColor: colors.mainColor,
  },
  text: {
    color: "white",
    fontSize: 20,
    alignContent: "center",
    margin: 20,
    marginLeft: 100,
  },
  container: {
    width: "100%",
    height: 50,
    marginTop: 10,
    backgroundColor: "lightblue",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    width: "80%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.buttonColor,
    width: "100%", //adjust size so buttons match in width
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  secondButtonContainer: {
    width: "70%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  secondButton: {
    backgroundColor: "white",
    width: "100%", //adjust size so buttons match in width
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  secondButtonText: {
    color: colors.buttonColor,
    fontWeight: "700",
    fontSize: 16,
  },
});

export default LoggedinHome;
