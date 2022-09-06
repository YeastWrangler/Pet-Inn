async function main() {
    const { MongoClient } = require('mongodb');
    const uri = "mongodb+srv://tedNorthcoders:PetInn0369@petinn.gyiq5ap.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    async function listDatabases(client){
        databasesList = await client.db().admin().listDatabases();
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    };
    async function findData(client) {
        const cursor = await client.db("PetInn").collection("User info").find({})
        const result = await cursor.toArray()
        console.log("result", result)
    }
    console.log("hsdhs")
    try {
        await client.connect();
        await listDatabases(client)
        await findData(client)
    } catch(e) {
        console.error(e)
    } finally {
        await client.close()
    }
}
main().catch(console.error)