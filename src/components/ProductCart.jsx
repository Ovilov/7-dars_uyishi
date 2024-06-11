// components

import { Link } from "react-router-dom";

function ProductCart({ product }) {
  const { id, brand, title, category, price, description, rating, thumbnail } =
    product;
  console.log(product);
  return (
    <Link to={`/product/${id}`} className="card w-96  bg-base-100 shadow-xl">
      <div className="card-body">
        <h1>{title}</h1>
        <p>$ {price}</p>
        <img src={thumbnail} alt="" />
        <p>{description}</p>
        <p>{category}</p>
      </div>
    </Link>
  );
}

export default ProductCart;
