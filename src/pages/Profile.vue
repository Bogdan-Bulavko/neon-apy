<script setup>
import NavigationProfile from '../components/Profile/NavigationProfile.vue';
import ContentProfile from '../components/Profile/ContentProfile.vue';
import ContentWallet from '../components/Profile/ContentWallet.vue';

import { useActiveBlockStore } from '../source/storeActiveBlock';

const store = useActiveBlockStore();
</script>

<template>
  <section>
    <div class="container profile__container">
      <RouterLink to="/" class="button-back-home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="256" cy="256" r="236" stroke-width="40" />
          <path d="M305.204 131.08L194 242" stroke-width="40" />
          <path d="M307.689 382.084L167 241" stroke-width="40" />
        </svg>
      </RouterLink>
      <NavigationProfile></NavigationProfile>

      <ContentProfile
        v-if="store.activeBlockProfile === 'profile'"
      ></ContentProfile>
      <ContentWallet
        v-if="store.activeBlockProfile === 'wallet'"
      ></ContentWallet>
    </div>
  </section>
</template>
<style scoped></style>
