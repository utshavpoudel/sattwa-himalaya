import heroImage from "../assets/reference-crops/hero-reference.png";
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">❧ &nbsp; Rooted in tradition</p>
        <h1>
          Purely Natural.
          <br />
          Purely Nepali.
          <br />
          Purely You.
        </h1>
        <p>
          Bringing you the goodness of Nepal's traditional foods, drinks and
          incense — crafted with love and delivered to your doorstep.
        </p>
        <div>
          <a className="primary-button" href="#/shop">
            Shop Now &nbsp; ❧
          </a>
          <a className="quiet-link" href="#/story">
            Explore Our Story &nbsp; →
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Traditional Himalayan wellness products" />
        <span>
          ❧<br />
          <b>
            Inspired by
            <br />
            Nature. Backed by
            <br />
            Tradition. Made for
            <br />
            Wellbeing.
          </b>
        </span>
      </div>
    </section>
  );
}
export default Hero;
