import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import { colors } from "../assets/colors";
import { sitterListingTestData } from "../test data/sitterListingTestData";


const ServicesList = ({ navigation }) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.pageHeader}>Services list</Text>
      </View>

      <FlatList
        contentContainerStyle={{ paddingBottom: 50 }}
        keyExtractor={(item) =>
          item._id
        } /*----> change'id' for a unique id from our data table.
        This tell Flat list not to look for key property but for our specified property instead */
        data={sitterListingTestData}
        //need to destructure item as FlatList has created an object with multiple keys
        renderItem={({ item }) => {
          return (
            <View style={styles.singleListing}>
              <Pressable
                onPress={() => {
                  navigation.navigate("SitterListing", { id: item._id });
                }}
                style={styles.centerContent}
              >
                <Text style={[styles.location, styles.content]}>
                  {item.location}
                </Text>

                <Text style={styles.content}>{item.title}</Text>

                <View style={styles.infoContainer}>
                  <Text style={styles.heading}>Pet(s) covered: </Text>
                  <Text style={styles.content}>
                    {item.suitable_pets.map((pet, index) => {
                      if (index === item.suitable_pets.length - 1) {
                        return pet;
                      } else {
                        return `${pet}, `;
                      }
                    })}
                  </Text>
                </View>

                <Text style={styles.content}>
                  {item.dates.from} to {item.dates.to}
                </Text>

                <Text style={[styles.payment, styles.content]}>
                  {item.payment === 0 ? "Free" : `£${item.payment}`}
                </Text>
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
    // paddingBottom: 50,
  },
  centerContent: {
    alignItems: "center",
  },
  location: {
    fontWeight: "700",
  },
  infoContainer: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  heading: {
    fontWeight: "700",
    fontSize: 17,
  },
  content: {
    fontSize: 20,
  },
});

export default ServicesList;
