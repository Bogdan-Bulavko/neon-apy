<script setup></script>

<template>
  <menu class="pb-1 absolute bottom-0 right-0 left-0 overflow-x-hidden">
    <div class="flex justify-between items-end">
      <div class="relative -translate-x-18 max-[375px]:-translate-x-15">
        <img src="../public/die.webp" alt="" class="h-14 w-70" />
        <img
          src="../public/money-turnover.webp"
          alt="money-turnover"
          class="w-9 h-9 absolute top-2 right-2"
        />
      </div>
      <div class="min-w-21">
        <img
          src="../public/lion-trail.webp"
          alt="hunting"
          class="block w-21 m-auto"
        />
        <p
          class="absolute top-13 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base text-[#99abff] text-shadow-xs text-shadow-gold text-stroke-blue"
        >
          Охота
        </p>
      </div>
      <div class="relative translate-x-18 max-[375px]:translate-x-15">
        <RouterLink to="/profile/">
          <img src="../public/die.webp" alt="" class="h-14 w-70" />
          <img
            src="../public/friends.webp"
            alt="friends"
            class="w-9 h-9 absolute top-2 left-2"
          />
        </RouterLink>
      </div>
      <!-- <ul class="flex justify-center">
        <li class="relative -translate-x-35 max-[375px]:-translate-x-27">
          <RouterLink to="/">
            <img src="../public/die.webp" alt="" class="h-14 w-70" />
            <img
              src="../public/home.webp"
              alt="home"
              class="w-9 h-9 absolute top-2 right-2"
            />
          </RouterLink>
        </li>
        <li class="relative translate-x-35 max-[375px]:translate-x-27">
          <img src="../public/die.webp" alt="" class="h-14 w-70" />
          <img
            src="../public/wallet.webp"
            alt="wallet"
            class="w-9 h-9 absolute top-2 left-2"
          />
        </li>
      </ul> -->
    </div>
  </menu>
</template>

<style scoped>
.text-stroke-blue {
  -webkit-text-stroke: 1px gold;
}
</style>
