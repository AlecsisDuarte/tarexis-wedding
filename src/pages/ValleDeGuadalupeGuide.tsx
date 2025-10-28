import React from "react";
import { useLanguage } from "../LanguageContext";
import "./ValleDeGuadalupeGuide.css";

const ValleDeGuadalupeGuide: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="valle-de-guadalupe-guide-container">
      <h1>Valle de Guadalupe &amp; Baja Guide</h1>

      <section>
        <h2>{t("gettingIn") || "Getting In"}</h2>
        {t("fromUS") && <h3>{t("fromUS")}</h3>}
        {t("fromUSContent") && <p>{t("fromUSContent")}</p>}

        {t("fromMexico") && <h3>{t("fromMexico")}</h3>}
        {t("fromMexicoContent") && <p>{t("fromMexicoContent")}</p>}
        {t("fromMexicoContent2") && <p>{t("fromMexicoContent2")}</p>}
        {t("fromMexicoContent3") && <p>{t("fromMexicoContent3")}</p>}
      </section>

      <section>
        <h2>{t("movingAround") || "Getting Around the Valle"}</h2>
        {t("movingAroundContent") && <p>{t("movingAroundContent")}</p>}
        {t("byCar") && <h3>{t("byCar")}</h3>}
        {t("byCarContent") && <p>{t("byCarContent")}</p>}
        {t("byFoot") && <h3>{t("byFoot")}</h3>}
        {t("byFootContent") && <p>{t("byFootContent")}</p>}
        {t("byFootContent2") && <p>{t("byFootContent2")}</p>}
        {t("travelTip") && <h3>{t("travelTip")}</h3>}
        {t("travelTipContent") && <p>{t("travelTipContent")}</p>}
        {t("travelTipContent2") && <p>{t("travelTipContent2")}</p>}
      </section>

      <section>
        <h2>{t("whereToStay") || "Where to Stay"}</h2>
        {t("whereToStayIntro") && <p>{t("whereToStayIntro")}</p>}
        {t("whereToStayContent") && <p>{t("whereToStayContent")}</p>}
      </section>

      <section>
        <h2>Shuttle / Group Transport</h2>
        {t("shuttle") && (
          <p dangerouslySetInnerHTML={{ __html: t("shuttle") as string }} />
        )}
        {t("shuttleCost") && <p>{t("shuttleCost")}</p>}
      </section>

      <section>
        <h2>More Recommendations</h2>
        <p>
          {t("whereToStayIntro") ? (
            <>{t("whereToStayIntro")}</>
          ) : (
            "See local wineries, restaurants and tips in the sections above."
          )}
        </p>
      </section>
    </div>
  );
};

export default ValleDeGuadalupeGuide;