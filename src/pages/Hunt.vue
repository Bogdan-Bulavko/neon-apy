<script setup>
import NavigationHunt from '../components/Hunt/NavigationHunt.vue';
import SubscriptionsHunt from '../components/Hunt/SubscriptionsHunt.vue';
import Equipment from '../components/Hunt/Equipment.vue';

import { useActiveBlockStore } from '../source/storeActiveBlock';

const store = useActiveBlockStore();
</script>

<template>
  <section
    class="bg-linear-to-t from-white from-1% to-metal-home overflow-hidden"
  >
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
      <NavigationHunt></NavigationHunt>

      <SubscriptionsHunt
        v-if="store.activeBlockHunt === 'subscriptions'"
      ></SubscriptionsHunt>
      <Equipment v-if="store.activeBlockHunt === 'equipment'"></Equipment>
    </div>
  </section>
</template>
<!-- [#989898] -->
<style scoped></style>
