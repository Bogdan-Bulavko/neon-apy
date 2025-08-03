<script setup></script>

<template>
  <menu class="home__menu">
    <div class="home__menu__container">
      <div class="home__menu__left__button">
        <img src="../public/die.webp" class="home__menu__button__die" />
        <img
          src="../public/money-turnover.webp"
          alt="money-turnover"
          class="home__menu__button__icon-left"
        />
      </div>
      <RouterLink class="home__menu__button__hunt" to="/hunt/">
        Охота
      </RouterLink>
      <RouterLink to="/profile/" class="home__menu__right__button">
        <img src="../public/die.webp" class="home__menu__button__die" />
        <img
          src="../public/friends.webp"
          alt="friends"
          class="home__menu__button__icon-right"
        />
      </RouterLink>
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

<style scoped></style>
