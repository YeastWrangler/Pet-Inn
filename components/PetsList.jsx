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
                  {moment(item.from_date).format("MMM Do, YYYY")} to {moment(item.to_date).format("MMM Do, YYYY")}
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

export default PetsList;
