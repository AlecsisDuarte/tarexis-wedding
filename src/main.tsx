import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { LanguageProvider } from "./LanguageContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </LanguageProvider>
  </React.StrictMode>,
);
