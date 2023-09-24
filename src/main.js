import { createApp } from 'vue'
import 'bulma/css/bulma.css'
import App from './App.vue'
import router from './router/routes';

const app = createApp(App);

app.use(router); // Use Vue Router
app.mount('#app'); // Use Vue Router