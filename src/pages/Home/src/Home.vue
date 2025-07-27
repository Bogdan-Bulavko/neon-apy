<script setup>
import HeaderHome from './HeaderHome.vue';
import Menu from '../../../components/Menu.vue';
import RouletteHome from './RouletteHome.vue';
import TimerHome from './TimerHome.vue';
import TotalBank from './TotalBank.vue';
</script>

<template>
  <div
    class="pb-52 relative p-7 max-[425px]:min-h-dvh bg-radial from-blue-home from-40% to-black overflow-hidden"
  >
    <HeaderHome></HeaderHome>
    <TimerHome></TimerHome>
    <TotalBank></TotalBank>
    <RouletteHome></RouletteHome>
    <Menu></Menu>
  </div>
</template>

<style scoped></style>
