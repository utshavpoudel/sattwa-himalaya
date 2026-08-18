import ProductGrid from "../components/ProductGrid";
import products from "../data/products";
function Shop() {
  return (
    <section className="shop-page">
      <div className="shop-intro">
        <h1>Shop</h1>
        <p>
          Explore our range of authentic, natural and traditional products from
          the heart of Nepal.
        </p>
      </div>
      <p className="product-count">Showing 1–12 of 46 products</p>
      <div className="shop-layout">
        <aside className="filters">
          <div>
            <b>Categories</b>
            <span>×</span>
            <a className="chosen">All Products</a>
            <a>Traditional Foods</a>
            <a>Herbal Drinks</a>
            <a>Incense & Dhoop</a>
            <a>Wellness Essentials</a>
            <a>Gift Sets</a>
          </div>
          <div>
            <b>Price Range</b>
            <span>⌄</span>
            <input type="range" defaultValue="65" />
            <p>Rs. 0 - Rs. 2000</p>
            <button>Filter</button>
          </div>
          <div>
            <b>Sort By</b>
            <span>⌄</span>
            <select defaultValue="Popularity">
              <option>Popularity</option>
            </select>
          </div>
        </aside>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
export default Shop;
