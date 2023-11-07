import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    interpolation: { escapeValue: false },
    lng: "ru",
    fallbackLng: "ru",
    backend: {
      loadPath: "/locales/{{lng}}/common.json",
      disableBackend: true,
    },
  })
  .then((res) => res);

export default function WithTranslations({ children }) {
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
