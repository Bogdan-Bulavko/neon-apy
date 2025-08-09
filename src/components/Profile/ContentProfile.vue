<script setup>
import Avatar from '../Avatar.vue';
</script>

<template>
  <div class="profile__info">
    <Avatar></Avatar>
    <div class="profile__info__avatar__clue">
      <img src="./img/info.png" alt="info" />
    </div>
    <div class="profile__info__link">
      <a href="#">https://t.me/m5bank_bot?star...</a
      ><img src="./img/copy.png" alt="copy" />
    </div>
  </div>
  <div class="profile__possibilities">
    <p class="profile__possibilities__title">Возможности</p>
    <div class="profile__possibilities__card">
      <img src="./img/possibilities.webp" alt="possibilities" />
      <span class="font-bold">Рефералы</span>
    </div>
  </div>
</template>

<style scoped></style>
