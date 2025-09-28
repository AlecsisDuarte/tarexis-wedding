import React from "react";
import { useLanguage } from "../LanguageContext";
import "./Events.css";

const generateGoogleMapsUrl = (address: string) => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
};

const generateGoogleCalendarUrl = (event: any, lang: string) => {
  try {
    const startDate = new Date(event.start);
    const endDate = new Date(event.start);
    endDate.setHours(startDate.getHours() + event.durationInHours);

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\..*Z/g, "");
    };

    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title[lang]
    )}&dates=${formatDate(startDate)}/${formatDate(
      endDate
    )}&details=${encodeURIComponent(
      event.description[lang]
    )}&location=${encodeURIComponent(event.location)}`;
  } catch (error) {
    console.error("Error generating calendar URL:", error);
    return "";
  }
};

const events = [
  {
    id: "welcome-party",
    when: {
      en: "Friday, September 4th at 6:00 pm",
      es: "Viernes, 4 de Septiembre a las 6 pm",
    },
    start: "2026-09-04T18:00:00Z",
    durationInHours: 4,
    venue: "Bloodlust Winebar",
    location: "Bloodlust Winebar, Valle de Guadalupe",
    title: {
      en: "Welcome Party",
      es: "Fiesta de Bienvenida",
    },
    description: {
      en: "Join us for a welcome party at Bloodlust winebar ($), to help us kick-off the weeding weekend.",
      es: "Acompáñanos a una fiesta de bienvenida en Bloodlust winebar ($), para empezar el fin de semana de la boda.",
    },
  },
  {
    id: "wedding",
    when: {
      en: "Saturday, September 5th at 4:00 pm",
      es: "Sabado, 5 de Septiembre a las 4 pm",
    },
    start: "2026-09-05T16:00:00Z",
    durationInHours: 8,
    venue: "Monte Cova",
    location: "Monte Cova, Ensenada, Mexico",
    title: {
      en: "Ceremony & Reception",
      es: "Ceremonia & Recepción",
    },
    description: {
      en: "The main event! We can't wait to celebrate our special day with you.",
      es: "¡El evento principal! No podemos esperar para celebrar nuestro día especial contigo.",
    },
  },
  {
    id: "pool-party",
    when: {
      en: "Sunday, September 6th at 12:00 pm",
      es: "Domingo, 6 de Septiembre a las 12 pm",
    },
    start: "2026-09-06T12:00:00Z",
    durationInHours: 4,
    venue: "La Villa del Valle",
    location: "La Villa del Valle, Ensenada, Mexico",
    title: {
      en: "Pelo del perro pool party",
      es: "Pelo del perro pool party",
    },
    description: {
      en: "A relaxing pool party to say our goodbyes.",
      es: "Una relajante fiesta en la alberca para despedirnos.",
    },
  },
];

const Events: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="events-section">
      <h2 className="pages-titles">{t("events")}</h2>
      <div className="timeline">
        {events.map((event, index) => {
          const calendarUrl = generateGoogleCalendarUrl(event, lang);
          const alignment = index % 2 === 0 ? "left" : "right";
          return (
            <div className={`timeline-item ${alignment}`} key={event.id}>
              <div className="timeline-content">
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline-date-time"
                >
                  {event.when[lang]}
                </a>
                <h3 className="timeline-title">{event.title[lang]}</h3>
                <div className="timeline-venue">
                  at{" "}
                  <a
                    href={generateGoogleMapsUrl(event.location)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.venue}
                  </a>
                </div>
                <p className="timeline-description">
                  {event.description[lang]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Events;