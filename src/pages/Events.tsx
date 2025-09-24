import React from "react";
import { useLanguage } from "../LanguageContext";
import "./Events.css";
import cuatroCuatros from "../assets/cuatro_cuatros.jpg";
import villaDelValle from "../assets/la_villa_del_valle.jpg";
import monteCova from "../assets/monte_cova.jpg";

const events = [
  {
    id: "welcome-dinner",
    date: "September 4, 2026",
    time: "4:00 PM",
    location: "Cuatro Cuatros, Valle de Guadalupe",
    title: {
      en: "Welcome Dinner",
      es: "Cena de Bienvenida",
    },
    description: {
      en: "Join us for a welcome dinner with drinks to kick off the wedding weekend.",
      es: "Acompáñanos a una cena de bienvenida con bebidas para empezar el fin de semana de la boda.",
    },
    image: cuatroCuatros,
  },
  {
    id: "wedding",
    date: "September 5, 2026",
    time: "TBD",
    location: "Monte Cova, Ensenada, Mexico",
    title: {
      en: "Wedding Ceremony & Reception",
      es: "Ceremonia y Recepción de Boda",
    },
    description: {
      en: "The main event! We can't wait to celebrate our special day with you.",
      es: "¡El evento principal! No podemos esperar para celebrar nuestro día especial contigo.",
    },
    image: monteCova,
  },
  {
    id: "pool-party",
    date: "September 6, 2026",
    time: "TBD",
    location: "La Villa del Valle, Ensenada, Mexico",
    title: {
      en: "Farewell Pool Party Brunch",
      es: "Brunch de Despedida en la Alberca",
    },
    description: {
      en: "A relaxing pool party to say our goodbyes.",
      es: "Una relajante fiesta en la alberca para despedirnos.",
    },
    image: villaDelValle,
  },
];

const Events: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="events-section">
      <h2 className="events-title">{t("events")}</h2>
      <div>
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="event-image">
              <img src={event.image} alt={event.title[lang]} />
            </div>
            <div className="event-details">
              <h3>{event.title[lang]}</h3>
              <div className="event-info">
                <div>{event.date}</div>
                <div>{event.time}</div>
                <div>{event.location}</div>
              </div>
              <p className="event-description">{event.description[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;