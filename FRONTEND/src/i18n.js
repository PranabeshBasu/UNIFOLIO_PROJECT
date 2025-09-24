import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      brand: "Unifolio",
      nav: { home: "Home", features: "Features", about: "About", contact: "Contact", signup: "Sign Up" },
      hero: { title: "Your University Journey, Digitized" },
      portals: {
        heading: "A Centralized Hub for Education",
        sub: "One platform, multiple gateways. Secure access for every stakeholder.",
        student: { title: "Student Portal", cta: "Login to Dashboard" },
        faculty: { title: "Faculty Portal", cta: "Enter Faculty Dashboard" },
        government: { title: "Government Portal", cta: "Access Portal" },
      },
    },
  },
  hi: {
    translation: {
      brand: "यूनिफोलियो",
      nav: { home: "होम", features: "विशेषताएँ", about: "हमारे बारे में", contact: "संपर्क", signup: "साइन अप" },
      hero: { title: "आपकी विश्वविद्यालय यात्रा, डिजिटल" },
      portals: {
        heading: "शिक्षा के लिए केंद्रीकृत हब",
        sub: "एक प्लेटफ़ॉर्म, कई द्वार। हर हितधारक के लिए सुरक्षित पहुँच।",
        student: { title: "छात्र पोर्टल", cta: "डैशबोर्ड में लॉगिन करें" },
        faculty: { title: "फैकल्टी पोर्टल", cta: "फैकल्टी डैशबोर्ड खोलें" },
        government: { title: "सरकारी पोर्टल", cta: "पोर्टल खोलें" },
      },
    },
  },
};

const saved = localStorage.getItem("unifolio_lang") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: saved,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
