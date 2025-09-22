import React from "react";
import { useLanguage } from "../LanguageContext";

const faqs = [
  {
    id: "cash",
    q: {
      en: "Do I need cash?",
      es: "¿Necesito llevar efectivo?",
    },
    a: {
      en: "Most places in Mexico accept cards, but it's a good idea to have cash for tolls, as some don't accept cards (they do accept dollars).",
      es: "La mayoría de los lugares en México aceptan tarjeta, pero es buena idea tener efectivo para las casetas, ya que algunas no aceptan tarjeta (sí aceptan dólares).",
    },
  },
  {
    id: "children",
    q: {
      en: "Are children allowed?",
      es: "¿Se permiten niños?",
    },
    a: {
      en: "Sorry, but no children allowed.",
      es: "Lo sentimos, pero no se permiten niños.",
    },
  },
  {
    id: "dress-code",
    q: {
      en: "What's the dress code?",
      es: "¿Cuál es el código de vestimenta?",
    },
    a: {
      en: "Formal.",
      es: "Formal.",
    },
  },
  {
    id: "plus-ones",
    q: {
      en: "Are plus ones allowed?",
      es: "¿Se permiten acompañantes?",
    },
    a: {
      en: "Your invitation will specify who is invited. If you have questions, please reach out to us.",
      es: "Tu invitación especificará quién está invitado. Si tienes dudas, contáctanos.",
    },
  },
  {
    id: "get-around",
    q: {
      en: "How do I get around?",
      es: "¿Cómo me muevo?",
    },
    a: {
      en: "Valle de Guadalupe is rural, so renting a car is recommended for exploring. Ubers are available but can be unreliable, especially at night. You can also hire a private driver. Consider sharing rides with other guests.",
      es: "Valle de Guadalupe es rural, por lo que se recomienda rentar un auto para explorar. Hay Ubers disponibles, pero pueden ser poco fiables, especialmente de noche. También puedes contratar un conductor privado. Considera compartir viajes con otros invitados.",
    },
  },
    {
    id: "cross-to-mexico",
    q: {
      en: "How do I cross to Mexico?",
      es: "¿Cómo cruzo a México?",
    },
    a: {
      en: "You can cross the San Diego/Tijuana border by car (San Ysidro or Otay Mesa) or on foot (PedEast or PedWest at San Ysidro). No special documents are needed to enter Mexico, but you'll need them to return to the US. Expect traffic, especially at peak times.",
      es: "Puedes cruzar la frontera de San Diego/Tijuana en auto (San Ysidro u Otay Mesa) o a pie (PedEast o PedWest en San Ysidro). No se necesitan documentos especiales para entrar a México, pero los necesitarás para volver a EE.UU. Espera tráfico, especialmente en horas pico.",
    },
  },
  {
    id: "cross-to-usa",
    q: {
      en: "How do I cross back to the USA?",
      es: "¿Cómo cruzo de regreso a Estados Unidos?",
    },
    a: {
      en: "To re-enter the US, you'll need a valid passport or other WHTI-compliant document. Wait times at the border can be long, so check online beforehand. Ready Lanes (for RFID documents) and SENTRI can speed up the process.",
      es: "Para reingresar a EE.UU., necesitarás un pasaporte válido u otro documento compatible con WHTI. Los tiempos de espera en la frontera pueden ser largos, así que verifícalos en línea antes. Los carriles Ready (para documentos con RFID) y SENTRI pueden acelerar el proceso.",
    },
  },
  {
    id: "group-chats",
    q: {
      en: "Are there group chats I can join?",
      es: "¿Hay chats grupales a los que pueda unirme?",
    },
    a: {
      en: 'Yes, you can join this <a href="https://chat.whatsapp.com/CrT869wmfyb9rOiBvBdh91" target="_blank" rel="noopener noreferrer">Whatsapp Community</a> to coordinate with other guests and get updates.',
      es: 'Sí, únete a nuestra <a href="https://chat.whatsapp.com/CrT869wmfyb9rOiBvBdh91" target="_blank" rel="noopener noreferrer">Comunidad de Whatsapp</a> para coordinar con otros invitados y recibir actualizaciones.',
    },
  },
];

const Faq: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section style={{ color: "#fff", maxWidth: 700, margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", fontFamily: "Wilden, sans-serif", fontSize: "2.5em" }}>{t("faq")}</h2>
      <div>
        {faqs.map((faq) => (
          <div key={faq.id} style={{ marginBottom: "2em" }}>
            <h3 style={{ fontFamily: "Wilden, sans-serif", fontSize: "1.5em", marginBottom: "0" }}>
              {faq.q[lang]}
            </h3>
            <p style={{ fontSize: "1.1em", lineHeight: "1.6" }} dangerouslySetInnerHTML={{ __html: faq.a[lang] }} />
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center", marginTop: "2em" }}>{t("wip")}</p>
    </section>
  );
};

export default Faq;