<script setup></script>

<template>
  <div class="mt-2">
    <p class="mb-1 pl-3 font-bold">Подписка</p>
    <ul>
      <li class="mb-2 flex bg-blue-home rounded-lg">
        <div class="pt-1 mr-1 w-35 flex flex-col items-center">
          <h3 class="text-[12px] font-bold">Новобранец</h3>
          <img
            src="./public/rookie.webp"
            alt="rookie"
            class="mb-2 w-11 text-center"
          />
          <button
            class="block py-0.5 w-full border-3 text-[9px] font-bold rounded-full"
          >
            ВЫБРАТЬ
          </button>
        </div>
        <div>
          <div class="pl-3.5 text-xs text-[#00bf63] font-bold">
            <div class="flex items-center">
              <span class="mr-4">Цена:</span>
              <span class="text-lg text-white"
                >1 T + <span class="text-red-600">3%</span></span
              >
            </div>
            <p class="leading-0">Преймущества:</p>
          </div>
          <ul class="mt-3">
            <li class="flex items-center text-[7px] font-bold">
              <span
                class="mr-1 inline-block w-2 h-2 rounded-full bg-black"
              ></span
              >Кража: 4т/28д * срок +%
            </li>
            <li class="flex items-center text-[7px] font-bold">
              <span
                class="mr-1 inline-block w-2 h-2 rounded-full bg-black"
              ></span
              >Общие Охоты
            </li>
            <li class="flex items-center text-[7px] font-bold">
              <span
                class="mr-1 inline-block w-2 h-2 rounded-full bg-black"
              ></span
              >1 охота одновременно
            </li>
          </ul>
          <div class="mt-2 flex items-center">
            <img
              src="./public/info-subs.png"
              alt="info-subs"
              class="mr-1 w-2 h-4"
            />
            <div class="text-[7px] font-bold">
              <span class="block">Кража из общего банка:</span>
              <span class="block">(4т/28 * [ дней]) + [X]%</span>
            </div>
          </div>
        </div>
      </li>
      <li class="mb-2 flex bg-blue-home rounded-lg">
        <div class="pt-1 mr-1 w-35 flex flex-col items-center">
          <h3 class="text-[12px] font-bold">Боец</h3>
          <img
            src="./public/fighter.webp"
            alt="fighter"
            class="mb-2 w-16 h-14 text-center"
          />
          <button
            class="block py-0.5 w-full border-3 text-[9px] font-bold rounded-full"
          >
            ВЫБРАТЬ
          </button>
        </div>
        <div>
          <div class="pl-3.5 text-xs text-[#00bf63] font-bold">
            <div class="flex items-center">
              <span class="mr-4">Цена:</span>
              <span class="text-lg text-white">10 T </span>
            </div>
            <p class="leading-0">Преймущества:</p>
          </div>
          <ul class="mt-3">
            <li class="flex items-center text-[7px] font-bold">
              <span
                class="mr-1 inline-block w-2 h-2 rounded-full bg-black"
              ></span
              >Кража: 8т/28д * срок + 15%
            </li>
            <li class="flex items-center text-[7px] font-bold">
              <span
                class="mr-1 inline-block w-2 h-2 rounded-full bg-black"
              ></span
              >Редкие Охоты + Приоритет
            </li>
            <li class="flex items-center text-[7px] font-bold">
              <span
                class="mr-1 inline-block w-2 h-2 rounded-full bg-black"
              ></span
              >3 охоты одновременно
            </li>
          </ul>
          <div class="mt-1 flex items-center">
            <img
              src="./public/info-subs.png"
              alt="info-subs"
              class="mr-1 w-2 h-4"
            />
            <div class="text-[7px] font-bold">
              <span class="block">Приоритет: ваши заявки</span>
              <span class="block">обрабатываются первыми. База</span>
              <span class="block">кражи увеличена.</span>
            </div>
          </div>
        </div>
      </li>
      <li class="mb-2 flex bg-blue-home rounded-lg">
        <div class="pt-1 mr-1 w-35 flex flex-col items-center">
          <h3 class="text-[12px] font-bold">Ветеран</h3>
          <img
            src="./public/veteran.webp"
            alt="veteran"
            class="mb-2 w-20 h-14 text-center"
          />
          <button
            class="block py-0.5 w-full border-3 text-[9px] font-bold rounded-full"
          >
            ВЫБРАТЬ
          </button>
        </div>
        <div>
          <div class="pl-3.5 text-xs text-[#00bf63] font-bold">
            <div class="flex items-center">
              <span class="mr-4">Цена:</span>
              <span class="text-lg text-white">100 T </span>
            </div>
            <p class="leading-0">Преймущества:</p>
          </div>
          <ul class="mt-3">
            <li class="flex items-center text-[7px] font-bold">
              <span
                class="mr-1 inline-block w-2 h-2 rounded-full bg-black"
              ></span
              >Кража: 20т/28д * срок + 50%
            </li>
            <li class="flex items-center text-[7px] font-bold">
              <span
                class="mr-1 inline-block w-2 h-2 rounded-full bg-black"
              ></span
              >Легендарные Охоты + Без очереди
            </li>
            <li class="flex items-center text-[7px] font-bold">
              <span
                class="mr-1 inline-block w-2 h-2 rounded-full bg-black"
              ></span
              >5 охот + Бонус 1т/день
            </li>
          </ul>
          <div class="mt-1 flex items-center">
            <img
              src="./public/info-subs.png"
              alt="info-subs"
              class="mr-1 w-2 h-4"
            />
            <div class="text-[7px] font-bold">
              <span class="block">Мгновенный доступ к любым</span>
              <span class="block">охотам. Максимальная база</span>
              <span class="block">кражи и бонусы.</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
