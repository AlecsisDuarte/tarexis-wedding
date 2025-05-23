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
    <React.StrictMode>
      <BrowserRouter basename={"/tarexis-wedding/"}>
        <Routes>
          <Route path="/" element={<SaveTheDate />} />
          <Route path="/save-the-date" element={<SaveTheDate />} />
          <Route path="/home" element={<Home lang={lang} />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/Rsvp" element={<Rsvp />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
