import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const { t, lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === "en" ? "es" : "en");
    setMenuOpen(false); // Close menu on language change
  };

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: "/", text: t("home") },
    { href: "/events", text: t("events") },
    { href: "/travel", text: t("travel") },
    { href: "/faq", text: t("faq") },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          T & A
        </Link>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {/* This creates the burger/X icon with CSS */}
          <div className={menuOpen ? "bar1 open" : "bar1"}></div>
          <div className={menuOpen ? "bar2 open" : "bar2"}></div>
          <div className={menuOpen ? "bar3 open" : "bar3"}></div>
        </div>
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          {navLinks.map((link) => (
            <li className="nav-item" key={link.href}>
              <Link to={link.href} className="nav-links" onClick={closeMenu}>
                {link.text}
              </Link>
            </li>
          ))}
          <li className="nav-item-mobile">
            <button onClick={toggleLanguage} className="lang-toggle-btn">
              {lang === "en" ? "Español" : "English"}
            </button>
          </li>
        </ul>
        {/* Show language toggle on desktop */}
        <div className="lang-toggle-desktop">
          <button onClick={toggleLanguage} className="lang-toggle-btn">
            {lang === "en" ? "Español" : "English"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
