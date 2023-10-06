import LanguageContext from "../store/LanguageContext/context";
import { useContext } from "react";

const useLanguage = () => {
  const languageContext = useContext(LanguageContext);
  return languageContext;
};

export default useLanguage;
