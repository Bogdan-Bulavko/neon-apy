<script setup></script>

<template>
  <div class="relative m-auto w-70 h-72">
    <div class="absolute right-5 top-16 w-18">
      <img src="./img/cybersheild.webp" alt="cybersheild" />
    </div>
    <div class="absolute top-12 left-8 w-19 h-19">
      <img src="./img/coin.webp" alt="coin" />
    </div>
    <div class="absolute ml-auto mr-auto left-0 right-0 w-30">
      <img
        src="./img/progress.webp"
        alt="progress"
        class="h-[116px] w-[123px]"
      />
    </div>

    <div
      class="absolute top-[86px] left-8.5 w-58 rotate-180 clip text-base text-[#5c5b5a] font-bold"
    >
      <img src="./img/roulette.webp" alt="roulette" class="h-65 w-58" />
      <div class="absolute bottom-11 right-11 flex items-center rotate-180">
        <img src="./img/tokencoin.webp" alt="tokencoin" class="w-4" />
        <span class="text-[14px]">5</span>
      </div>
      <div class="absolute bottom-9 right-22 flex items-center rotate-180">
        <img src="./img/tokencoin.webp" alt="tokencoin" class="w-4" />
        <span class="text-[14px]">10</span>
      </div>
      <div class="absolute bottom-12 left-17 flex items-center rotate-180">
        <img src="./img/tokencoin.webp" alt="tokencoin" class="w-4" />
        <span class="text-[14px]">15</span>
      </div>
    </div>

    <div
      class="w-[235px] absolute left-[50%] -translate-x-1/2 -bottom-3 h-37 p-2 bg-[#5c5b5a80] rounded-2xl font-bold"
    >
      <div class="flex items-center gap-3">
        <p class="leading-4">
          <span class="block">Ожидаемая</span>
          <span class="block">прибыль</span>
        </p>
        <div class="w-full flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img src="./img/currency.png" alt="money" class="w-7 h-7" />
            <span>30</span>
          </div>

          <span class="mr-5">$10</span>
        </div>
      </div>
      <div class="mt-3 flex gap-3">
        <p>Мои токены</p>
        <div class="flex gap-1">
          <img src="./img/tokencoin.webp" alt="tokencoin" class="w-7 h-7" />
          <span>150</span>
        </div>
      </div>
      <div
        class="absolute bottom-0 w-full left-0 py-3 border-3 border-whie bg-gold rounded-2xl"
      >
        <p class="text-center text-2xl">Застейкать</p>
      </div>
    </div>
    <div class="absolute left-2 top-23 w-16 h-13 rotate-12">
      <img src="./img/arrow.png" alt="arrow" />
      <span class="absolute top-2.5 left-1 text-gold font-bold text-[12px]"
        >РУЛЕТКА</span
      >
      <div class="absolute top-8 w-16 rotate-160">
        <img src="./img/button.png" alt="button" class="h-7" />
        <p
          class="absolute bottom-2 left-4 text-center text-[8px] leading-2 rotate-192"
        >
          <span class="block"> НАЖМИ </span>
          <span class="block"> ЗДЕСЬ </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clip {
  clip-path: inset(193px 0 0 0);
}
</style>
