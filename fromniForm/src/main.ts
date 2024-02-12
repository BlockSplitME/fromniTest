import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from '@/plugins/vuetify';

const app = createApp(App);

app.use(vuetify);

app.use(store);

app.mount('#app');

