const {
	postSitterListing,
	getSitterListings,
} = require("./dbCalls/sitterListing.js");
const {
	postOwnerListing,
	getOwnerListings,
} = require("./dbCalls/ownerListing.js");
const { postReview, getReviews } = require("./dbCalls/review");
const testPost = {
	name: "Doggo-doggo",
	pets: 5,
	info: ["dog", "cat", "ferret"],
	trivia_quiz: { discord: false, heroku: false, maleksdreams: false },
};

// postSitterListing(testPost);
getReviews();
