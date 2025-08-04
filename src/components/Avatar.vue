<script setup>
import { ref, onMounted } from 'vue';

const avatarUrl = ref('/default-avatar.png');

onMounted(() => {
  const tg = window.Telegram.WebApp;
  if (!tg) return;

  tg.ready();
  const user = tg.initDataUnsafe.user;
  if (user.photo_url) {
    avatarUrl.value = user.photo_url;
  }
});
</script>

<template>
  <div class="home__header__avatar">
    <img :src="avatarUrl" alt="avatar" />
  </div>
</template>

<style scoped></style>
