async function getUser() {
	const { MongoClient } = require("mongodb");
	const uri =
		"mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	async function findData(client) {
		const cursor = await client
			.db("PetInn")
			.collection("users")
			.findOne({ username: "Linux" });
		return cursor;
	}
	try {
		await client.connect();
		const result = await findData(client);
		return result;
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

async function addUser(userdata) {
	const { MongoClient } = require("mongodb");
	const uri =
		"mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	try {
		await client.connect();
		await client.db("PetInn").collection("users").insertOne(userdata);
		return "User created successfully";
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

async function deleteUser(id) {
	const { MongoClient, ObjectId } = require("mongodb");
	const uri =
		"mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	async function deleteListing() {
		const deleteData = { _id: ObjectId(id) };
		await client.db("PetInn").collection("users").deleteOne(deleteData);
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

module.exports = { getUser, deleteUser, addUser };
