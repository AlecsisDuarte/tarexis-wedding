import React from "react";
import { useLanguage } from "../LanguageContext";
import std from "../assets/std_date_location.png"; // ES module import

const Home: React.FC = () => {
  const { t, lang } = useLanguage();
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: "rgb(156 126 96)",
          fontFamily: "Luminaire-Script-Regular, serif",
          fontSize: "clamp(3em, 15vw, 5.5em)",
          marginBottom: "1.5rem",
          marginTop: 0,
          textAlign: "center",
        }}
      >
        {lang === "en" ? "Save the Weekend" : "Reserva el Fin de Semana"}
      </h1>
      <img
        src={std}
        alt="Save the Weekend"
        style={{
          maxWidth: "100%",
          height: "auto",
          marginBottom: "2rem",
          borderRadius: "16px",
        }}
      />
      <div
        style={{
          color: "rgb(156 126 96)",
          fontSize: "1.6em",
          marginTop: "2rem",
          fontFamily: "MorningBrew-Regular",
        }}
      >
        {t("wip")}
      </div>
    </div>
  );
};

export default Home;
