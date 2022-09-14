import React, { useEffect, useState } from "react";
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
import { getOwnerListings } from "../dbCalls/ownerListing";
import moment from "moment"

const PetsList = ({ navigation }) => {
  const [ownerListings, setOwnerListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOwnerListings()
      .then(({ ownerListing }) => {
        setOwnerListings(ownerListing);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        //need to error handle
      });
  }, []);

  if (isLoading)
    return <ActivityIndicator style={styles.loadingIndicator} size="large" />;

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.pageHeader}>Pet Listings</Text>
      </View>

      <FlatList
        contentContainerStyle={{ paddingBottom: 50 }}
        keyExtractor={(item) => item._id}
        data={ownerListings}
        //need to destructure item as FlatList has created an object with multiple keys
        renderItem={({ item }) => {
          return (
            <View style={styles.singleListing}>
              <Pressable
                onPress={() => {
                  navigation.navigate("OwnerListing", { id: item._id, username: item.username });
                }}
                style={styles.centerContent}
              >
                <Text style={styles.title}>{item.title}</Text>
                <Image
                  style={styles.featuredImage}
                  source={{
                    uri: item.image_urls[0],
                  }}
                />
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.content}>
                  {moment(item.date_from).format("MMM Do, YYYY")} to {moment(item.date_to).format("MMM Do, YYYY")}
                </Text>
                <Text style={styles.content}>
                  {item.pets.map((pet, index) => {
                    if (index === item.pets.length - 1) {
                      return pet;
                    } else {
                      return `${pet}, `;
                    }
                  })}
                </Text>

                <Text style={styles.content}>{item.payment === 0 ? "Free" : `£${item.payment}`}</Text>
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
    margin: 15,
    fontSize: 18,
    fontWeight: "900",
    color: "white",
    textAlign: "center",
    
  },
  singleListing: {
    backgroundColor: "pink",
    marginTop: 20,
    padding: 16,
    alignItems: "center",
    borderRadius: 15,
    width: "90%",
    alignSelf: "center",
   
  },
  title: {
    fontWeight: "800",
    fontSize: 18,
    textAlign: "center"
  },
  centerContent: {
    alignItems: "center",
  },
  featuredImage: {
    width: 200,
    height: undefined,
    aspectRatio: 1,
    borderRadius: 15,
    margin: 10,
  },
  content: {
		fontSize: 18,
	},
  location: {
    fontWeight: "700",
    fontSize: 20,
    textDecorationLine: "underline"
  },
  loadingIndicator: {
    flex: 1,
  },
});

export default PetsList;
