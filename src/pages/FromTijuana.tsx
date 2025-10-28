import React from "react";
import { useLanguage } from "../LanguageContext";
import "./FromTijuana.css";

const FromTijuana: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="from-tijuana-container">
      <h1 className="pages-titles">{t("fromTijuanaTitle")}</h1>

      <p>{t("fromTijuanaIntro")}</p>

      <h2>{t("fromTijuanaTransportationOptionsTitle")}</h2>

      <h3>{t("fromTijuanaPrivateDriverTitle")}</h3>
      <p>{t("fromTijuanaPrivateDriverIntro")}</p>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: t("fromTijuanaPrivateDriverLi1") }} />
        <li dangerouslySetInnerHTML={{ __html: t("fromTijuanaPrivateDriverLi2") }} />
      </ul>

      <h3>{t("fromTijuanaRentalCarTitle")}</h3>
      <p dangerouslySetInnerHTML={{ __html: t("fromTijuanaRentalCarIntro") }} />
      <ul>
        <li dangerouslySetInnerHTML={{ __html: t("fromTijuanaRentalCarLi1") }} />
        <li dangerouslySetInnerHTML={{ __html: t("fromTijuanaRentalCarLi2") }} />
        <li dangerouslySetInnerHTML={{ __html: t("fromTijuanaRentalCarLi3") }} />
      </ul>

      <h3>{t("fromTijuanaBusUberTitle")}</h3>
      <p>{t("fromTijuanaBusUberIntro")}</p>

      <h2>{t("fromTijuanaKeyTipsTitle")}</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: t("fromTijuanaKeyTipsLi1") }} />
        <li dangerouslySetInnerHTML={{ __html: t("fromTijuanaKeyTipsLi2") }} />
        <li dangerouslySetInnerHTML={{ __html: t("fromTijuanaKeyTipsLi3") }} />
      </ul>
    </div>
  );
};

export default FromTijuana;
