import React from "react";
import { useLanguage } from "../LanguageContext";
import "./FAQ.css";

const faqs = [
  {
    id: "children",
    q: {
      en: "Can I bring my children?",
      es: "¿Puedo llevar a mis hijos?",
    },
    a: {
      en: "We kindly ask that our wedding be an adults-only celebration. Please leave the little ones at home so you can fully enjoy the festivities.",
      es: "Les pedimos amablemente que nuestra boda sea una celebración solo para adultos. Dejen a los niños en casa para que puedan disfrutar de la fiesta.",
    },
  },
  {
    id: "dress-code",
    q: {
      en: "What is the dress code?",
      es: "¿Cuál es el código de vestimenta?",
    },
    a: {
      en: "Formal attire. For men, this means a suit. For women, a floor-length gown or a fancy cocktail dress",
      es: "Vestimenta formal. Para los hombres, esto significa traje. Para las mujeres, un vestido largo, un vestido de cóctel elegante.",
    },
  },
  {
    id: "plus-ones",
    q: {
      en: "Can I bring a plus one?",
      es: "¿Puedo llevar un acompañante?",
    },
    a: {
      en: "Our wedding is strictly RSVP-only. We will only be able to accommodate those specifically named on your invitation. Thank you for your understanding!",
      es: "Nuestra boda es estrictamente solo con RSVP. Solo podremos acomodar a aquellos específicamente nombrados en su invitación. ¡Gracias por su comprensión!",
    },
  },
  {
    id: "get-around",
    q: {
      en: "How should I get around Valle de Guadalupe?",
      es: "¿Cómo debería moverme por el Valle de Guadalupe?",
    },
    a: {
      en: "Valle de Guadalupe is a rural area with limited ride-sharing services. We highly recommend renting a car for the weekend to explore the region at your leisure. You can also hire a private driver for convenience. We encourage guests to coordinate and carpool!",
      es: "El Valle de Guadalupe es una zona rural con servicios de transporte compartido limitados. Recomendamos encarecidamente alquilar un coche para el fin de semana para explorar la región a su gusto. También puede contratar a un conductor privado para su comodidad. ¡Animamos a los invitados a coordinar y compartir coche!",
    },
  },
  {
    id: "cross-to-mexico",
    q: {
      en: "What do I need to know about crossing the border into Mexico?",
      es: "¿Qué necesito saber para cruzar la frontera hacia México?",
    },
    a: {
      en: "You can cross the San Diego/Tijuana border by car or on foot. While you don't need special documents to enter Mexico, you will need a valid passport or other WHTI-compliant document to return to the US. Be prepared for potential traffic, especially during peak hours.",
      es: "Puedes cruzar la frontera de San Diego/Tijuana en coche o a pie. Aunque no necesitas documentos especiales para entrar a México, necesitarás un pasaporte válido u otro documento compatible con WHTI para regresar a los EE. UU. Prepárate para el posible tráfico, especialmente durante las horas pico.",
    },
  },
  {
    id: "cross-to-usa",
    q: {
      en: "What about crossing back into the USA?",
      es: "¿Y para volver a cruzar a los Estados Unidos?",
    },
    a: {
      en: "To re-enter the US, you'll need a valid passport or other WHTI-compliant document. Wait times can be long, so we recommend checking the U.S. Customs and Border Protection website for current wait times. Using a Ready Lane (for RFID-enabled documents) or SENTRI can significantly speed up your crossing.",
      es: "Para reingresar a los EE. UU., necesitarás un pasaporte válido u otro documento compatible con WHTI. Los tiempos de espera pueden ser largos, por lo que recomendamos consultar el sitio web de Aduanas y Protección Fronteriza de los EE. UU. para conocer los tiempos de espera actuales. Usar un Ready Lane (para documentos con RFID) o SENTRI puede acelerar significativamente su cruce.",
    },
  },
  {
    id: "group-chats",
    q: {
      en: "Is there a group chat for wedding guests?",
      es: "¿Hay un chat grupal para los invitados a la boda?",
    },
    a: {
      en: "Yes! We've created a <a href=\"https://chat.whatsapp.com/CrT869wmfyb9rOiBvBdh91\" target=\"_blank\" rel=\"noopener noreferrer\">Whatsapp Community</a> for everyone to connect, ask questions, and share travel plans. We'd love for you to join!",
      es: "¡Sí! Hemos creado una <a href=\"https://chat.whatsapp.com/CrT869wmfyb9rOiBvBdh91\" target=\"_blank\" rel=\"noopener noreferrer\">Comunidad de Whatsapp</a> para que todos se conecten, hagan preguntas y compartan planes de viaje. ¡Nos encantaría que te unieras!",
    },
  },
  {
    id: "cash",
    q: {
      en: "Will I need cash?",
      es: "¿Necesitaré efectivo?",
    },
    a: {
      en: "While most places in Valle de Guadalupe take credit cards, we recommend bringing some cash (pesos or dollars) for smaller purchases and for highway tolls, which are often cash-only.",
      es: "Aunque la mayoría de los lugares en el Valle de Guadalupe aceptan tarjetas de crédito, te recomendamos traer algo de efectivo (pesos o dólares) para compras pequeñas y para los peajes de la carretera, que a menudo solo aceptan efectivo.",
    },
  },
];

const Faq: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="faq-section">
      <h2 className="pages-titles">{t("faq")}</h2>
      <div>
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <h3 className="faq-question">{faq.q[lang]}</h3>
            <p
              className="faq-answer"
              dangerouslySetInnerHTML={{ __html: faq.a[lang] }}
            />
          </div>
        ))}
      </div>
      <p className="faq-wip">{t("wip")}</p>
    </section>
  );
};

export default Faq;