async function postSitterListing(newPost) {
	const { MongoClient } = require("mongodb");
	const uri =
		"mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	try {
		await client.connect();
		await client.db("PetInn").collection("SitterListings").insertOne(newPost);
		return "Post created successfully";
	} finally {
		await client.close();
	}
}

async function getSitterListings() {
	const { MongoClient } = require("mongodb");
	const uri =
		"mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	async function findListings() {
		const cursor = await client
			.db("PetInn")
			.collection("SitterListings")
			.find({});
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

async function deleteSitterListing(id) {
	const { MongoClient, ObjectId } = require("mongodb");
	const uri =
		"mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	async function deleteListing() {
		const deleteData = { _id: ObjectId(id) };
		await client
			.db("PetInn")
			.collection("SitterListings")
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

async function getOneSitterListing(id) {
	const { MongoClient, ObjectId } = require("mongodb");
	const uri =
		"mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	async function findListing() {
		const findData = { _id: ObjectId(id) };
		const cursor = await client
			.db("PetInn")
			.collection("SitterListings")
			.findOne(findData);
		return cursor;
	}

	try {
		await client.connect();
		const result = await findListing();
		return result;
	} finally {
		setTimeout(() => {
			client.close();
		}, 1500);
	}
}

module.exports = {
	postSitterListing,
	getSitterListings,
	deleteSitterListing,
	getOneSitterListing,
};
