import React from "react";
import { useLanguage } from "../LanguageContext";
import "./FromSanDiego.css";

const FromSanDiego: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="from-san-diego-container">
      <h1 className="pages-titles">{t("fromSanDiegoTitle")}</h1>

      <p>{t("fromSanDiegoIntro")}</p>

      <h2>{t("fromSanDiegoTransportationOptionsTitle")}</h2>

      <h3>{t("fromSanDiegoPrivateTransportationTitle")}</h3>
      <p>{t("fromSanDiegoPrivateTransportationIntro")}</p>
      <ul>
        <li
          dangerouslySetInnerHTML={{ __html: t("fromSanDiegoPrivateTransportationLi1") }}
        />
        <li
          dangerouslySetInnerHTML={{ __html: t("fromSanDiegoPrivateTransportationLi2") }}
        />
        <li
          dangerouslySetInnerHTML={{ __html: t("fromSanDiegoPrivateTransportationLi3") }}
        />
      </ul>

      <h3>{t("fromSanDiegoRentalCarTitle")}</h3>
      <p dangerouslySetInnerHTML={{ __html: t("fromSanDiegoRentalCarIntro") }} />
      <ul>
        <li dangerouslySetInnerHTML={{ __html: t("fromSanDiegoRentalCarLi1") }} />
        <li dangerouslySetInnerHTML={{ __html: t("fromSanDiegoRentalCarLi2") }} />
      </ul>

      <h3>{t("fromSanDiegoCrossOnFootTitle")}</h3>
      <p dangerouslySetInnerHTML={{ __html: t("fromSanDiegoCrossOnFootIntro") }} />

      <h2>{t("fromSanDiegoTipsTitle")}</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: t("fromSanDiegoTipsLi1") }} />
        <li dangerouslySetInnerHTML={{ __html: t("fromSanDiegoTipsLi2") }} />
        <li dangerouslySetInnerHTML={{ __html: t("fromSanDiegoTipsLi3") }} />
        <li dangerouslySetInnerHTML={{ __html: t("fromSanDiegoTipsLi4") }} />
        <li dangerouslySetInnerHTML={{ __html: t("fromSanDiegoTipsLi5") }} />
      </ul>
    </div>
  );
};

export default FromSanDiego;