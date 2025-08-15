import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { createMemoryHistory, createRouter } from 'vue-router';
import { createPinia } from 'pinia';

import { TonConnectUIPlugin } from '@townsquarelabs/ui-vue';

import Home from './pages/Home.vue';
import Profile from './pages/Profile.vue';
import Hunt from './pages/Hunt.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile },
  { path: '/hunt', component: Hunt },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const pinia = createPinia();
const app = createApp(App);

app.use(TonConnectUIPlugin, {
  manifestUrl:
    'https://bogdan-bulavko.github.io/neon-apy/tonconnect-manifest.json',
});
app.use(router);
app.use(pinia);
app.mount('#app');
