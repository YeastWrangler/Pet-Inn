async function postReview(newPost) {
	const { MongoClient } = require("mongodb");
	const uri =
		"mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	try {
		await client.connect();
		await client.db("PetInn").collection("Reviews").insertOne(newPost);
		return "Review posted successfully";
	} finally {
		await client.close();
	}
}

async function getReviews() {
	const { MongoClient } = require("mongodb");
	const uri =
		"mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	async function findListings() {
		const cursor = await client.db("PetInn").collection("Reviews").find({});
		const result = await cursor.toArray();
		return result;
	}

	try {
		await client.connect();
		const result = await findListings();
		return result;
	} finally {
		setTimeout(() => {
			client.close();
		}, 1500);
	}
}

async function deleteReview(id) {
	const { MongoClient, ObjectId } = require("mongodb");
	const uri =
		"mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	async function removeReview() {
		const deleteData = { _id: ObjectId(id) };
		await client.db("PetInn").collection("Reviews").deleteOne(deleteData);
	}

	try {
		await client.connect();
		await removeReview();
	} finally {
		setTimeout(() => {
			client.close();
		}, 1500);
	}
}

module.exports = { postReview, getReviews, deleteReview };
