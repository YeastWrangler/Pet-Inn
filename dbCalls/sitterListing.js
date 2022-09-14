import axios from "axios";

export const getSitterListings = () => {
	return axios
		.get("https://busy-ruby-narwhal-kit.cyclic.app/api/sitters/listings")
		.then(({ data }) => {
			return data;
		});
};

export const postSitterListing = (newListing) => {
	return axios
		.post(
			"https://busy-ruby-narwhal-kit.cyclic.app/api/sitters/listings",
			newListing
		)
		.then(({ data }) => {
			return data;
		});
};

export const deleteSitterListing = (id) => {
	return axios.delete(
		`https://busy-ruby-narwhal-kit.cyclic.app/api/sitters/listings/${id}`
	);
};

export const getOneSitterListing = (id) => {
	return axios
		.get(`https://busy-ruby-narwhal-kit.cyclic.app/api/sitters/listings/${id}`)
		.then(({ data }) => {
			console.log(data);
			return data;
		});
};
