import axios from "axios";

export const getOwnerListings = () => {
	return axios
		.get("https://busy-ruby-narwhal-kit.cyclic.app/api/owners/listings")
		.then(({ data }) => {
			return data;
		});
};

export const postOwnerListing = (newListing) => {
	return axios
		.post(
			"https://busy-ruby-narwhal-kit.cyclic.app/api/owners/listings",
			newListing
		)
		.then(({ data }) => {
			return data;
		});
};

export const deleteOwnerListing = (id) => {
	return axios.delete(
		`https://busy-ruby-narwhal-kit.cyclic.app/api/owners/listings/${id}`
	);
};

export const getOneOwnerListing = (id) => {
	return axios
		.get(`https://busy-ruby-narwhal-kit.cyclic.app/api/owners/listings/${id}`)
		.then(({ data }) => {
			return data;
		});
};
