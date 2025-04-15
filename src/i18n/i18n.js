import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import common_en from "../../locales/en/common.json"
import common_ru from "../../locales/ru/common.json"
import common_hy from "../../locales/hy/common.json"

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: "en",
        fallbackLng: "en",
        ns: ["common"],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                common: common_en,
            },
            ru: {
                common: common_ru,
            },
            hy: {
                common: common_hy,
            },
        }
    })


export default i18n