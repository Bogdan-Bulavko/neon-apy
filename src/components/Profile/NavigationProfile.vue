<script setup>
import { useActiveBlockStore } from '../../source/storeActiveBlock';

const { onActiveBlock } = useActiveBlockStore();
const store = useActiveBlockStore();
</script>

<template>
  <nav class="profile__navigation">
    <div class="profile__navigation__container">
      <span
        :class="{
          'profile__navigation__container__button-active':
            store.activeBlockProfile === 'profile',
        }"
        @click="() => onActiveBlock('profile')"
        >Профиль</span
      >
      <span
        :class="{
          'profile__navigation__container__button-active':
            store.activeBlockProfile === 'wallet',
        }"
        @click="() => onActiveBlock('wallet')"
        >Кошелёк</span
      >
    </div>
  </nav>
</template>

<style scoped></style>
