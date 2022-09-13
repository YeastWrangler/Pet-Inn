const atlasUrl =
	"https://eu-west-1.aws.data.mongodb-api.com/app/petinnapp-gntsq/endpoint/data/v1";

const APIkey =
	"aZnFLEvwf50vLA3wRHs9QqXiqy0gXKETeGEXsF3eRBeTX3M2CxuSa0J6eZttIj41";
var axios = require("axios");
const { default: mongoose } = require("mongoose");
const nomgoose = require("mongoose");
const db = mongoose.connection;
var data = JSON.stringify({
	collection: "customers",
	database: "sample_analytics",
	dataSource: "PetInn",
	projection: {
		_id: 1,
	},
});

mongoose.connect(
	`mongodb+srv://Malekf94:Bishbosh%40123@petinn.y3mfroa.mongodb.net/test?retryWrites=true`,
	{ useNewUrlParser: true },
	function (err) {
		if (err) throw err;

		console.log("Successfully connected");
	}
);

const getAllCustomers = async () => {
	return axios
		.get(
			`https://eu-west-1.aws.data.mongodb-api.com/app/petinnapp-gntsq/endpoint/findAllCustomers`
			// {
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 		"Access-Control-Request-Headers": "*",
			// 		"api-key":
			// 			"aZnFLEvwf50vLA3wRHs9QqXiqy0gXKETeGEXsF3eRBeTX3M2CxuSa0J6eZttIj41",
			// 	},
			// }
		)
		.then(({ data }) => {
			// console.log("sds");
			console.log(data);
			// return data;
		})
		.catch((error) => {
			// console.log(error);
			throw error;
		});
};

const tester = () => {
	return axios
		.get(`https://busy-ruby-narwhal-kit.cyclic.app/api/owners/listings`)
		.then(({ data }) => {
			console.log("getting info", data);
			return data;
		});
};
getAllCustomers();
