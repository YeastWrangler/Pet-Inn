import axios from "axios";

export const getUserInfo = (username) => {
  return axios
    .get(`https://busy-ruby-narwhal-kit.cyclic.app/api/users/${username}`)
    .then(({ data }) => {
      return data;
    });
};

export const loginUser = (user) => {
  console.log(user);
  return axios
    .post(`https://busy-ruby-narwhal-kit.cyclic.app/api/users/login`, user)
    .then(({ data }) => {
      console.log("logged in now:", data);
      return data;
    });
};

export const deleteUser = (username) => {};

export const addUser = (username) => {};
