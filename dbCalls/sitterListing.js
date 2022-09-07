async function postSitterListing(newPost) {
	const { MongoClient } = require("mongodb");
	const uri =
		"mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	try {
		await client.connect();
		await client.db("PetInn").collection("SitterListings").insertOne(newPost);
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
		console.log(result);
		// return cursor.toArray();
	}

	try {
		await client.connect();
		await findListings();
	} finally {
		setTimeout(() => {
			client.close();
		}, 1500);
	}
}

module.exports = { postSitterListing, getSitterListings };
