import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";

export  const plans = [
  { 
    id: 1,
    name: "Arcade",
    title:"change",
    price: {
            monthly: "$9/mo",
            yearly: "$99/yr"
          }, 
    image: Arcade 
  },
  { 
    id: 2,
    name: "Advanced",
    price: {
            monthly: "$12/mo",
            yearly: "$120/yr"
  }, 
    image: Advanced },
  { 
    id: 3,
    name: "Pro", 
    price: {
            monthly: "$15/mo",
            yearly: "$150/yr"
  
  }, 
    image: Pro 
  },
];

export const addons = [
  {id: 1, title: "Online Service", description: "Access our online arcade service.", price: {
    monthly: "$1/mo",
    yearly: "$10/yr"
  } },
  {id: 2, title: "Larger Storage", description: "Store more games and files.", price:{
    monthly: "$2/mo",
    yearly: "$20/yr"
  } },
  {id: 3, title: "Customizable Profile", description: "Make your profile your own.", price: {
    monthly: "$3/mo",
    yearly: "$30/yr"
  } },
];