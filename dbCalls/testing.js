// const { ObjectId } = require("mongodb");

const OwnerListingTestData = [
  {
    _id: new ObjectId("63187e0c13500f33291afd8c"),
    date_added: "2022-12-10",
    username: "pass123",
    pets: ["eagle"],
    title: "Look after my pet eagle, IMMEDIATE START",
    dates: { from: "2022-12-12", to: "2022-12-20" },
    additional_info: "Don't turn your back to her",
    location: "London",
    payment: 100,
    image_urls: [
      "https://live.staticflickr.com/881/40659073954_04c1a74426_b.jpg",
      "https://anchorv3dev.s3.eu-west-2.amazonaws.com/property-images/01510/01510-anchor-hanover-birkenhead-court-exterior-photo-1-v1.jpg",
    ],
  },
  {
    _id: new ObjectId("63187e110eb14ed4600ff943"),
    date_added: "2022-11-10",
    username: "thanos",
    pets: ["cat"],
    title: "Look after my cat, IMMEDIATE START",
    dates: { from: "2022-11-12", to: "2022-11-20" },
    additional_info: "Don't give her food",
    location: "Hull",
    payment: 20,
    image_urls: [
      "https://live.staticflickr.com/3169/2846544061_cb7c04b46f_b.jpg",
    ],
  },
  {
    _id: new ObjectId("63187e15cc5ac8c963a1b6bc"),
    date_added: "2022-09-20",
    username: "john fifa",
    pets: ["dog", "hamster"],
    title: "Look after my babies",
    dates: { from: "2022-09-22", to: "2022-10-10" },
    additional_info: "Don't kill them",
    location: "Funchal",
    payment: 0,
    image_urls: ["https://i.ytimg.com/vi/D2nQ0Z0zQiQ/maxresdefault.jpg"],
  },
  {
    _id: new ObjectId("6319b5455545765f2507815c"),
    date_added: "2022-10-21",
    username: "john fifa",
    pets: ["dog"],
    title: "Walk my dog",
    dates: { from: "2022-12-01", to: "2022-12-10" },
    additional_info: "He loves the park, bring a ball",
    location: "Funchal",
    payment: 0,
    image_urls: ["https://i.ytimg.com/vi/D2nQ0Z0zQiQ/maxresdefault.jpg"],
  },
  {
    _id: new ObjectId("6319b8bb5545765f2507815f"),
    date_added: "2022-11-01",
    username: "rick",
    pets: ["cat"],
    title: "Mind my cat please",
    dates: { from: "2022-12-10", to: "2022-12-20" },
    additional_info: "She's a little shy",
    location: "Liverpool",
    payment: 0,
    image_urls: [
      "https://live.staticflickr.com/65535/48757532236_08f5189dfd_b.jpg",
    ],
  },
];

console.log(OwnerListingTestData[0]._id.toString());
