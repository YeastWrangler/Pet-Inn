export default async function getUser() {
	const { MongoClient } = require("mongodb");
	const uri =
		"mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	async function findData(client) {
		const cursor = await client
			.db("PetInn")
			.collection("users")
			.findOne({ username: "Linux" });
		// const result = await cursor.toArray();
		console.log("result", cursor);
	}
	try {
		await client.connect();
		await findData(client);
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

// export default async function getUsers() {
// 	const { MongoClient } = require("mongodb");
// 	const uri =
// 		"mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
// 	const client = new MongoClient(uri);
// 	async function findData(client) {
// 		const cursor = await client.db("PetInn").collection("users").find({});
// 		const result = await cursor.toArray();
// 		console.log("result", result);
// 	}
// 	try {
// 		await client.connect();
// 		await findData(client);
// 	} catch (e) {
// 		console.error(e);
// 	} finally {
// 		await client.close();
// 	}
// }

getUser().catch(console.error);
