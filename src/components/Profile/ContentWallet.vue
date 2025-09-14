<script setup>
import { TonConnectButton } from '@townsquarelabs/ui-vue';
import { useTonWallet } from '@townsquarelabs/ui-vue';
import { ref, watch } from 'vue';

import WaletInfoBalance from './WaletInfoBalance.vue';
import WaletInfoHistory from './WaletInfoHistory.vue';
import WaletInfoPoints from './WaletInfoPoints.vue';

const wallet = useTonWallet();

const walletConectedTitle = ref('Кошелёк');
const walletConectedActiveBlock = ref('wallet');

const changeActiveBlockWallet = (value) => {
  switch (value) {
    case 'send':
      walletConectedTitle.value = 'Отправить';
      walletConectedActiveBlock.value = value;
      break;
    case 'pay':
      walletConectedTitle.value = 'Купить';
      walletConectedActiveBlock.value = value;
      break;
    case 'history':
      walletConectedTitle.value = 'История';
      walletConectedActiveBlock.value = value;
      break;
    case 'points':
      walletConectedTitle.value = 'Поинты';
      walletConectedActiveBlock.value = value;
      break;
  }
};
</script>

<template>
  <!-- <div class="profile__wallet">
    <div class="profile__wallet__status">Кошелёк привязан</div>
    <div class="profile__wallet__info-profit">
      <div class="profile__wallet__info-profit__container">
        <div class="profile__wallet__info-profit__card">
          <img src="../Home/img/currency.png" alt="ton money" />
          <div class="profile__wallet__info-profit__card__info">
            <p>На балансе</p>
            <span>{{ balanceTonWallet }}</span>
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
      <div class="profile__wallet__button-wallet">
        <TonConnectButton></TonConnectButton>
      </div>
    </div>
  </div> -->
  <div class="profile__wallet-conect" v-if="wallet === null">
    <h1 class="profile__wallet-conect__title">
      Подключай TON кошелёк и выводи свою крипту
    </h1>
    <div class="profile__wallet__button-wallet">
      <TonConnectButton></TonConnectButton>
    </div>
  </div>

  <div class="profile__wallet-conected" v-else>
    <div class="profile__wallet-conected__header">
      <div class="profile__wallet-conected__header__title">
        {{ walletConectedTitle }}
      </div>
      <div class="profile__wallet-conected__button-wallet">
        <TonConnectButton></TonConnectButton>
      </div>
    </div>

    <h1 class="profile__wallet-conected__title">$ Balance</h1>
    <ul class="profile__wallet-conected__wallet-actions">
      <li
        class="profile__wallet-conected__wallet-action"
        @click="changeActiveBlockWallet('send')"
      >
        <span
          class="profile__wallet-conected__wallet-action--container"
          :class="{
            'wallet__active-action': walletConectedActiveBlock === 'send',
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 8 12"
            fill="none"
          >
            <path
              d="M3.5 11C3.5 11.2761 3.72386 11.5 4 11.5C4.27614 11.5 4.5 11.2761 4.5 11H4H3.5ZM4.35355 0.646447C4.15829 0.451184 3.84171 0.451184 3.64645 0.646447L0.464466 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646447ZM4 11H4.5L4.5 1H4H3.5L3.5 11H4Z"
              fill="white"
            />
          </svg>
        </span>
        <p>Отправить</p>
      </li>
      <li
        class="profile__wallet-conected__wallet-action"
        @click="changeActiveBlockWallet('pay')"
      >
        <span
          class="profile__wallet-conected__wallet-action--container"
          :class="{
            'wallet__active-action': walletConectedActiveBlock === 'pay',
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 12 10"
            fill="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="11"
              height="9"
              rx="1.5"
              stroke="white"
            />
            <line x1="1" y1="2.5" x2="11" y2="2.5" stroke="white" />
            <line x1="1" y1="3.5" x2="11" y2="3.5" stroke="white" />
            <line x1="2" y1="6.5" x2="5" y2="6.5" stroke="white" />
          </svg>
        </span>
        <p>Купить</p>
      </li>
      <li
        class="profile__wallet-conected__wallet-action"
        @click="changeActiveBlockWallet('history')"
      >
        <span
          class="profile__wallet-conected__wallet-action--container"
          :class="{
            'wallet__active-action': walletConectedActiveBlock === 'history',
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 13 13"
            fill="none"
          >
            <circle cx="6.5" cy="6.5" r="6" stroke="white" />
            <line x1="6.5" y1="7" x2="6.5" y2="2" stroke="white" />
            <line x1="6" y1="6.5" x2="11" y2="6.5" stroke="white" />
          </svg>
        </span>
        <p>История</p>
      </li>
      <li
        class="profile__wallet-conected__wallet-action"
        @click="changeActiveBlockWallet('points')"
      >
        <span
          class="profile__wallet-conected__wallet-action--container"
          :class="{
            'wallet__active-action': walletConectedActiveBlock === 'points',
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M12.5 0C12.5 0 14.309 7.49085 15.9091 9.09091C17.5092 10.691 25 12.5 25 12.5C25 12.5 17.3124 14.5057 15.9091 15.9091C14.5057 17.3124 12.5 25 12.5 25C12.5 25 10.4222 17.2404 9.09091 15.9091C7.75958 14.5778 0 12.5 0 12.5C0 12.5 7.75958 10.4222 9.09091 9.09091C10.4222 7.75958 12.5 0 12.5 0Z"
              fill="white"
            />
          </svg>
        </span>
        <p>Поинты</p>
      </li>
    </ul>
    <div class="profile__wallet-conected__content">
      <WaletInfoBalance v-if="walletConectedActiveBlock === 'wallet'" />
      <WaletInfoHistory v-else-if="walletConectedActiveBlock === 'history'" />
      <WaletInfoPoints v-else-if="walletConectedActiveBlock === 'points'" />
    </div>
  </div>
</template>

<style scoped></style>
