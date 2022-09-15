import axios from "axios";

export const getReviews = (username) => {
	return axios
		.get(`https://busy-ruby-narwhal-kit.cyclic.app/api/reviews/${username}`)
		.then(({ data }) => {
			return data;
		});
};

export const postReview = (newReview) => {
	console.log(newReview);
	return axios.post(
		`https://busy-ruby-narwhal-kit.cyclic.app/api/reviews`,
		newReview
	);
};

export const deleteReview = (id) => {
	return axios.delete(
		`https://busy-ruby-narwhal-kit.cyclic.app/api/reviews/${id}`
	);
};
