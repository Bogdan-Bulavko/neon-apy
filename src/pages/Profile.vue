<script setup>
import NavigationProfile from '../components/Profile/NavigationProfile.vue';
import ContentProfile from '../components/Profile/ContentProfile.vue';
import ContentWallet from '../components/Profile/ContentWallet.vue';

import { useActiveBlockStore } from '../source/storeActiveBlock';

const store = useActiveBlockStore();
</script>

<template>
  <section
    class="px-9 min-h-dvh max-[375px]:px-6 relative bg-linear-to-t from-blue-home to-black overflow-hidden"
  >
    <NavigationProfile></NavigationProfile>

    <ContentProfile v-if="store.activeBlock === 'profile'"></ContentProfile>
    <ContentWallet v-if="store.activeBlock === 'wallet'"></ContentWallet>
  </section>
</template>

<style scoped></style>
