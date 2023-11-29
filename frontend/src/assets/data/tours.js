import tourImg01 from "../images/tour-newimg01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-newimg03.jpg";
import tourImg04 from "../images/tour-newimg04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";

import tourImg08 from "../images/tour-img08.jpg";
import tourImg09 from "../images/tour-newimg08.jpg";

const tours = [
  {
    id: "01",
    title: "Tirta Gangga",
    city: "Bali",
    distance: 300,
    address: "Somewhere",
    price: 80,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "Recedivies",
        rating: 4.6,
      },
    ],
    
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Pantai Kuta",
    city: "Bali",
    distance: 400,
    address: "Somewhere",
    price: 75,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Uluwatu Temple",
    city: "Bali",
    distance: 500,
    address: "Somewhere",
    price: 85,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Pura Besakih",
    city: "Bali",
    distance: 500,
    address: "Somewhere",
    price: 20,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Penida",
    city: "Bali",
    distance: 500,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Pantai Jimbaran",
    city: "Bali",
    distance: 500,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Finns Beach Club",
    city: "Bali",
    distance: 500,
    address: "Jl Pantai Berawa, Canggu",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [

    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
  {
    id: "08",
    title: "Pantai Pandawa",
    city: "Bali",
    distance: 500,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [

    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: false,
  },
];

export default tours;
