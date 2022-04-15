import { createApp } from 'vue'
import App from './App.vue'
import './css/tailwind.css'
import 'tw-elements';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import router from './router'

createApp(App).use(router).use(AOS.init()).mount('#app')
