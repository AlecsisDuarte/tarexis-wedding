import React from "react";
import { Link } from "react-router-dom";
import "./Travel.css";
import { useLanguage } from "../LanguageContext";
import elCielo from "../assets/el_cielo.jpg";
import carreteraTijuanaEnsenada from "../assets/carretera_tijuana_ensenada.jpg";
import monteCova from "../assets/monte_cova.jpg";

const Travel: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="travel-container">
      <h1 className="pages-titles">{t("travel")}</h1>

      <section className="travel-section travel-section-left">
        <img
          src={elCielo}
          alt="El Cielo"
          className="travel-section-image where-to-stay-image"
        />
        <div className="travel-section-content where-to-stay-content">
          <h2 className="travel-section-title">{t("whereToStay")}</h2>
          <p>{t("whereToStayIntro")}</p>
          <div className="hotel-list">
            <div className="hotel">
              <a
                href="https://elcielovalledeguadalupe.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="hotel-name">{t("hotelElCieloName")}</h4>
              </a>
              <p>{t("hotelElCieloDesc")}</p>
            </div>
            <div className="hotel">
              <a
                href="https://hotelandana.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="hotel-name">{t("hotelAndanaName")}</h4>
              </a>
              <p>{t("hotelAndanaDesc")}</p>
            </div>
            <div className="hotel">
              <a
                href="https://hotellosamantesvalledeguadalupe.mx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="hotel-name">{t("hotelLosAmantesName")}</h4>
              </a>
              <p>{t("hotelLosAmantesDesc")}</p>
            </div>
            <div className="hotel">
              <a
                href="https://www.hotelentrevalle.com/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="hotel-name">{t("hotelEntrevalleName")}</h4>
              </a>
              <p>{t("hotelEntrevalleDesc")}</p>
            </div>
          </div>
          <p>{t("whereToStayOutro")}</p>
        </div>
      </section>

      <section className="travel-section travel-section-right">
        <img
          src={carreteraTijuanaEnsenada}
          alt="Carretera Tijuana Ensenada"
          className="travel-section-image getting-in-image"
        />
<div className="travel-section-content getting-in-content">
          <h2 className="travel-section-title">{t("gettingIn")}</h2>
          <p>{t("gettingInIntro_p1")}</p>
          <p>{t("gettingInIntro_p2")}</p>
          <p>
            <strong>{t("gettingInIntro_remindersTitle")}</strong>
          </p>
          <ul>
            <li>
              <strong>{t("gettingInIntro_reminders_p1_title")}</strong>
              {t("gettingInIntro_reminders_p1_text")}
            </li>
            <li>
              <strong>{t("gettingInIntro_reminders_p2_title")}</strong>
              {t("gettingInIntro_reminders_p2_text")}
            </li>
            <li>
              <strong>{t("gettingInIntro_reminders_p3_title")}</strong>
              {t("gettingInIntro_reminders_p3_text")}
            </li>
          </ul>
          <p>{t("gettingInIntro_p3")}</p>
          <div className="getting-in-links">
            <Link to="/from-usa" className="travel-link">
              {t("fromUSContent2")}
            </Link>
            <Link to="/from-mexico" className="travel-link">
              {t("fromMXContent")}
            </Link>
          </div>
        </div>
      </section>

      <section className="travel-section travel-section-left">
        <img
          src={monteCova}
          alt="Monte Cova"
          className="travel-section-image"
        />
        <div className="travel-section-content">
          <h2 className="travel-section-title">{t("movingAround")}</h2>
          <p>{t("gettingAroundTip")}</p>
          <p>
            <strong>{t("lomasTravel")}</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Travel;