import compact_laptop from "./compact_laptop.png";
import console from "./console.png";
import controller from "./controller.jpg";
import gaming_collection from "./gaming_collection.png";
import gaming_laptop from "./gaming_laptop.png";
import high_end_laptop_grey from "./high_end_laptop_grey.png";
import high_end_laptop_silver from "./high_end_laptop_silver.png";
import two_controllers from "./two_controllers.jpg";

export const assets = {
  compact_laptop,
  console,
  controller,
  gaming_collection,
  gaming_laptop,
  high_end_laptop_grey,
  high_end_laptop_silver,
  two_controllers,
};

export const products = [
  {
    id: 1,
    name: "Compact Laptop",
    price: 499.99,
    image: compact_laptop,
  },
  {
    id: 2,
    name: "High End Laptop (Grey)",
    price: 999.99,
    image: high_end_laptop_grey,
  },
  {
    id: 3,
    name: "High End Laptop (Silver)",
    price: 999.99,
    image: high_end_laptop_silver,
  },
  {
    id: 4,
    name: "Gaming Laptop",
    price: 1999.99,
    image: gaming_laptop,
  },
  {
    id: 5,
    name: "Console",
    price: 599.99,
    image: console,
  },
  {
    id: 6,
    name: "Single Controller",
    price: 49.99,
    image: controller,
  },
  {
    id: 7,
    name: "Double Controller Set",
    price: 99.99,
    image: two_controllers,
  },
  {
    id: 8,
    name: "Gaming Collection",
    price: 199.99,
    image: gaming_collection,
  },
];
