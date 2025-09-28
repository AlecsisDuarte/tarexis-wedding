import React from "react";
import { useLanguage } from "../LanguageContext";
import "./Events.css";
import bloodlust from "../assets/bloodlust.webp";
import villaDelValle from "../assets/la_villa_del_valle.jpg";
import monteCova from "../assets/monte_cova.jpg";

const generateGoogleMapsUrl = (address: string) => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
};

const generateGoogleCalendarUrl = (event: any) => {
  const [startTimeStr, endTimeStr] = event.time.split(' - ');
  const startTime = new Date(`${event.date} ${startTimeStr}`);
  const endTime = new Date(`${event.date} ${endTimeStr}`);

  const formatDate = (date: Date) => {
    return date.toISOString().replace(/-|:|\..*Z/g, "");
  };

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.title.en
  )}&dates=${formatDate(startTime)}/${formatDate(
    endTime
  )}&details=${encodeURIComponent(
    event.description.en
  )}&location=${encodeURIComponent(event.location)}`;
};

const events = [
  {
    id: "welcome-dinner",
    date: "September 4, 2026",
    time: "6pm - 10pm",
    location: "Bloodlust Winebar, Valle de Guadalupe",
    title: {
      en: "Welcome Dinner",
      es: "Cena de Bienvenida",
    },
    description: {
      en: "Join us for a welcome dinner with drinks to kick off the wedding weekend.",
      es: "Acompáñanos a una cena de bienvenida con bebidas para empezar el fin de semana de la boda.",
    },
    image: bloodlust,
  },
  {
    id: "wedding",
    date: "September 5, 2026",
    time: "4pm - 12am",
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
    time: "12pm - 4pm",
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
                <div>
                  <a
                    href={generateGoogleMapsUrl(event.location)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-link"
                  >
                    {event.location}
                  </a>
                </div>
              </div>
              <p className="event-description">{event.description[lang]}</p>

              <a
                href={generateGoogleCalendarUrl(event)}
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
              >
                Add to Calendar
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;