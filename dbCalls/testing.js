const { getSitterListings } = require("./sitterListing");

const data = getSitterListings().then((res) => {
  console.log(res);
});
