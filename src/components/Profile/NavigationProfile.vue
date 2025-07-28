<script setup>
import { useActiveBlockStore } from '../../source/storeActiveBlock';

const { onActiveBlock } = useActiveBlockStore();
const store = useActiveBlockStore();
</script>

<template>
  <nav class="pt-5 flex">
    <div class="max-w-36 m-auto bg-gold-card rounded-xl text-[10px] font-bold">
      <span
        class="inline-block py-0.5 w-18 px-2 text-center rounded-xl duration-300 cursor-pointer"
        :class="{ 'bg-metal-home': store.activeBlock === 'profile' }"
        @click="() => onActiveBlock('profile')"
        >Профиль</span
      >
      <span
        class="inline-block py-0.5 w-18 px-2 text-center rounded-xl duration-300 cursor-pointer"
        :class="{ 'bg-metal-home': store.activeBlock === 'wallet' }"
        @click="() => onActiveBlock('wallet')"
        >Кошелёк</span
      >
    </div>
  </nav>
</template>

<style scoped></style>
