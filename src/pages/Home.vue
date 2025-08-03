<script setup>
import HeaderHome from '../components/Home/HeaderHome.vue';
import Menu from '../components/Menu.vue';
import RouletteHome from '../components/Home/RouletteHome.vue';
import TimerHome from '../components/Home/TimerHome.vue';
import TotalBank from '../components/Home/TotalBank.vue';
</script>

<template>
  <main class="min-h-dvh overflow-hidden">
    <div class="max-w-90 m-auto px-7 pt-7">
      <HeaderHome />
      <TimerHome />
      <TotalBank />
      <RouletteHome />
    </div>

    <Menu />
  </main>
</template>

<!-- <template> -->
<!-- <main class="background">
    <div class="container">
      <HeaderHome class="fade-slide-up" />
      <TimerHome class="fade-slide-up" :style="{ '--delay': '0.3s' }" />
      <TotalBank class="fade-slide-up" :style="{ '--delay': '0.6s' }" />
      <RouletteHome class="fade-slide-up" :style="{ '--delay': '0.9s' }" />
    </div>
    <Menu class="fade-slide-up" :style="{ '--delay': '1.2s' }" />
  </main>
</template> -->

<style scoped></style>
