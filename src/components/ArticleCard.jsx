function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <div className={`article-art ${article.tone}`}>❧</div>
      <h3>{article.title}</h3>
      <p>
        Discover how this traditional ritual supports a healthier, calmer life.
      </p>
      <a href="#/journal">Read More →</a>
    </article>
  );
}
export default ArticleCard;
