import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue';
import quasarUserOptions from './quasar-user-options.js';

createApp(App).use(Quasar, quasarUserOptions).mount('#app');
