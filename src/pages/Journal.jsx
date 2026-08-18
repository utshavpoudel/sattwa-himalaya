import ArticleCard from "../components/ArticleCard";
import articles from "../data/articles";
function Journal() {
  return (
    <section className="journal-page">
      <div className="journal-intro">
        <h1>Wellness Journal</h1>
        <p>Tips, stories and wisdom for a natural and balanced life.</p>
      </div>
      <div className="journal-grid">
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
      <a className="view-all" href="#/journal">
        View All Articles →
      </a>
    </section>
  );
}
export default Journal;
