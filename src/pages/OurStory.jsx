import storyImage from "../assets/reference-crops/story-reference.png";
import Benefits from "../components/Benefits";
function OurStory() {
  return (
    <>
      <section className="story-page">
        <div className="story-copy">
          <h1>Our Story</h1>
          <h2>
            Rooted in Nepal. Inspired by Nature.
            <br />
            Driven by Purpose.
          </h2>
          <p>
            Satwa Himalayan was born from a deep love for our land, our people
            and our traditions. We believe that true wellness comes from nature
            and the age-old wisdom passed down through generations.
          </p>
          <p>
            Our mission is to bring authentic, traditional and chemical-free
            foods, drinks and incense products to every doorstep while
            supporting local farmers and artisans of Nepal.
          </p>
        </div>
        <img src={storyImage} alt="Satwa's Himalayan roots" />
      </section>
      <Benefits />
      <section className="story-signoff">
        <h2>
          Every Product Has a Story.
          <br />
          Every Story Has a Soul.
        </h2>
        <p>Thank you for being a part of our journey.</p>
      </section>
    </>
  );
}
export default OurStory;
