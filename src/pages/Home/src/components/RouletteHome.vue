<script setup></script>

<template>
  <div class="relative w-70 h-87">
    <div class="absolute right-5 top-16 w-18">
      <img src="./public/cybersheild.webp" alt="progress" />
    </div>
    <div class="absolute top-15 left-7 w-19 h-19">
      <img src="./public/coin.webp" alt="progress" />
    </div>
    <div class="absolute ml-auto mr-auto left-0 right-0 w-30 h-29">
      <img src="./public/progress.webp" alt="progress" />
    </div>

    <div
      class="absolute ml-auto mr-auto left-0 right-0 top-[95px] w-58 clip rotate-180 text-base text-[#5c5b5a] font-bold"
    >
      <img src="./public/roulette.webp" alt="roulette" class="h-64 w-58" />
      <div class="absolute bottom-12 right-11 flex items-center rotate-180">
        <img src="./public/tokencoin.webp" alt="" class="w-5" />
        <span>5</span>
      </div>
      <div class="absolute bottom-8 right-21 flex items-center rotate-180">
        <img src="./public/tokencoin.webp" alt="" class="w-5" />
        <span>10</span>
      </div>
      <div class="absolute bottom-12 left-15 flex items-center rotate-180">
        <img src="./public/tokencoin.webp" alt="" class="w-5" />
        <span>15</span>
      </div>
    </div>

    <div
      class="absolute bottom-0 w-full h-43 p-2 bg-[#5c5b5a80] rounded-2xl font-bold"
    >
      <div class="flex items-center gap-2">
        <p class="leading-4">
          <span class="block">Ожидаемая</span>
          <span class="block">прибыль</span>
        </p>
        <div class="w-full flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img src="./public/money.webp" alt="money" class="w-8 h-8" />
            <span>30</span>
          </div>

          <span class="mr-5">$10</span>
        </div>
      </div>
      <div class="mt-4 flex gap-2">
        <p>Мои токены</p>
        <div class="flex gap-1">
          <img src="./public/tokencoin.webp" alt="tokencoin" class="w-8 h-8" />
          <span>150</span>
        </div>
      </div>
      <div
        class="absolute bottom-0 w-full left-0 py-4 opacity-40 border-3 border-whie bg-[#5170ff] rounded-2xl"
      >
        <p class="text-center text-2xl">Застейкать</p>
      </div>
    </div>
    <div class="absolute top-27 w-16 h-13 rotate-12">
      <img src="./public/arrow.png" alt="progress" />
      <span class="absolute top-2.5 left-1 text-[#fddc5c] font-bold text-[12px]"
        >РУЛЕТКА</span
      >
      <div class="absolute top-8 w-16 rotate-160">
        <img src="./public/button.png" alt="button" class="h-10" />
        <p
          class="absolute bottom-2 inline-block text-center text-[9px] leading-3 rotate-180"
        >
          НАЖМИ ЗДЕСЬ
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clip {
  clip-path: inset(175px 0 0 0);
}
</style>
