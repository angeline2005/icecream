const mongoose = require("./database");
const Customize = require("./customizeSchema");

const iceCreamCategories = [
  {
    type: "Container",
    icecreams: [
      {
        id: 1,
        price: 5,
        img: "ex_gelato.png",
        title: "Chocolate Gelato",
        availability: "Available",
        selected: false,
      },
      {
        id: 2,
        price: 5,
        img: "ex_gelato.png",
        title: "Chocolate Gelato",
        availability: "Available",
        selected: false,
      },
      {
        id: 3,
        price: 15,
        img: "ex_gelato.png",
        title: "Chocolate Gelato",
        availability: "Available",
        selected: false,
      },
    ],
  },
  {
    type: "IceCream",
    icecreams: [
      {
        id: 4,
        price: 50,
        img: "ex_gelato.png",
        title: "Mango Sorbet",
        availability: "Available",
        selected: false,
      },
      {
        id: 5,
        price: 40,
        img: "ex_gelato.png",
        title: "Chocolate Gelato",
        availability: "Available",
        selected: false,
      },
      {
        id: 6,
        price: 60,
        img: "ex_gelato.png",
        title: "Chocolate Gelato",
        availability: "Available",
        selected: false,
      },
    ],
  },
  {
    type: "Syrup",
    icecreams: [
      {
        id: 7,
        img: "ex_gelato.png",
        title: "Blueberry Yogurt",
        availability: "Available",
        selected: false,
      },
      {
        id: 8,
        img: "ex_gelato.png",
        title: "Chocolate Gelato",
        availability: "Available",
        selected: false,
      },
      {
        id: 9,
        img: "ex_gelato.png",
        title: "Chocolate Gelato",
        availability: "Available",
        selected: false,
      },
    ],
  },
  {
    type: "Toppings",
    icecreams: [
      {
        id: 10,
        img: "ex_gelato.png",
        title: "Chocolate Soft Serve",
        availability: "Available",
        selected: false,
      },
      {
        id: 11,
        img: "ex_gelato.png",
        title: "Chocolate Gelato",
        availability: "Available",
        selected: false,
      },
      {
        id: 12,
        img: "ex_gelato.png",
        title: "Chocolate Gelato",
        availability: "Available",
        selected: false,
      },
    ],
  },
];

const seedDB = async () => {
  try {
    await Customize.deleteMany();
    await Customize.insertMany(iceCreamCategories);
    console.log("success ");
  } catch (error) {
    console.error("error", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
