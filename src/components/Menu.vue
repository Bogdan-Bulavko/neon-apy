<script setup></script>

<template>
  <menu class="absolute bottom-0 right-0 left-0">
    <div>
      <ul class="flex justify-center">
        <li class="relative -translate-x-30 max-[375px]:-translate-x-25">
          <img src="../public/die.webp" alt="" class="h-14 min-w-70" />
          <img
            src="../public/money-turnover.webp"
            alt="money-turnover"
            class="w-11 absolute top-1 right-3"
          />
        </li>
        <li class="relative translate-x-30 max-[375px]:translate-x-25">
          <RouterLink to="/profile/">
            <img src="../public/die.webp" alt="" class="h-14 min-w-70" />
            <img
              src="../public/friends.webp"
              alt="friends"
              class="w-11 absolute top-1 left-3"
            />
          </RouterLink>
        </li>
      </ul>
      <ul class="flex justify-center">
        <li class="relative -translate-x-30 max-[375px]:-translate-x-25">
          <RouterLink to="/">
            <img src="../public/die.webp" alt="" class="h-14 min-w-70" />
            <img
              src="../public/home.webp"
              alt="home"
              class="w-11 h-11 absolute top-1 right-3"
            />
          </RouterLink>
        </li>
        <li class="relative translate-x-30 max-[375px]:translate-x-25">
          <img src="../public/die.webp" alt="" class="h-14 min-w-70" />
          <img
            src="../public/wallet.webp"
            alt="wallet"
            class="w-11 absolute top-1 left-3"
          />
        </li>
      </ul>
      <div class="relative">
        <img
          src="../public/lion-trail.webp"
          alt="hunting"
          class="block w-21 m-auto"
        />
        <p
          class="absolute top-13 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base text-[#99abff] text-shadow-xs text-shadow-blue-950 text-stroke-blue"
        >
          Охота
        </p>
      </div>
    </div>
  </menu>
</template>

<style scoped>
.text-stroke-blue {
  -webkit-text-stroke: 1px #3b82f6; /* blue-500 */
}
</style>
