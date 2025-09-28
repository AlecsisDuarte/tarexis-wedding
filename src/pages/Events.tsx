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
  try {
    if (event.time === "TBD") {
      return "";
    }

    const parseTime = (timeStr: string) => {
      const match = RegExp(/(\d+)(am|pm)/).exec(timeStr);
      if (!match) return null;

      let hour = parseInt(match[1], 10);
      const ampm = match[2];

      if (ampm === "pm" && hour !== 12) {
        hour += 12;
      }
      if (ampm === "am" && hour === 12) {
        hour = 0;
      }
      return hour;
    };

    const [startTimeStr, endTimeStr] = event.time.split(" - ");
    const startHour = parseTime(startTimeStr);
    const endHour = parseTime(endTimeStr);

    if (startHour === null || endHour === null) {
      return "";
    }

    const startDate = new Date(event.date);
    startDate.setHours(startHour);

    const endDate = new Date(event.date);
    endDate.setHours(endHour);

    if (endDate < startDate) {
      endDate.setDate(endDate.getDate() + 1);
    }

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\..*Z/g, "");
    };

    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title.en
    )}&dates=${formatDate(startDate)}/${formatDate(
      endDate
    )}&details=${encodeURIComponent(
      event.description.en
    )}&location=${encodeURIComponent(event.location)}`;
  } catch (error) {
    console.error("Error generating calendar URL:", error);
    return "";
  }
};

const events = [
  {
    id: "welcome-party",
    date: "September 4, 2026",
    time: "6pm - 10pm",
    location: "Bloodlust Winebar, Valle de Guadalupe",
    title: {
      en: "Welcome Party",
      es: "Fiesta de Bienvenida",
    },
    description: {
      en: "Join us for a welcome party at Bloodlust winebar ($), to help us kick-off the weeding weekend.",
      es: "Acompáñanos a una fiesta de bienvenida en Bloodlust winebar ($), para empezar el fin de semana de la boda.",
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
        {events.map((event) => {
          const calendarUrl = generateGoogleCalendarUrl(event);
          return (
            <div className="event-card" key={event.id}>
              <div className="event-image">
                <img src={event.image} alt={event.title[lang]} />
              </div>
              <div className="event-details">
                <h3>{event.title[lang]}</h3>
                <div className="event-info">
                  <div>{event.date}</div>
                  <div style={{ fontSize: "1em" }}>{event.time}</div>
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

                {calendarUrl && (
                  <a
                    href={calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-link"
                  >
                    Add to Calendar
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Events;