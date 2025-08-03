<script setup>
import NavigationHunt from '../components/Hunt/NavigationHunt.vue';
import SubscriptionsHunt from '../components/Hunt/SubscriptionsHunt.vue';
import Equipment from '../components/Hunt/Equipment.vue';

import { useActiveBlockStore } from '../source/storeActiveBlock';

const store = useActiveBlockStore();
</script>

<template>
  <section>
    <div class="container hunt__container">
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
      <NavigationHunt></NavigationHunt>

      <SubscriptionsHunt
        v-if="store.activeBlockHunt === 'subscriptions'"
      ></SubscriptionsHunt>
      <Equipment v-if="store.activeBlockHunt === 'equipment'"></Equipment>
    </div>
  </section>
</template>
<style scoped></style>
