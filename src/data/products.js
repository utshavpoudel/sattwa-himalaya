import gurjo from "../assets/reference-crops/product-gurjo.png";
import energy from "../assets/reference-crops/product-energy.png";
import incense from "../assets/reference-crops/product-incense.png";
import ladoo from "../assets/reference-crops/product-ladoo.png";
import tea from "../assets/reference-crops/product-tea.png";
import herbal from "../assets/reference-crops/product-herbal.png";

const products = [
  {
    id: "gurjo-herbal-tea",
    name: "Gurjo Herbal Tea",
    category: "Herbal Drinks",
    price: "Rs. 650",
    note: "Immunity · Refresh · Rejuvenate",
    image: gurjo,
  },
  {
    id: "himalayan-energy-mix",
    name: "Himalayan Energy Mix",
    category: "Traditional Foods",
    price: "Rs. 550",
    note: "Natural · Nutritious · Wholesome",
    image: energy,
  },
  {
    id: "natural-incense",
    name: "Natural Incense (Dhoop Sticks)",
    category: "Incense & Dhoop",
    price: "Rs. 350",
    note: "Pure · Handcrafted · Soothing",
    image: incense,
  },
  {
    id: "protein-ladoo",
    name: "Himalayan Protein Ladoo",
    category: "Wellness Essentials",
    price: "Rs. 600",
    note: "Traditional · Healthy · Delicious",
    image: ladoo,
  },
  {
    id: "herbal-green-tea",
    name: "Herbal Green Tea",
    category: "Herbal Drinks",
    price: "Rs. 450",
    note: "Calming herbal blend",
    image: tea,
  },
  {
    id: "panchakarma",
    name: "Panchakarma Herbal Powder",
    category: "Wellness Essentials",
    price: "Rs. 650",
    note: "Traditional everyday care",
    image: herbal,
  },
];

export default products;
