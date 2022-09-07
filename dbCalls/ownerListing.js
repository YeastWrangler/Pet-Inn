async function postOwnerListing(newPost) {
	const { MongoClient } = require("mongodb");
	const uri =
		"mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	try {
		await client.connect();
		await client.db("PetInn").collection("PetOwnerListings").insertOne(newPost);
		return "Posting created succesfully";
	} catch (e) {
		console.log(e);
	} finally {
		await client.close();
	}
}

async function getOwnerListings() {
	const { MongoClient } = require("mongodb");
	const uri =
		"mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	async function findListings() {
		const cursor = await client
			.db("PetInn")
			.collection("PetOwnerListings")
			.find({});
		const result = await cursor.toArray();

		// console.log(result);
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

async function deleteOwnerListing(id) {
	const { MongoClient, ObjectId } = require("mongodb");
	const uri =
		"mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	async function deleteListing() {
		const deleteData = { _id: ObjectId(id) };
		await client
			.db("PetInn")
			.collection("PetOwnerListings")
			.deleteOne(deleteData);
	}

	try {
		await client.connect();
		await deleteListing();
	} finally {
		setTimeout(() => {
			client.close();
		}, 1500);
	}
}

module.exports = { postOwnerListing, getOwnerListings, deleteOwnerListing };
