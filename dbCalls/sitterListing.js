import axios from "axios";

export const getSitterListings = () => {
  return axios
    .get("https://busy-ruby-narwhal-kit.cyclic.app/api/sitters/listings")
    .then(({ data }) => {
      return data;
    });
};

export const postSitterListing = () => {};

export const deleteSitterListing = () => {};

export const getOneSitterListing = () => {};
