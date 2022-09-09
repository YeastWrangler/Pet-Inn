import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { sitterListingTestData } from "../test data/sitterListingTestData";
import Slideshow from "react-native-image-slider-show";

const IndividualSitterListing = ({ navigation, route }) => {
  const { id } = route.params;
  // console.log(id);
  const testData = sitterListingTestData;

  const filteredData = testData.filter((element) => element._id === id);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>reached individual sitter page</Text>
        {/* <Text style={styles.listingTitle}>{filteredData[0].title}</Text>
          <Text style={styles.content}>{filteredData[0].location}</Text>
          <View style={styles.datesContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.heading}>Date From: </Text>
              <Text style={styles.content}>{filteredData[0].dates.from}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.heading}>Date To: </Text>
              <Text style={styles.content}>{filteredData[0].dates.to}</Text>
            </View>
          </View>
  
  
          <View style={styles.infoContainer}>
            <Text style={styles.heading}>Pet(s): </Text>
            <Text style={styles.content}>
              {filteredData[0].pets.map((pet, index) => {
                if (index === filteredData[0].pets.length - 1) {
                  return pet;
                } else {
                  return `${pet}, `;
                }
              })}
            </Text>
          </View>
  
          <Slideshow
            height={200}
            dataSource={filteredData[0].image_urls.map((photo) => {
              return { url: photo };
            })}
          />
          <Text style={styles.payment}>
            {filteredData[0].payment === 0
              ? "Free"
              : `£${filteredData[0].payment}`}
          </Text>
          <View style={styles.infoContainer}>
            <Text style={styles.heading}>Additional Info: </Text>
            <Text style={styles.content}>{filteredData[0].additional_info}</Text>
          </View>
  
          <View style={styles.infoContainer}>
            <Text style={styles.heading}>Date Added: </Text>
            <Text style={styles.content}>{filteredData[0].date_added}</Text>
          </View>
  
          <View style={styles.infoContainer}>
            <Text style={styles.heading}>Posted By: </Text>
            <Text style={styles.content}>{filteredData[0].username}</Text>
          </View>
  
          <Pressable
            style={styles.contactButton}
            onPress={() => {
              console.log("open chat clicked");
              //needs to open chat window/page when clicked
            }}
          >
            <Text style={styles.contactButtonText}>Contact Owner</Text>
          </Pressable> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  listingTitle: {
    fontSize: 20,
    fontWeight: "700",
    margin: 10,
  },
  datesContainer: {
    flexDirection: "row",
  },
  featuredImage: {
    width: 150,
    height: undefined,
    aspectRatio: 1,
  },
  secondaryImage: {
    width: 100,
    height: undefined,
    aspectRatio: 1,
  },
  infoContainer: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  heading: {
    fontWeight: "700",
  },
  content: {
    fontSize: 16,
  },
  payment: {
    fontSize: 20,
    fontWeight: "700",
    margin: 10,
  },
  contactButton: {
    margin: 10,
    padding: 6,
    backgroundColor: "blue",
    borderRadius: 6,
    color: "white",
  },
  contactButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
});

export default IndividualSitterListing;
