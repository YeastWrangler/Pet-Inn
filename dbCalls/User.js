import axios from "axios";

export const getUserInfo = (username) => {
	return axios
		.get(`https://busy-ruby-narwhal-kit.cyclic.app/api/contact/${username}`)
		.then(({ data }) => {
			return data;
		});
};

export const loginUser = (user) => {
	return axios
		.post(`https://busy-ruby-narwhal-kit.cyclic.app/api/users/login`, user)
		.then(({ data }) => {
			return data;
		});
};

export const registerUser = (registerData) => {
	return axios
		.post(
			`https://busy-ruby-narwhal-kit.cyclic.app/api/users/signup`,
			registerData
		)
		.then((res) => {
			// console.log(Object.keys(res));
			return res.status;
		});
};

export const deleteUser = (username) => {};

export const addUser = (username) => {};

export const addToWatchList = (username, newListing) => {
	return axios
		.patch(
			`https://busy-ruby-narwhal-kit.cyclic.app/api/users/${username}/watchlist`,
			newListing
		)
		.then(({ data }) => {
			return data.user.watchlist;
		});
};

export const deleteFromWatchList = (username, _id) => {
	return axios.delete(
		`https://busy-ruby-narwhal-kit.cyclic.app/api/users/${username}/watchlist?_id=${_id}`
	);
};

export const getWatchList = (username) => {
	return axios
		.get(
			`https://busy-ruby-narwhal-kit.cyclic.app/api/users/${username}/watchlist`
		)
		.then(({ data }) => {
			return data.watchlist;
		});
};
