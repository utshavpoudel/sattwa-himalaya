const icon = {
  "Nourishing foods": "◒",
  "Herbal drinks": "♨",
  "Sacred incense": "♨",
};
function CategoryCard({ category }) {
  return (
    <a href="#/shop" className="category-card">
      <span>{icon[category.name] || "✦"}</span>
      <b>
        {category.name
          .replace("Nourishing foods", "Traditional Foods")
          .replace("Herbal drinks", "Herbal Drinks")
          .replace("Sacred incense", "Incense & Dhoop")}
      </b>
    </a>
  );
}
export default CategoryCard;
