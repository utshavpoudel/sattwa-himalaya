const benefits = [
  ["♧", "100% Natural", "No Preservatives"],
  ["♙", "Made in Nepal", "Supporting Local Farmers"],
  ["❧", "Handcrafted", "With Love & Care"],
  ["▣", "Fast Delivery", "To Your Doorstep"],
  ["♧", "Sustainable", "Eco-friendly Packaging"],
];
function Benefits() {
  return (
    <section className="benefits">
      {benefits.map(([icon, title, text]) => (
        <article key={title}>
          <span>{icon}</span>
          <div>
            <b>{title}</b>
            <small>{text}</small>
          </div>
        </article>
      ))}
    </section>
  );
}
export default Benefits;
