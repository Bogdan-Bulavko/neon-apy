<script setup></script>

<template>
  <div class="hunt__subscription">
    <p class="hunt__subscription__title">Подписка</p>
    <ul class="hunt__subscription__lis">
      <li class="hunt__subscription__list__card">
        <div class="hunt__deadline-sheet__list__item__left">
          <h3>Новобранец</h3>
          <img
            src="./img/rookie.webp"
            alt="rookie"
            class="hunt__deadline-sheet__list__item__left__img-rookie"
          />
          <button>ВЫБРАТЬ</button>
        </div>
        <div class="hunt__deadline-sheet__list__item__right">
          <div class="hunt__deadline-sheet__list__item__right__price-advantage">
            <div
              class="hunt__deadline-sheet__list__item__right__price-advantage__info"
            >
              <span
                class="hunt__deadline-sheet__list__item__right__price-advantage__info__price-text"
                >Цена:</span
              >
              <span
                class="hunt__deadline-sheet__list__item__right__price-advantage__info__price"
                >1 T + <span>3%</span></span
              >
            </div>
            <p>Преймущества:</p>
          </div>
          <ul class="hunt__deadline-sheet__list__item__right__info-list">
            <li
              class="hunt__deadline-sheet__list__item__right__info-list__item"
            >
              <span></span>Кража: 4т/28д * срок +%
            </li>
            <li
              class="hunt__deadline-sheet__list__item__right__info-list__item"
            >
              <span></span>Общие Охоты
            </li>
            <li
              class="hunt__deadline-sheet__list__item__right__info-list__item"
            >
              <span></span>1 охота одновременно
            </li>
          </ul>
          <div class="hunt__deadline-sheet__list__item__right__info">
            <img src="./img/info-subs.png" alt="info-subs" />
            <div>
              <span>Кража из общего банка:</span>
              <span>(4т/28 * [ дней]) + [X]%</span>
            </div>
          </div>
        </div>
      </li>
      <li class="hunt__subscription__list__card">
        <div class="hunt__deadline-sheet__list__item__left">
          <h3>Боец</h3>
          <img
            src="./img/fighter.webp"
            alt="fighter"
            class="hunt__deadline-sheet__list__item__left__img-fighter"
          />
          <button
            class="block py-0.5 w-full border-3 text-[9px] font-bold rounded-full"
          >
            ВЫБРАТЬ
          </button>
        </div>
        <div class="hunt__deadline-sheet__list__item__right">
          <div class="hunt__deadline-sheet__list__item__right__price-advantage">
            <div
              class="hunt__deadline-sheet__list__item__right__price-advantage__info"
            >
              <span
                class="hunt__deadline-sheet__list__item__right__price-advantage__info__price-text"
                >Цена:</span
              >
              <span
                class="hunt__deadline-sheet__list__item__right__price-advantage__info__price"
                >10 T
              </span>
            </div>
            <p>Преймущества:</p>
          </div>
          <ul class="hunt__deadline-sheet__list__item__right__info-list">
            <li
              class="hunt__deadline-sheet__list__item__right__info-list__item"
            >
              <span></span>Кража: 8т/28д * срок + 15%
            </li>
            <li
              class="hunt__deadline-sheet__list__item__right__info-list__item"
            >
              <span></span>Редкие Охоты + Приоритет
            </li>
            <li
              class="hunt__deadline-sheet__list__item__right__info-list__item"
            >
              <span></span>3 охоты одновременно
            </li>
          </ul>
          <div class="hunt__deadline-sheet__list__item__right__info">
            <img src="./img/info-subs.png" alt="info-subs" />
            <div>
              <span>Приоритет: ваши заявки</span>
              <span>обрабатываются первыми. База</span>
              <span>кражи увеличена.</span>
            </div>
          </div>
        </div>
      </li>
      <li class="hunt__subscription__list__card">
        <div class="hunt__deadline-sheet__list__item__left">
          <h3>Ветеран</h3>
          <img
            src="./img/veteran.webp"
            alt="veteran"
            class="hunt__deadline-sheet__list__item__left__img-veteran"
          />
          <button>ВЫБРАТЬ</button>
        </div>
        <div class="hunt__deadline-sheet__list__item__right">
          <div class="hunt__deadline-sheet__list__item__right__price-advantage">
            <div
              class="hunt__deadline-sheet__list__item__right__price-advantage__info"
            >
              <span
                class="hunt__deadline-sheet__list__item__right__price-advantage__info__price-text"
                >Цена:</span
              >
              <span
                class="hunt__deadline-sheet__list__item__right__price-advantage__info__price"
                >100 T
              </span>
            </div>
            <p>Преймущества:</p>
          </div>
          <ul class="hunt__deadline-sheet__list__item__right__info-list">
            <li
              class="hunt__deadline-sheet__list__item__right__info-list__item"
            >
              <span></span>Кража: 20т/28д * срок + 50%
            </li>
            <li
              class="hunt__deadline-sheet__list__item__right__info-list__item"
            >
              <span></span>Легендарные Охоты + Без очереди
            </li>
            <li
              class="hunt__deadline-sheet__list__item__right__info-list__item"
            >
              <span></span>5 охот + Бонус 1т/день
            </li>
          </ul>
          <div class="hunt__deadline-sheet__list__item__right__info">
            <img src="./img/info-subs.png" alt="info-subs" />
            <div>
              <span>Мгновенный доступ к любым</span>
              <span>охотам. Максимальная база</span>
              <span>кражи и бонусы.</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
