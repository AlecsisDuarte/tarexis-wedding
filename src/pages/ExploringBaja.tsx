import React from "react";
import { useLanguage } from "../LanguageContext";
import { useNavigate } from "react-router-dom";

const content = {
  en: {
    title: "Exploring Baja",
    intro:
      "Valle de Guadalupe and the Baja region offer incredible experiences. Here are some recommendations:",
    items: [
      {
        title: "Wineries & Vineyards",
        desc: "Visit world-class wineries such as Decantos, Bruma, and Finca Altozano for tastings and beautiful views.",
      },
      {
        title: "Restaurants",
        desc: "Enjoy local cuisine at restaurants like Fauna, Animalón, and Deckman's en el Mogor.",
      },
      {
        title: "Outdoor Activities",
        desc: "Explore hiking trails, horseback riding, or hot air balloon rides over the valley.",
      },
      {
        title: "Beaches",
        desc: "Take a short drive to Ensenada for beaches and ocean views.",
      },
    ],
  },
  es: {
    title: "Explorando Baja",
    intro:
      "Valle de Guadalupe y la región de Baja ofrecen experiencias increíbles. Aquí algunas recomendaciones:",
    items: [
      {
        title: "Viñedos y Bodegas",
        desc: "Visita viñedos de clase mundial como Decantos, Bruma y Finca Altozano para degustaciones y vistas hermosas.",
      },
      {
        title: "Restaurantes",
        desc: "Disfruta la gastronomía local en restaurantes como Fauna, Animalón y Deckman's en el Mogor.",
      },
      {
        title: "Actividades al aire libre",
        desc: "Explora senderos, paseos a caballo o vuelos en globo sobre el valle.",
      },
      {
        title: "Playas",
        desc: "Haz una corta visita a Ensenada para disfrutar de las playas y vistas al mar.",
      },
    ],
  },
};

const ExploringBaja: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang];
  const navigate = useNavigate();

  return (
    <section>
      <button
        onClick={() => navigate("/travel")}
        style={{
          marginBottom: "2rem",
          background: "#fff",
          border: "1px solid rgb(156 126 96)",
          color: "rgb(156 126 96)",
          borderRadius: "8px",
          padding: "0.5em 1.2em",
          fontWeight: 500,
          fontSize: "1em",
          cursor: "pointer",
        }}
      >
        {lang === "en" ? "← Back to Travel" : "← Volver a Viajar"}
      </button>
      <h2 style={{ color: "#b48e5c", marginBottom: "1em" }}>{c.title}</h2>
      <p
        style={{
          fontSize: "1.1em",
          marginBottom: "2em",
          color: "#fff",
          background: "rgb(156 126 96)",
          borderRadius: "8px",
          padding: "1em",
        }}
      >
        {c.intro}
      </p>
      {c.items.map((item, idx) => (
        <div
          key={idx}
          className="dialog-box"
          style={{
            background: "rgb(156 126 96)",
            borderRadius: "14px",
            boxShadow: "0 2px 12px rgba(156,126,96,0.10)",
            padding: "1.5rem",
            marginBottom: "1.5rem",
            color: "#fff",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              color: "#fff",
              marginBottom: "0.5em",
            }}
          >
            {item.title}
          </div>
          <div style={{ color: "#f3e8d2" }}>{item.desc}</div>
        </div>
      ))}
    </section>
  );
};

export default ExploringBaja;
