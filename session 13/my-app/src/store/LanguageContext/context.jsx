import { createContext } from "react";

export const initialValue = {
  lang: "EN",
  setLang: () => {},
};
const LanguageContext = createContext(initialValue);

export default LanguageContext;
