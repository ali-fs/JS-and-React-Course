import { useState } from "react";
import LanguageContext, { initialValue } from "./context";

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(initialValue.lang);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
