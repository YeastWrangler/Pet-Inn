import axios from "axios";

export const getUserInfo = (username) => {
  return axios
    .get(`https://busy-ruby-narwhal-kit.cyclic.app/api/users/${username}`)
    .then(({ data }) => {
      return data;
    });
};

async function addUser(userdata) {}

async function deleteUser(id) {}
