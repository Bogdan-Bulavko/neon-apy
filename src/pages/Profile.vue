<script setup>
import NavigationProfile from '../components/Profile/NavigationProfile.vue';
import ContentProfile from '../components/Profile/ContentProfile.vue';
import ContentWallet from '../components/Profile/ContentWallet.vue';

import { useActiveBlockStore } from '../source/storeActiveBlock';

const store = useActiveBlockStore();
</script>

<template>
  <section class="bg-linear-to-t from-blue-home to-black overflow-hidden">
    <div class="max-w-90 m-auto px-9 min-h-dvh max-[375px]:px-6 relative">
      <RouterLink to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="none"
          stroke="currentColor"
          class="text-white w-8 h-8 absolute top-12 z-10"
        >
          <circle cx="256" cy="256" r="236" stroke-width="40" />
          <path d="M305.204 131.08L194 242" stroke-width="40" />
          <path d="M307.689 382.084L167 241" stroke-width="40" />
        </svg>
      </RouterLink>
      <NavigationProfile></NavigationProfile>

      <ContentProfile v-if="store.activeBlock === 'profile'"></ContentProfile>
      <ContentWallet v-if="store.activeBlock === 'wallet'"></ContentWallet>
    </div>
  </section>
</template>
<!-- [#989898] -->
<style scoped></style>
