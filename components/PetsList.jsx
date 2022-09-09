import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { colors } from "../assets/colors";
import { OwnerListingTestData } from "../OwnerListingTestData";

const PetsList = ({ navigation }) => {
  // const [ownerListings, setOwnerListings] = useState([]);

  // useEffect(() => {
  //
  // }, []);

  const data = OwnerListingTestData;

  // const data = [
  //   {
  //     key: "1", // FlatList must have a key property. see workaround below
  //     location: "Birmingham",
  //     images: [
  //       "https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg",
  //     ],
  //     petType: "dog",
  //     other: "must take dog for 2 walks every day",
  //   },
  //   {
  //     key: "2",
  //     location: "London",
  //     images: [
  //       "https://cdn.reptileadvisor.com/wp-content/uploads/2020/03/plants-for-snake-tank.jpg",
  //     ],
  //     petType: "snake",
  //     other: "feed snake once per week",
  //   },
  //   {
  //     key: "3",
  //     location: "Manchester",
  //     images: [
  //       "https://miniblogcore.azurewebsites.net/Posts/files/cat_637121647509154829.jpg",
  //     ],
  //     petType: "cat",
  //     other: "dont let cat out at night",
  //   },
  //   {
  //     key: "4",
  //     location: "Bristol",
  //     images: [
  //       "https://miniblogcore.azurewebsites.net/Posts/files/cat_637121647509154829.jpg",
  //     ],
  //     petType: "cat",
  //     other:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, nulla! Porro iste quidem voluptatem harum officiis, ratione consectetur quos reiciendis!",
  //   },
  //   {
  //     key: "5",
  //     location: "Leeds",
  //     images: [
  //       "https://miniblogcore.azurewebsites.net/Posts/files/cat_637121647509154829.jpg",
  //     ],
  //     petType: "rabbit",
  //     other:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, nulla! Porro iste quidem voluptatem harum officiis, ratione consectetur quos reiciendis!",
  //   },
  //   {
  //     key: "6",
  //     location: "Glasgow",
  //     images: [
  //       "https://miniblogcore.azurewebsites.net/Posts/files/cat_637121647509154829.jpg",
  //     ],
  //     petType: "Dog",
  //     other:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, officia!",
  //   },
  //   {
  //     key: "7",
  //     location: "London",
  //     images: [
  //       "https://miniblogcore.azurewebsites.net/Posts/files/cat_637121647509154829.jpg",
  //     ],
  //     petType: "Cat",
  //     other:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam consectetur explicabo ipsam deleniti laborum rem ipsum, delectus ratione! In quasi optio explicabo aperiam ex error cum, reprehenderit impedit nesciunt at temporibus! Hic eius tenetur incidunt quas quibusdam veritatis fuga? Nulla, odio consectetur inventore recusandae corporis reiciendis sint at architecto ut quibusdam iste culpa nihil ipsam modi voluptas dolorum aliquid? Inventore, a minus cum nostrum esse sint quis cupiditate architecto reprehenderit molestiae quam error repellat tempora eligendi fuga obcaecati itaque explicabo repellendus. Minima maxime voluptatem nobis libero porro facilis dignissimos esse! Laboriosam natus adipisci hic rem repellendus commodi nihil sunt, dolorum cumque cupiditate nemo, rerum dolores consectetur non esse architecto id tenetur aliquam velit itaque provident at. Eum aliquam rerum voluptas? Vitae ducimus neque quisquam consequatur consectetur, doloribus dolorem soluta incidunt reprehenderit exercitationem rerum maiores nesciunt iste consequuntur cupiditate temporibus nam asperiores cum voluptas corrupti, reiciendis debitis. Alias recusandae cumque, incidunt placeat nisi quod earum perspiciatis ratione magnam ut facere id dignissimos veniam quo enim eaque aperiam dolore, rerum expedita! Iure voluptas natus, nisi ipsam ad, exercitationem ab blanditiis sapiente rerum architecto voluptatum recusandae doloremque eaque dicta, impedit iste eos omnis est temporibus excepturi illum nemo saepe! Impedit, vitae! Fugit consectetur odit, laborum deserunt officia sit adipisci magni illum culpa temporibus numquam explicabo et repellendus distinctio veniam animi tempora molestiae porro eaque maiores veritatis quasi. Facere sint eius eveniet deserunt? Veritatis repellat exercitationem quaerat omnis id quasi inventore vero saepe excepturi incidunt dolor, ab reiciendis? Aspernatur, reprehenderit! Facere, magni cumque. Reprehenderit enim voluptatibus aliquid saepe qui quos veniam. Magnam, necessitatibus recusandae sed voluptates suscipit molestias pariatur reprehenderit voluptatibus, ab quia sint voluptas modi possimus illo officia consequatur nam labore similique cupiditate maiores dolorum eveniet dolore. Odio maxime nam hic, veniam, corporis deleniti, sunt ducimus quis nihil laborum facilis excepturi consectetur?",
  //   },
  // ];

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.pageHeader}>Pet Listings</Text>
      </View>

      <FlatList
        contentContainerStyle={{ paddingBottom: 50 }}
        keyExtractor={(item) =>
          item._id
        } /*----> change'id' for a unique id from our data table.
        This tell Flat list not to look for key property but for our specified property instead */
        data={OwnerListingTestData}
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
                  {item.dates.from} to {item.dates.to}
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
    // paddingBottom: 50,
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
});

export default PetsList;
