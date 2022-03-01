import { createApp } from 'vue'
import App from './App.vue'
import './css/tailwind.css'
import 'tw-elements';
import AOS from 'aos'
import 'aos/dist/aos.css'


createApp(App).use(AOS.init()).mount('#app')
