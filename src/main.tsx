import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Rsvp from "./pages/Rsvp.tsx";
import Travel from "./pages/Travel.tsx";
import SaveTheDate from "./pages/SaveTheDate.tsx";

const App = () => {
  const lang = navigator.language.split("-")[0];
  return (
    <div className="main">
    <React.StrictMode>
      <BrowserRouter basename={"/tarexis-wedding/"}>
        <Routes>
          <Route path="/" element={<SaveTheDate lang={lang} />} />
          <Route path="/save-the-date" element={<SaveTheDate lang={lang} />} />
          <Route path="/home" element={<Home lang={lang} />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/Rsvp" element={<Rsvp lang={lang} />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
