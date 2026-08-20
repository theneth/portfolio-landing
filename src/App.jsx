import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import Credentials from "./pages/Credentials";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="portfolio-shell">
        <header className="site-header">
          <Link className="brand" to="/" aria-label="Security portfolio home">
            <span className="brand-rule" aria-hidden="true" />
            <span>Security</span>
          </Link>

          <nav aria-label="Primary navigation">
            <Link to="/">About</Link>
            <Link to="/career">Career</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/credentials">Credentials</Link>
            <a href="mailto:stheneth@gmail.com">Contact</a>
          </nav>

          <span className="header-rule" aria-hidden="true" />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/credentials" element={<Credentials />} />
        </Routes>

        <footer className="site-footer">
          <div className="footer-bar">
            <span>&copy; {new Date().getFullYear()} Theneth Sanjuka Ariyarathne</span>
            <span className="footer-divider" aria-hidden="true" />
            <span>Cybersecurity Specialist</span>
          </div>
        </footer>
      </main>
    </BrowserRouter>
  );
}

export default App;
