import axios from "axios";

export const getOwnerListings = () => {
  return axios
    .get("https://busy-ruby-narwhal-kit.cyclic.app/api/owners/listings")
    .then(({ data }) => {
      return data;
    });
};

export const postOwnerListing = () => {};

export const deleteOwnerListing = () => {};

export const getOneOwnerListing = (id) => {
  return axios
    .get(`https://busy-ruby-narwhal-kit.cyclic.app/api/owners/listings/${id}`)
    .then(({ data }) => {
      return data;
    });
};
