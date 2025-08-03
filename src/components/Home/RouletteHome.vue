<script setup></script>

<template>
  <div class="home__central-content">
    <div class="home__central-content__cybersheild">
      <img src="./img/cybersheild.webp" alt="cybersheild" />
    </div>
    <div class="home__central-content__coin">
      <img src="./img/coin.webp" alt="coin" />
    </div>
    <div class="home__central-content__progress">
      <img src="./img/progress.webp" alt="progress" />
    </div>

    <div class="home__central-content__roulette clip">
      <img
        src="./img/roulette.webp"
        alt="roulette"
        class="home__central-content__roulette__roulette-img"
      />
      <div class="home__central-content__roulette__sector-1">
        <img src="./img/tokencoin.webp" alt="tokencoin" />
        <span>5</span>
      </div>
      <div class="home__central-content__roulette__sector-2">
        <img src="./img/tokencoin.webp" alt="tokencoin" />
        <span>10</span>
      </div>
      <div class="home__central-content__roulette__sector-3">
        <img src="./img/tokencoin.webp" alt="tokencoin" />
        <span>15</span>
      </div>
    </div>

    <div class="home__central-content__roulette__table">
      <div class="home__central-content__roulette__table__profit-information">
        <p>
          <span>Ожидаемая</span>
          <span>прибыль</span>
        </p>
        <div
          class="home__central-content__roulette__table__profit-information__result"
        >
          <div
            class="home__central-content__roulette__table__profit-information__result__currency"
          >
            <img src="./img/currency.png" alt="currency" />
            <span>30</span>
          </div>

          <span
            class="home__central-content__roulette__table__profit-information__result__dollar"
            >$10</span
          >
        </div>
      </div>
      <div
        class="home__central-content__roulette__table__profit-information__result__token"
      >
        <p>Мои токены</p>
        <div>
          <img src="./img/tokencoin.webp" alt="tokencoin" />
          <span>150</span>
        </div>
      </div>
      <div class="home__central-content__roulette__table__button">
        <p>Застейкать</p>
      </div>
    </div>
    <div class="home__central-content__roulette__arrow-button">
      <img src="./img/arrow.png" alt="arrow" />
      <span class="home__central-content__roulette__arrow-button__arrow-text"
        >РУЛЕТКА</span
      >
      <div
        class="home__central-content__roulette__arrow-button__button-container"
      >
        <img src="./img/button.png" alt="button" />
        <p
          class="home__central-content__roulette__arrow-button__button-container__text"
        >
          <span> НАЖМИ </span>
          <span> ЗДЕСЬ </span>
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
