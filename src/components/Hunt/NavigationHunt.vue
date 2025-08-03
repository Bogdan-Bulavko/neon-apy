<script setup>
import { useActiveBlockStore } from '../../source/storeActiveBlock';

const { onActiveBlock } = useActiveBlockStore();
const store = useActiveBlockStore();
</script>

<template>
  <nav class="hunt__navigation">
    <div class="hunt__navigation__container">
      <span
        :class="{
          'hunt__navigation__container__button-active':
            store.activeBlockHunt === 'subscriptions',
        }"
        @click="() => onActiveBlock('subscriptions')"
        >Подписки</span
      >
      <span
        :class="{
          'hunt__navigation__container__button-active':
            store.activeBlockHunt === 'equipment',
        }"
        @click="() => onActiveBlock('equipment')"
        >Снаряга</span
      >
    </div>
  </nav>
</template>

<style scoped></style>
