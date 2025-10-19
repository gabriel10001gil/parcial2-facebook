import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './style.css'

const app = createApp(App)
app.use(router) // 🔹 Esto es lo que conecta las rutas con tu app
app.mount('#app')
