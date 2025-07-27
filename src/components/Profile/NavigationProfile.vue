<script setup>
import { useActiveBlockStore } from '../../source/storeActiveBlock';

const { onActiveBlock } = useActiveBlockStore();
const store = useActiveBlockStore();
</script>

<template>
  <nav class="mt-7 flex">
    <RouterLink to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="none"
        stroke="currentColor"
        class="text-white w-8 h-8"
      >
        <circle cx="256" cy="256" r="236" stroke-width="40" />
        <path d="M305.204 131.08L194 242" stroke-width="40" />
        <path d="M307.689 382.084L167 241" stroke-width="40" />
      </svg>
    </RouterLink>
    <div class="max-w-36 m-auto bg-black rounded-xl text-[10px] font-bold">
      <span
        class="inline-block py-0.5 w-18 px-2 text-center rounded-xl duration-300 cursor-pointer"
        :class="{ 'bg-gray-400': store.activeBlock === 'profile' }"
        @click="() => onActiveBlock('profile')"
        >Профиль</span
      >
      <span
        class="inline-block py-0.5 w-18 px-2 text-center rounded-xl duration-300 cursor-pointer"
        :class="{ 'bg-gray-400': store.activeBlock === 'wallet' }"
        @click="() => onActiveBlock('wallet')"
        >Кошелёк</span
      >
    </div>
  </nav>
</template>

<style scoped></style>
