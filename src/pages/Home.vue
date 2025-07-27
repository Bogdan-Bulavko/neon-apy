<script setup>
import HeaderHome from '../components/Home/HeaderHome.vue';
import Menu from '../components/Menu.vue';
import RouletteHome from '../components/Home/RouletteHome.vue';
import TimerHome from '../components/Home/TimerHome.vue';
import TotalBank from '../components/Home/TotalBank.vue';
</script>

<template>
  <main class="min-h-dvh bg-radial from-blue-home from-40% to-black">
    <div class="max-w-90 m-auto relative px-7 pt-7 overflow-x-hidden"></div>
    <HeaderHome></HeaderHome>
    <TimerHome></TimerHome>
    <TotalBank></TotalBank>
    <RouletteHome></RouletteHome>
    <Menu></Menu>
  </main>
</template>

<style scoped></style>
