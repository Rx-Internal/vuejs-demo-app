<template>
  <div class="language-switcher">
    <select
      v-model="currentLocale"
      @change="changeLanguage"
      class="p-2 rounded border"
    >
      <option value="pt">Português</option>
      <option value="en">English</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const currentLocale = ref(locale.value);

const changeLanguage = () => {
  locale.value = currentLocale.value;
  localStorage.setItem('language', currentLocale.value);
};

// Initialize language from localStorage if available
const savedLanguage = localStorage.getItem('language');
if (savedLanguage) {
  currentLocale.value = savedLanguage;
  locale.value = savedLanguage;
}
</script>

<style scoped>
.language-switcher {
  display: inline-block;
}
</style>
