<script setup>
import { ref } from 'vue';

const returnDate = () => {
  return Date.parse(new Date('2025 9 14')) - Date.parse(new Date());
};

const timer = ref({
  days: Math.floor(returnDate() / (3600000 * 24)),
  hours: Math.floor(returnDate() / 3600000) % 24,
  minutes: Math.floor(returnDate() / 60000) % 60,
  seconds: Math.floor(returnDate() / 1000) % 60,
});

const interval = setInterval(() => {
  const date = returnDate();

  timer.value.days = Math.floor(Math.floor(date / (3600000 * 24)));
  timer.value.hours = Math.floor(date / 3600000) % 24;
  timer.value.minutes = Math.floor(date / 60000) % 60;
  timer.value.seconds = Math.floor(date / 1000) % 60;

  if (date <= 0) {
    clearInterval(interval);
  }
}, 1000);
</script>

<template>
  <div class="home__timer">
    <div>
      <p class="home__timer__time">
        {{ timer.days > 9 ? timer.days : `0${timer.days}` }}
      </p>
      <p class="home__timer__comment">Дней</p>
    </div>

    <span class="home__timer__disintegrator-time">:</span>
    <div>
      <p class="home__timer__time">
        {{ timer.hours > 9 ? timer.hours : `0${timer.hours}` }}
      </p>
      <p class="home__timer__comment">Часов</p>
    </div>

    <span class="home__timer__disintegrator-time">:</span>
    <div>
      <p class="home__timer__time">
        {{ timer.minutes > 9 ? timer.minutes : `0${timer.minutes}` }}
      </p>
      <p class="home__timer__comment">Минут</p>
    </div>

    <span class="home__timer__disintegrator-time">:</span>
    <div>
      <p class="home__timer__time">
        {{ timer.seconds > 9 ? timer.seconds : `0${timer.seconds}` }}
      </p>
      <p class="home__timer__comment">Секунд</p>
    </div>
  </div>
</template>

<style scoped></style>
