const {
	postSitterListing,
	getSitterListings,
	deleteSitterListing,
} = require("./dbCalls/sitterListing.js");
const {
	postOwnerListing,
	getOwnerListings,
	deleteOwnerListing,
} = require("./dbCalls/ownerListing.js");
const { postReview, getReviews, deleteReview } = require("./dbCalls/review");
const { getUser, deleteUser, addUser } = require("./dbCalls/User");

const testPost = {
	name: "Doggo-doggo",
	pets: 5,
	info: ["dog", "cat", "ferret"],
	trivia_quiz: { discord: false, heroku: false, maleksdreams: false },
};

// postSitterListing(testPost);
const listingData = require("./data/usersData");

const id = "6318a168e63eec0a0bdefa9c";
// addUser(listingData[0]);
// getOwnerListings()
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// deleteReview(id);
