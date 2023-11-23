import './assets/main.css'
import './assets/app.js'

import { createApp } from 'vue';
import {createI18n} from "vue-i18n"
import App from './App.vue'
import router from './router'
import ar from './locales/ar.js'
import en from './locales/en.js';

const app = createApp(App)

const i18n = createI18n({
    locale: 'en',
    legacy: false,
    globalInjection: true,
    messages: {
        ar,
        en
    }
})
// On Application load Get langauge from locaStorage 
const lang = JSON.parse(localStorage.getItem('lang'));
if (lang) {
    i18n.global.locale.value = lang;
}

app.use(router)
app.use(i18n)
app.mount('#app');

export default i18n;
