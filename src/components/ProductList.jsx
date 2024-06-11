// components
import ProductCart from "./ProductCart";

function ProductList({ data }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {data.products.map((product) => {
        return <ProductCart key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductList;
