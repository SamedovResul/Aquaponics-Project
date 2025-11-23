import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import az from "./locales/az.json";
import en from "./locales/en.json";

export const languages = {
  az: {
    translation: az,
  },
  en: {
    translation: en,
  },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "az",
  resources: languages,
  fallbackLng: ["az","en"],
});

export default i18next;
