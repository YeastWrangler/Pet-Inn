import React, {useContext} from "react";
import { colors } from "../assets/colors";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import userContext from "../context/context";

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

  const { currUser } = useContext(userContext);

  return (
    <View style={styles.backGround}>
   
      <Text style={styles.text}> Welcome Home {currUser.username} </Text>
      
     
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
    width: "70%",
    height: "60%",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1
  },

  backGround: {
    flex: 1,
    backgroundColor: colors.mainColor,
   alignItems:"center"
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight:"600",
    alignContent: "center",
    margin: 10,
    marginTop: 20,
    textShadowColor:"red",
    textShadowRadius:14
    
  },
  container: {
    width: "100%",
    height: 50,
    marginTop: 10,
    backgroundColor: "lightblue",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    width: "70%",
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
    fontSize: 20,
    marginBottom: 10
  },
  secondButtonContainer: {
    width: "70%",
    height: "12%",
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
    fontSize: 18,
  },
});

export default LoggedinHome;
