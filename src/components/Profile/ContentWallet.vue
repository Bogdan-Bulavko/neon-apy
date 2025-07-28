<script setup></script>

<template>
  <div class="mt-3 w-full">
    <div
      class="max-w-36 mt-9 m-auto text-center bg-gold-card rounded-xl text-[10px] font-bold"
    >
      Кошелёк привязан
    </div>
    <div class="mt-14">
      <div class="mb-6 flex justify-between">
        <div class="py-2 px-3 flex gap-3 bg-gold-card rounded-2xl">
          <img
            src="../Home/img/money.webp"
            alt="money"
            class="w-9 max-[375px]:w-7 max-[375px]:h-7"
          />
          <div>
            <p class="text-xs font-bold leading-3">На балансе</p>
            <span class="text-sm font-bold text-red-700">30</span>
          </div>
        </div>
        <div class="py-2 px-3 flex gap-3 bg-gold-card rounded-2xl">
          <img
            src="../Home/img/tokencoin.webp"
            alt="tokencoin"
            class="w-9 max-[375px]:w-7 max-[375px]:h-7"
          />
          <div>
            <p class="text-xs font-bold leading-3">На балансе</p>
            <span class="text-sm font-bold text-red-700">150</span>
          </div>
        </div>
      </div>
      <div
        class="pl-5 mb-5 py-1 flex items-center gap-5 bg-gold-card rounded-2xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          class="w-13 h-12"
        >
          <path
            d="M95.4854 189.286C97.7123 193.7 104.023 193.678 106.219 189.248L195.706 8.66413C197.683 4.67601 194.781 0 190.33 0H96.4403H9.7469C5.27729 0 2.37683 4.71173 4.38991 8.70234L95.4854 189.286Z"
            fill="#D9D9D9"
          />
          <path d="M101 192.5L101 0" stroke="white" stroke-width="6" />
        </svg>
        <div>
          <p class="text-xs font-bold leading-3">На балансе</p>
          <span class="text-sm font-bold text-red-700">150</span>
        </div>
      </div>
      <div class="mb-8 py-1 pl-2 flex items-center bg-gold-card rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          class="w-7 h-6"
        >
          <path
            d="M95.4854 189.286C97.7123 193.7 104.023 193.678 106.219 189.248L195.706 8.66413C197.683 4.67601 194.781 0 190.33 0H96.4403H9.7469C5.27729 0 2.37683 4.71173 4.38991 8.70234L95.4854 189.286Z"
            fill="#D9D9D9"
          />
          <path d="M101 192.5L101 0" stroke="white" stroke-width="6" />
        </svg>
        <p class="text-[10px] font-bold leading-3">
          Пополнение кошелька доступно только в TON.
        </p>
      </div>
      <div class="text-center">
        <button class="min-w-45 py-2 mb-5 bg-gold-card rounded-2xl">
          <p class="text-sm font-bold">Пополнить кошелёк</p>
        </button>
        <button class="min-w-45 py-2 mb-5 bg-gold-card rounded-2xl">
          <p class="text-sm font-bold">
            <span class="block"> Подкючить </span
            ><span class="block">личный кошелёк</span>
          </p>
        </button>
        <button class="min-w-45 py-2 mb-5 bg-gold-card rounded-2xl">
          <p class="text-sm font-bold">Вывести</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
