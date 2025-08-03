<script setup></script>

<template>
  <div class="profile__wallet">
    <div class="profile__wallet__status">Кошелёк привязан</div>
    <div class="profile__wallet__info-profit">
      <div class="profile__wallet__info-profit__container">
        <div class="profile__wallet__info-profit__card">
          <img src="../Home/img/money.webp" alt="money" />
          <div class="profile__wallet__info-profit__card__info">
            <p>На балансе</p>
            <span>30</span>
          </div>
        </div>
        <div class="profile__wallet__info-profit__card">
          <img src="../Home/img/tokencoin.webp" alt="tokencoin" />
          <div class="profile__wallet__info-profit__card__info">
            <p>На балансе</p>
            <span>150</span>
          </div>
        </div>
      </div>
      <div class="profile__wallet__info-profit__token">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M95.4854 189.286C97.7123 193.7 104.023 193.678 106.219 189.248L195.706 8.66413C197.683 4.67601 194.781 0 190.33 0H96.4403H9.7469C5.27729 0 2.37683 4.71173 4.38991 8.70234L95.4854 189.286Z"
            fill="#D9D9D9"
          />
          <path d="M101 192.5L101 0" stroke="white" stroke-width="6" />
        </svg>

        <div class="profile__wallet__info-profit__card__info">
          <p>На балансе</p>
          <span>150</span>
        </div>
      </div>
      <div class="profile__wallet__info-profit__token">
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
        <p class="profile__wallet__info-profit__card__info">
          Пополнение кошелька доступно только в TON.
        </p>
      </div>
      <div>
        <button class="profile__wallet__actions__card">
          <p>Пополнить кошелёк</p>
        </button>
        <button class="profile__wallet__actions__card">
          <p>
            <span class="block"> Подкючить </span
            ><span class="block">личный кошелёк</span>
          </p>
        </button>
        <button class="profile__wallet__actions__card">
          <p>Вывести</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
