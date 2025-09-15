import React from "react";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";

const hotels = [
  {
    name: {
      en: "Los Amantes",
      es: "Los Amantes",
    },
    description: {
      en: "A boutique hotel in Valle de Guadalupe. They welcome you with a little surprise.",
      es: "Un hotel boutique en Valle de Guadalupe. Te reciben con una pequeña sorpresa.",
    },
  },
  // Add more hotels here if needed
];

const transport = {
  en: {
    title: "Transportation",
    description: (
      <>
        If you need taxi-like transportation, <b>Lomas Travel</b> is a
        recommended agent. They can arrange transportation from either San Diego
        or Tijuana. Contact them via their Business Whatsapp:{" "}
        <a
          href="https://wa.me/526461327874"
          target="_blank"
          rel="noopener noreferrer"
        >
          +52 1 646 132 7874
        </a>
        .
      </>
    ),
  },
  es: {
    title: "Transporte",
    description: (
      <>
        Si necesitas transporte tipo taxi, <b>Lomas Travel</b> es un agente
        recomendado. Ellos pueden organizar transporte desde San Diego o
        Tijuana. Contáctalos por Whatsapp empresarial:{" "}
        <a
          href="https://wa.me/526461327874"
          target="_blank"
          rel="noopener noreferrer"
        >
          +52 1 646 132 7874
        </a>
        .
      </>
    ),
  },
};

const recommendations = {
  en: {
    title: "Things to do",
    description: (
      <>
        Discover more about the region, wineries, and activities:{" "}
        <Link
          to="/exploring-baja"
          style={{ color: "#b48e5c", textDecoration: "underline" }}
        >
          Exploring Baja
        </Link>
      </>
    ),
  },
  es: {
    title: "Recomendaciones",
    description: (
      <>
        Descubre más sobre la región, viñedos y actividades:{" "}
        <Link
          to="/exploring-baja"
          style={{ color: "#b48e5c", textDecoration: "underline" }}
        >
          Explorando Baja
        </Link>
      </>
    ),
  },
};

const Travel: React.FC = () => {
  const { t, lang } = useLanguage();
  return (
    <section>
      <h2>{t("travel")}</h2>

      {/* Hotels Section */}
      <div
        className="dialog-box"
        style={{
          background: "rgb(156 126 96)",
          borderRadius: "14px",
          boxShadow: "0 2px 12px rgba(156,126,96,0.10)",
          padding: "1.5rem",
          marginBottom: "2rem",
          color: "#fff",
        }}
      >
        <h3 style={{ color: "#fff", marginBottom: "0.7em" }}>
          {lang === "en" ? "Recommended Hotels" : "Hoteles recomendados"}
        </h3>
        {hotels.map((hotel, idx) => (
          <div key={idx} style={{ marginBottom: "1.2em" }}>
            <div style={{ fontWeight: 600 }}>{hotel.name[lang]}</div>
            <div style={{ color: "#f3e8d2" }}>{hotel.description[lang]}</div>
          </div>
        ))}
      </div>

      {/* Transportation Section */}
      <div
        className="dialog-box"
        style={{
          background: "rgb(156 126 96)",
          borderRadius: "14px",
          boxShadow: "0 2px 12px rgba(156,126,96,0.10)",
          padding: "1.5rem",
          marginBottom: "2rem",
          color: "#fff",
        }}
      >
        <h3 style={{ color: "#fff", marginBottom: "0.7em" }}>
          {transport[lang].title}
        </h3>
        <div style={{ color: "#f3e8d2" }}>{transport[lang].description}</div>
      </div>

      {/* Recommendations Section */}
      <div
        className="dialog-box"
        style={{
          background: "rgb(156 126 96)",
          borderRadius: "14px",
          boxShadow: "0 2px 12px rgba(156,126,96,0.10)",
          padding: "1.5rem",
          marginBottom: "2rem",
          color: "#fff",
        }}
      >
        <h3 style={{ color: "#fff", marginBottom: "0.7em" }}>
          {recommendations[lang].title}
        </h3>
        <div style={{ color: "#f3e8d2" }}>
          {recommendations[lang].description}
        </div>
      </div>
    </section>
  );
};

export default Travel;
