import axios from "axios"

export const postListingByOwner = (newListing) => {
  
    return axios.post(`https://busy-ruby-narwhal-kit.cyclic.app/api/owners/listings`, newListing).then(({data}) => {
    console.log("successful post", data)
    return data
    })
}

export const loginUser = (user) => {
  
    return axios.post(`https://busy-ruby-narwhal-kit.cyclic.app/api/users/login`, user).then(({data}) => {
        console.log("logged in now:", data)
    return data
    })
}

export const getListingByOwner = () => {

    return axios.get(`https://busy-ruby-narwhal-kit.cyclic.app/api/owners/listings`).then(({data}) => {
        console.log("getting info from backend", data)
        return data
    })

}
