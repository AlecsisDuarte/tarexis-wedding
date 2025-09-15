import React from "react";
import { useLanguage } from "../LanguageContext";

const events = {
  en: [
    {
      title: "Wedding Ceremony & Reception",
      date: "September 5, 2026",
      location: "Monte Cova, Valle de Guadalupe",
      description:
        "Join us for the wedding celebration at Monte Cova, surrounded by the beautiful vineyards of Valle de Guadalupe.",
    },
    {
      title: "Farewell Pool Party",
      date: "September 6, 2026",
      location: "Villa de Guadalupe",
      description:
        "Relax and enjoy a farewell pool party at Villa de Guadalupe before heading home.",
    },
  ],
  es: [
    {
      title: "Ceremonia y Recepción de la Boda",
      date: "5 de Septiembre, 2026",
      location: "Monte Cova, Valle de Guadalupe",
      description:
        "Acompáñanos a celebrar la boda en Monte Cova, rodeados de los hermosos viñedos de Valle de Guadalupe.",
    },
    {
      title: "Fiesta de despedida en la alberca",
      date: "6 de Septiembre, 2026",
      location: "Villa de Guadalupe",
      description:
        "Relájate y disfruta de una fiesta de despedida en la alberca de Villa de Guadalupe antes de regresar a casa.",
    },
  ],
};

const Events: React.FC = () => {
  const { t, lang } = useLanguage();
  return (
    <section>
      <h2>{t("events")}</h2>
      {events[lang].map((event, idx) => (
        <div
          className="dialog-box"
          key={idx}
          style={{
            background: "rgb(156 126 96)",
            borderRadius: "14px",
            boxShadow: "0 2px 12px rgba(156,126,96,0.10)",
            padding: "1.5rem",
            marginBottom: "2rem",
            color: "#fff",
          }}
        >
          <h3 style={{ color: "#fff", marginBottom: "0.5em" }}>
            {event.title}
          </h3>
          <div style={{ fontWeight: 500, marginBottom: "0.3em" }}>
            {event.date}
          </div>
          <div style={{ color: "#f3e8d2", marginBottom: "0.7em" }}>
            {event.location}
          </div>
          <p style={{ color: "#f3e8d2" }}>{event.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Events;
