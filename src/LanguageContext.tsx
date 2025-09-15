import React, { createContext, useState, useContext } from "react";
import dictionary from "./Dictionary.json";

type Lang = "en" | "es";
type DictKey = keyof (typeof dictionary)["en"];

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: DictKey) => string;
}>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = (key: DictKey) => dictionary[lang][key] || key;
  const contextValue = React.useMemo(
    () => ({ lang, setLang, t }),
    [lang, setLang, t],
  );
  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
