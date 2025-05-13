import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import router from './router/index.js';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css';
import 'tailwindcss-primeui';
import { definePreset } from '@primeuix/themes';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#F1FAFF', // Alice Blue
      100: '#F9FBFC', // Ghost White
      200: '#F9FBF9', // Bubbles (close)
      300: '#B9F0EB', // Pale Blue
      400: '#49E0D3', // Turquoise
      500: '#007AFF', // Azure
      600: '#375FD9', // Royal Blue
      700: '#1F3F72', // Indigo
      800: '#132742', // Yankees Blue
      900: '#375FD9', // English Vermillion reused (same hex)
    },
    accent: {
      100: '#6C57DB', // Majorelle Blue
      200: '#FEC37A', // Topaz
      300: '#FFE6C7', // Bisque
      400: '#EAFBF9', // Bubbles
      500: '#E2E5FF', // Lavender
      600: '#DDE0E5', // Platinum
      700: '#FFF8EE', // Floral White
      800: '#F9FBFC', // Ghost White
    },
    danger: {
      500: '#375FD9', // English Vermillion (hex reuse, rename as needed)
    },
  },
});

const app = createApp(App);
const pinia = createPinia();

app
  .use(router)
  .use(pinia)
  .use(PrimeVue, {
    theme: {
      preset: MyPreset,
    },
  })
  .mount('#app');
