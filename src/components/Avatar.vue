<script setup>
// import { ref, onMounted } from 'vue';

// const avatarUrl = ref('/default-avatar.png');

// onMounted(() => {
//   const tg = window.Telegram.WebApp;
//   if (!tg) return;

//   tg.ready();
//   const user = tg.initDataUnsafe.user;
//   if (user.photo_url) {
//     avatarUrl.value = user.photo_url;
//   }
// });
</script>

<template>
  <div class="m-auto w-[55px] h-[55px] bg-white rounded-full overflow-hidden">
    <img :src="avatarUrl" alt="avatar" class="w-full h-full object-cover" />
  </div>
</template>

<style scoped></style>
