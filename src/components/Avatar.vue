<script setup>
import { ref, onMounted } from 'vue';

const user = ref(null);
onMounted(async () => {
  if (window.Telegram && window.Telegram.WebApp) {
    user.value = window.Telegram.WebApp.initDataUnsafe?.user || null;
  }
});
</script>

<template>
  <div v-if="user" class="home__header__avatar">
    <img :src="user.photo_url" alt="User avatar" />
  </div>
  <div v-else class="home__header__avatar bg-white flex justify-center">
    <span class="text-sm text-gray-500">?</span>
  </div>
</template>

<style scoped></style>
