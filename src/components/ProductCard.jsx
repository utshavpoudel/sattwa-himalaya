function ProductCard({ product }) {
  return (
    <article className="product-card">
      <a className="product-image" href="#/product">
        <img src={product.image} alt={product.name} />
        <button aria-label="Save product">♡</button>
      </a>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.note}</p>
        <strong>{product.price}</strong>
        <a href="#/product" className="cart-button">
          🛒 &nbsp; Add to Cart
        </a>
      </div>
    </article>
  );
}
export default ProductCard;
