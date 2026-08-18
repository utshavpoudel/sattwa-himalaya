const links = [
  ["home", "Home"],
  ["shop", "Shop"],
  ["story", "Our Story"],
  ["journal", "Wellness Journal"],
  ["contact", "Contact"],
];

function Navbar({ currentPage }) {
  return (
    <>
      <div className="announcement">
        <span>
          ❧ &nbsp; Rooted in Nepal. Crafted with Care. Delivered to Your
          Doorstep.
        </span>
        <span>
          Made in Nepal &nbsp; | &nbsp; 100% Natural &nbsp; | &nbsp; Chemical
          Free
        </span>
      </div>
      <header className="site-header">
        <a className="brand" href="#/home">
          <strong>Satwa</strong>
          <small>Himalayan</small>
          <i>❧</i>
        </a>
        <nav>
          {links.map(([id, label]) => (
            <a
              key={id}
              className={currentPage === id ? "active" : ""}
              href={`#/${id}`}
            >
              {label}
              {id === "shop" && "⌄"}
            </a>
          ))}
        </nav>
        <div className="nav-icons">
          <span>⌕</span>
          <span>♙</span>
          <span>
            🛒<b>0</b>
          </span>
        </div>
      </header>
    </>
  );
}
export default Navbar;
