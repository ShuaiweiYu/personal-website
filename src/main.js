import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// element ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// i18n
import { createI18n } from 'vue-i18n'
import zh from './translations/zh.json'
import en from './translations/en.json'
import de from './translations/de.json'

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || navigator.language,
    messages: {
        'zh-CN': zh,
        'en': en,
        'de': de
    }

})

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(i18n)

app.mount('#app')
