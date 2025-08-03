<script setup>
import { ref, onMounted } from 'vue';

// Целевое значение
const dataTotalBank = 2014634;
const countTotalBank = ref(0);

// Форматирование числа с пробелами (например: 20 146 129)
const formatNumber = (num) => {
  return new Intl.NumberFormat('ru-RU').format(num);
};

// Анимация счётчика
const startCounter = () => {
  const duration = 2000;
  const startTime = performance.now();

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // 0 → 1

    // ease-out кубическая функция — быстрое начало, медленное завершение
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    // Вычисляем текущее значение
    let value = Math.floor(easedProgress * dataTotalBank);

    // В конце — гарантируем точное значение
    if (progress === 1) {
      value = dataTotalBank;
    }

    countTotalBank.value = value;

    // Продолжаем, пока не завершено
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

// Запуск анимации при монтировании
onMounted(() => {
  startCounter();
});
</script>

<template>
  <div class="home__total-bank">
    <p class="home__total-bank__paragraph glowing-text">
      {{ formatNumber(countTotalBank) }}
    </p>
    <p>Общий банк</p>
  </div>
</template>

<style scoped>
.glowing-text {
  background-size: 200% 200%;
  background-position: center;
  animation: moon-glow 4s ease-in-out infinite;
  filter: brightness(1.1);
  text-shadow: 0 0 4px rgba(255, 255, 150, 0.4),
    0 0 8px rgba(255, 255, 180, 0.2), 0 0 12px rgba(255, 240, 200, 0.1);
}

@keyframes moon-glow {
  0%,
  100% {
    text-shadow: 0 0 4px rgba(255, 255, 150, 0.4),
      0 0 8px rgba(255, 255, 180, 0.2), 0 0 12px rgba(255, 240, 200, 0.1);
  }
  50% {
    text-shadow: 0 0 6px rgba(255, 255, 180, 0.5),
      0 0 12px rgba(255, 255, 200, 0.3), 0 0 16px rgba(255, 255, 220, 0.2);
  }
}
</style>
