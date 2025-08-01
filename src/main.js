import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { createMemoryHistory, createRouter } from 'vue-router';
import { createPinia } from 'pinia';

import Home from './pages/Home.vue';
import Profile from './pages/Profile.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
