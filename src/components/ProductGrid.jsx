import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductGrid;
