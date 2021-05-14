import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import './styles/global.css';
import './styles/element.scss';
import './styles/theme.scss';
import './styles/define-button.scss';

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')
