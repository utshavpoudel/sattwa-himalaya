import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import OurStory from "./pages/OurStory";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import "./App.css";

const pages = {
  home: Home,
  shop: Shop,
  product: ProductDetails,
  story: OurStory,
  journal: Journal,
  contact: Contact,
};

function currentPage() {
  const page = window.location.hash.replace("#/", "") || "home";
  return pages[page] ? page : "home";
}

function App() {
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    const syncPage = () => setPage(currentPage());
    window.addEventListener("hashchange", syncPage);
    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  const Page = pages[page];

  return (
    <div className="site-shell">
      <Navbar currentPage={page} />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  );
}

export default App;
