import { createI18n } from 'vue-i18n';
import es from './locales/es.json';
import en from './locales/en.json';

const messages = {
    en,
    es,
};

const i18n = createI18n({
    legacy: false, // Modo "composition" para Vue 3
    locale: 'es', // Idioma predeterminado
    fallbackLocale: 'en', // Idioma de respaldo
    messages, // Asegúrate de que contiene las traducciones correctas
});

export default i18n;