import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import usersData from "../data/usersData"

const UserProfile = () => {

    const avatar = "https://i.insider.com/60817ec5354dde0018c06960?width=1300&format=jpeg&auto=webp"
    const testData = usersData


  return (
    <SafeAreaView>
    <View style={styles.container}>
    <View style={styles.avatarContainer}>
    <Image
          style={styles.avatar}
          source={{
            uri: avatar
          }}
        />
        </View>
    <Text style={styles.listingTitle}>Welcome '{testData[0].username}' to Your Profile</Text>
          </View>
    <Text style={styles.content}></Text>
    <View style={styles.infoContainer}>
            <Text style={styles.heading}>Bio: </Text>
            <Text style={styles.content}>{testData[0].bio}</Text>
    </View>
   
          <View style={styles.infoContainer}>   
            <Text style={styles.heading}>Location: </Text>
            <Text style={styles.content}>{testData[0].location} 🌎 </Text>
          </View>
          <View style={styles.infoContainer}>   
            <Text style={styles.heading}>My Rating: </Text>
            <Text style={styles.content}>⭐️ ⭐️ ⭐️ </Text>
          </View>
          <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => {
              console.log("reviews button pressed")
            }}
            >
              <Text style={styles.heading}>My Reviews: </Text>
              <Text style={styles.content}>None</Text>
             
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => {
              console.log("edit button pressed")
            }}
            >
              <Text style={styles.heading}>My Wishlist:  </Text>
              <Text style={styles.content}>Empty</Text>
             
        </TouchableOpacity>
          <TouchableOpacity
          style={styles.contactButton}
          onPress={() => {
              console.log("edit button pressed")
            }}
            >
              <Text style={styles.contactButtonText}>Edit My Profile</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 15,
    borderColor:"pink",
    borderStyle:"solid",
    backgroundColor: "pink",
    margin: 10,
    padding: 6,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  avatarContainer: {
    borderRadius: 50,
    borderWidth: 1,
    width: 75,
    height: 75,
    overflow: "hidden",
 
    marginTop: 5,
    marginBottom: 5,
  },
  listingTitle: {
    fontSize: 20,
    fontWeight: "700",
    margin: 10,
  },
  datesContainer: {
    flexDirection: "row",
  },

  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderColor:"pink",
    borderStyle:"solid",
    backgroundColor: "pink",
    margin: 10,
    padding: 6,
  },
  heading: {
    fontWeight: "600",
    fontSize: 20
  },
  content: {
    fontSize: 18,
  },
  payment: {
    fontSize: 20,
    fontWeight: "700",
    margin: 10,
  },
  contactButton: {
    margin: 10,
    padding: 6,
    backgroundColor: "pink",
    borderRadius: 6,
    color: "white",
    alignItems: "center"
  },
  contactButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
  },
});

export default UserProfile