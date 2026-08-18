import detailImage from "../assets/reference-crops/product-detail.png";
function ProductDetails() {
  return (
    <section className="detail-page">
      <p className="crumb">Home › Herbal Drinks › Gurjo Herbal Tea</p>
      <div className="detail-layout">
        <div>
          <div className="detail-image">
            <img src={detailImage} alt="Gurjo Herbal Tea" />
          </div>
          <div className="thumbs">
            {[1, 2, 3, 4].map((item) => (
              <img key={item} src={detailImage} alt="Product view" />
            ))}
          </div>
        </div>
        <div className="detail-copy">
          <h1>Gurjo Herbal Tea</h1>
          <strong>Rs. 650</strong>
          <p className="stars">★★★★★ &nbsp; (24 reviews)</p>
          <p>
            A refreshing blend of Gurjo leaves and Himalayan herbs that helps
            relax your mind, improve digestion and boost immunity.
          </p>
          <ul>
            <li>100% Natural Ingredients</li>
            <li>Caffeine-Free</li>
            <li>Handpicked in the Himalayas</li>
            <li>Supports Relaxation & Immunity</li>
          </ul>
          <div className="purchase">
            <button>− &nbsp; 1 &nbsp; +</button>
            <button>🛒 &nbsp; Add to Cart</button>
            <button>♡</button>
          </div>
          <div className="product-tabs">
            <b>Description</b>
            <b>Ingredients</b>
            <b>How to Use</b>
            <b>Benefits</b>
          </div>
          <p>
            Our Gurjo Herbal Tea is made from handpicked Gurjo leaves from the
            pristine hills of Nepal. It is known for its detoxifying and
            rejuvenating properties.
          </p>
          <p>Perfect for daily wellness and a healthy lifestyle.</p>
        </div>
      </div>
    </section>
  );
}
export default ProductDetails;
