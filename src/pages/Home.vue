<script setup>
import HeaderHome from '../components/Home/HeaderHome.vue';
import Menu from '../components/Menu.vue';
import RouletteHome from '../components/Home/RouletteHome.vue';
import TimerHome from '../components/Home/TimerHome.vue';
import TotalBank from '../components/Home/TotalBank.vue';
</script>

<template>
  <main class="relative min-h-dvh overflow-hidden text-white font-sans">
    <div class="absolute inset-0 z-0">
      <div
        class="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl animate-glow"
      ></div>
      <div
        class="absolute inset-0 bg-fog bg-repeat opacity-10 animate-fog"
      ></div>
    </div>

    <!-- Контент -->
    <div class="relative z-10 max-w-90 m-auto px-7 pt-7">
      <HeaderHome />
      <TimerHome />
      <TotalBank />
      <RouletteHome />
    </div>

    <Menu class="relative z-10" />
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

<style scoped>
@import 'tailwindcss';

@keyframes glow {
  0%,
  100% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1.05);
  }
}

@keyframes fog {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -1000px 0;
  }
}

.animate-glow {
  animation: glow 10s ease-in-out infinite;
}

.animate-fog {
  animation: fog 60s linear infinite;
}

.bg-fog {
  background-image: url('../public/abstraktnyi-dizain-fona-oboev-temnyi-dizain.jpg'); /* положи сюда PNG с дымкой или текстурой */
  background-size: cover;
}
</style>
