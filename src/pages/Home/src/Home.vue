<script setup>
import HeaderHome from './components/HeaderHome.vue';
import MenuHome from './components/MenuHome.vue';
import RouletteHome from './components/RouletteHome.vue';
import TimerHome from './components/TimerHome.vue';
import TotalBank from './components/TotalBank.vue';
</script>

<template>
  <div class="p-7">
    <HeaderHome></HeaderHome>
    <TimerHome></TimerHome>
    <TotalBank></TotalBank>
    <RouletteHome></RouletteHome>
  </div>

  <MenuHome></MenuHome>
</template>

<style scoped></style>
