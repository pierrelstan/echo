const dummyProduct = {
  _id: "632389dbf8dabbb6d1ae37fd",
  title: "Cyberpunk 2077",
  category: "Xbox",
  image: "https://imgur.com/3CF1UhY.png",
  price: "36.49",
  userId: "",
};

const dummyProductCategory = {
  loading: "succeeded",
  product: {
    products: [
      {
        _id: "632389dbf8dabbb6d1ae37fd",
        title: "Cyberpunk 2077",
        category: "Xbox",
        image: "https://imgur.com/3CF1UhY.png",
        price: "36.49",
      },
      {
        _id: "63238a92f8dabbb6d1ae37ff",
        title: "Minecraft",
        category: "Xbox",
        image: "https://imgur.com/LXnUnd2.png",
        price: "49.99",
      },
      {
        _id: "63238abef8dabbb6d1ae3800",
        title: "Grand Theft Auto 5",
        category: "Xbox",
        image: "https://imgur.com/BqNWnDB.png",
        price: "21.99",
      },
      {
        _id: "63238adcf8dabbb6d1ae3801",
        title: "PUBG",
        category: "Xbox",
        image: "https://imgur.com/Ondg3Jn.png",
        price: "5.09",
      },
      {
        _id: "63238afcf8dabbb6d1ae3802",
        title: "FIFA 21",
        category: "Xbox",
        image: "https://imgur.com/AzT9YMP.png",
        price: "17.49",
      },
      {
        _id: "63238b1cf8dabbb6d1ae3803",
        title: "Battlefield 5",
        category: "Xbox",
        image: "https://imgur.com/X3MQNVs.png",
        price: "29.35",
      },
      {
        _id: "63238b39f8dabbb6d1ae3804",
        title: "Watch Dogs 2",
        category: "Xbox",
        image: "https://imgur.com/v3lqCEb.png",
        price: "18.99",
      },
    ],
  },
};

const dummyDataUser = {
  user: {
    isAuth: true,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbW91c2VyQHRlc3QuY29tIiwiaWF0IjoxNjY0NDc3NTk2LCJleHAiOjE2NjQ1MTM1OTZ9.Dt5PbZlaQO-ogyK7wqiUV8fpxc_QItjZrSRLfyorskc",
    user: {
      _id: "631ca88585a9572ba6119c57",
      email: "demouser@test.com",
      createdAt: "2022-09-10T15:08:53.850Z",
      password: "$2a$10$Cr7/9pAAmLyzRGJZsVYXJurL9H4/tZkdnJyMcjaDtgLvueBafFwGG",
      updatedAt: "2022-09-10T15:08:53.850Z",
    },
  },
};
export { dummyProductCategory, dummyDataUser, dummyProduct };
