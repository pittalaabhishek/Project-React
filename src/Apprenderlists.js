import {ProductList} from "./ProductList";

function Apprenderlists() {

  const productsArray = [
    {
    id: 1,
    name: "AK47",
    price: "$3000",
  },
  {
    id: 2,
    name: "Desert-Eagle",
    price: "$800",
  },
  {
    id: 3,
    name: "M416",
    price: "$2000",
  },
  {
    id: 4,
    name: "Bazooka",
    price: "$6000",
  },
  {
    id: 5,
    name: "Groza",
    price: "$2500",
  },
  {
    id: 6,
    name: "UMP9",
    price: "$1500",
  }
];
 return(
  <div>
    <ProductList products={productsArray} />
  </div>
 )
}

export default Apprenderlists;
