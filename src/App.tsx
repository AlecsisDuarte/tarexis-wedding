import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Travel from "./pages/Travel";
import Faq from "./pages/FAQ";
import ExploringBaja from "./pages/ExploringBaja";
import FromSanDiego from "./pages/FromSanDiego";
import FromTijuana from "./pages/FromTijuana";
import ValleDeGuadalupeGuide from "./pages/ValleDeGuadalupeGuide";
import Navbar from "./pages/Navbar";

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.backgroundColor = "var(--dark-brown)";
    } else {
      document.body.style.backgroundColor = "var(--peachy-color)";
    }
  }, [location]);

  return (
    <div style={{ fontFamily: "sans-serif", margin: 0, padding: 0 }}>
      <Navbar />
      {/* Main content below nav */}
      <main
        style={{
          padding: "2rem 1rem",
          maxWidth: 900,
          margin: "auto",
          marginTop: "80px", // Height of the new fixed navbar
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/exploring-baja" element={<ExploringBaja />} />
          <Route path="/from-san-diego" element={<FromSanDiego />} />
          <Route path="/from-tijuana" element={<FromTijuana />} />
          <Route path="/valle-de-guadalupe-guide" element={<ValleDeGuadalupeGuide />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
