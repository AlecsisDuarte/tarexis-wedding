import React from "react";
import { Link } from "react-router-dom";
import "./Travel.css";
import { useLanguage } from "../LanguageContext";

const Travel: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="travel-container">
      <h1 className="pages-titles">{t("travel")}</h1>

      <section className="travel-section">
        <h2 className="travel-section-title">{t("whereToStay")}</h2>
        <p>{t("whereToStayIntro")}</p>
        <p>{t("whereToStayHubs")}</p>
        <h3 className="hotel-options">{t("hotelOptions")}</h3>
        <div className="hotel-list">
          <div className="hotel">
            <h4>{t("hotelAguaDeVid")}</h4>
            <p>{t("hotelAguaDeVidDesc")}</p>
          </div>
          <div className="hotel">
            <h4>{t("hotelElCielo")}</h4>
            <p>{t("hotelElCieloDesc")}</p>
          </div>
          <div className="hotel">
            <h4>{t("hotelEncuentroGuadalupe")}</h4>
            <p>{t("hotelEncuentroGuadalupeDesc")}</p>
          </div>
          <div className="hotel">
            <h4>{t("hotelBruma")}</h4>
            <p>{t("hotelBrumaDesc")}</p>
          </div>
          <div className="hotel">
            <h4>{t("airbnb")}</h4>
            <p>{t("airbnbDesc")}</p>
          </div>
        </div>
      </section>

      <section className="travel-section">
        <h2 className="travel-section-title">{t("gettingIn")}</h2>
        <p>{t("gettingInIntro")}</p>
        <div className="getting-in-links">
          <Link to="/from-usa" className="travel-link">
            {t("fromUSContent2")}
          </Link>
          <Link to="/from-mexico" className="travel-link">
            {t("fromMXContent")}
          </Link>
        </div>
      </section>

      <section className="travel-section">
        <h2 className="travel-section-title">{t("movingAround")}</h2>
        <p>{t("movingAroundIntro")}</p>
        <p>{t("gettingAroundTip")}</p>
        <p>
          <strong>{t("lomasTravel")}</strong>
        </p>
      </section>
    </div>
  );
};

export default Travel;