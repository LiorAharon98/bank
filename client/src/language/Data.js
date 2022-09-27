import { initReactI18next } from "react-i18next";
import translation_he from "./he";
import translation_en from "./en";
import i18next from "i18next";
i18next.use(initReactI18next).init({
  fallbackLng: "en",
  fallbackNS: "common",
  resources: {
    en: {
      translation: translation_en,
    },
    he: {
      translation: translation_he,
    },
  },
});
export default i18next;
