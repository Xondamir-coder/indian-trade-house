<template>
  <ul class="info-cards">
    <li v-for="(card, i) in infoCards" :key="i" class="info-card" :style="`--theme: ${card.color}`">
      <div class="info-card__top">
        <div class="info-card__top-box">
          <component :is="card.icon" class="info-card__top-icon" />
        </div>
        <h3 class="info-card__top-title">{{ card.title }}</h3>
        <p class="body-md">{{ card.subtitle }}</p>
      </div>
      <button class="info-card__button">
        <span>{{ card.label }}</span>
        <IconsArrowRight class="info-card__arrow" />
      </button>
    </li>
  </ul>
</template>

<script setup>
import {
  IconsCar,
  IconsSatellite,
  IconsSchema,
  IconsShirt,
  IconsStethoscope,
  IconsTool,
  IconsTractor
} from '#components';

const cardsSupply = [
  {
    icon: IconsTractor,
    color: '#30D158'
  },
  {
    icon: IconsStethoscope,
    color: '#FF9230'
  },
  {
    icon: IconsSchema,
    color: '#00DAC3'
  },
  {
    icon: IconsShirt,
    color: '#0091FF'
  },
  {
    icon: IconsTool,
    color: '#00D2E0'
  },
  {
    icon: IconsCar,
    color: '#6D7CFF'
  },
  {
    icon: IconsSatellite,
    color: '#FF4245'
  },
  {
    icon: IconsShirt,
    color: '#DB34F2'
  }
];
const infoCards = computed(() =>
  useMapRt('info-cards')?.map((el, i) => ({
    ...el,
    ...cardsSupply[i]
  }))
);
</script>

<style lang="scss" scoped>
.info {
  &-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  &-card {
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    border: 1px solid var(--orgn-100, #fbe5d0);
    background: #fff;
    box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
    &__top {
      display: flex;
      padding: 2.4rem;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      align-self: stretch;
      border-bottom: 1px solid var(--Neutral-Blue-50, #e8e9eb);
      &-title {
        color: #5f3207;
        font-size: 2rem;
        font-family: vars.$font-inter;
      }
      &-box {
        @include mix.flex-center;
        width: 5.2rem;
        height: 5.2rem;
        border-radius: 0.8rem;
        outline: 1px solid var(--orgn-100, #fbe5d0);
        outline-offset: 3px;
        background-color: var(--theme);
      }
      &-icon {
        width: 46%;
        fill: none;
      }
    }
    &__button {
      padding-block: 1.6rem;
      padding-bottom: calc(1.6rem + 0.76rem);
      padding-inline: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 600;
      line-height: 100%;
      color: #666c7a;
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
      transition:
        background 0.4s,
        color 0.4s;
      &:hover {
        background-color: var(--theme);
        color: #fff;
      }
    }
    &__arrow {
      fill: currentColor;
      width: 2.4rem;
    }
  }
}
.demand {
  &__item {
  }
}
</style>
