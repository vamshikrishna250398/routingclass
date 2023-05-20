// import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const productItems = [
  { id: 8765467, productName: "Apple Iphone", price: 100000, rating: 4.2 },
  {
    id: 23947,
    productName: "Samsung S23 Ultra 5G",
    price: 125000,
    rating: 4.8,
  },
];

const Products = () => {
  // const [productList, setProductList] = useState(productItems);
  return (
    <>
      <h1>Products Route</h1>
      {productItems.map((eachItem) => (
        <ul className="products-card">
          <Link to={`/products/${eachItem.id}`}>
            <li>{eachItem.productName}</li>
            <li>{eachItem.price}</li>
            <li>{eachItem.rating}</li>
          </Link>
        </ul>
      ))}
    </>
  );
};

export default Products;
