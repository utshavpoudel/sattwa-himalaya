import Benefits from "../components/Benefits";
import CategoryCard from "../components/CategoryCard";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import categories from "../data/categories";
import products from "../data/products";

function Home() {
  return (
    <>
      <Hero />
      <section className="category-row">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
        <a href="#/shop" className="category-card">
          <span>♢</span>
          <b>Wellness Essentials</b>
        </a>
        <a href="#/shop" className="category-card">
          <span>🎁</span>
          <b>Gift Sets</b>
        </a>
      </section>
      <section className="home-products">
        <div className="section-title">
          <div>
            <h2>Best Sellers</h2>
            <p>Handpicked wellness essentials loved by our customers.</p>
          </div>
          <a href="#/shop">View All &nbsp; →</a>
        </div>
        <ProductGrid products={products.slice(0, 4)} />
      </section>
      <Benefits />
    </>
  );
}
export default Home;
