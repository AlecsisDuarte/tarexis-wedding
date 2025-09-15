import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";

const faqs = [
  {
    id: "cash",
    q: {
      en: "Do I need cash?",
      es: "¿Necesito llevar efectivo?",
    },
    a: {
      en: "Most places in Mexico allow you to pay in cash or cards, but if you are planning on driving make sure to have some change for the tolls as some do not take cards, but they accept dollars.",
      es: "La mayoría de los lugares en México permiten pagar en efectivo o con tarjeta, pero si planeas conducir asegúrate de llevar cambio para las casetas, ya que algunas no aceptan tarjeta, pero sí aceptan dólares.",
    },
  },
];

const Faq: React.FC = () => {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section>
      <h2>{t("faq")}</h2>
      <div
        className="dialog-box"
        style={{
          background: "rgb(156 126 96)",
          borderRadius: "14px",
          boxShadow: "0 2px 12px rgba(156,126,96,0.10)",
          padding: "1.5rem",
          marginBottom: "2rem",
          color: "#fff",
          maxWidth: 700,
        }}
      >
        {faqs.map((faq) => (
          <div key={faq.id} style={{ marginBottom: "1.2em" }}>
            <button
              onClick={() => setOpen(open === faq.id ? null : faq.id)}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1.1em",
                fontFamily: "Wilden, sans-serif",
                cursor: "pointer",
                textAlign: "left",
                width: "100%",
                padding: "0.5em 0",
              }}
              aria-expanded={open === faq.id}
            >
              {faq.q[lang]} {open === faq.id ? "▲" : "▼"}
            </button>
            {open === faq.id && (
              <div
                style={{
                  color: "#f3e8d2",
                  marginTop: "0.5em",
                  fontSize: "1em",
                }}
              >
                {faq.a[lang]}
              </div>
            )}
          </div>
        ))}
      </div>
      <p style={{ color: "#fff" }}>{t("wip")}</p>
    </section>
  );
};

export default Faq;
