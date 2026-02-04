<template>
  <main class="home">
    <UiHomeHero />
    <section class="why">
      <UiSectionHeader
        :label="$t('home.why.label')"
        :title="$t('home.why.title')"
        :subtitle="$t('home.why.subtitle')"
      />
      <ul class="why__list">
        <li v-for="(item, i) in whyItems" :key="i" class="why__item">
          <div class="why__item-top">
            <UiPicture :src="item.image" alt="banner" class="why__item-top-banner" />
            <h3 class="why__item-top-title heading-md">
              {{ item['image-title'] }}
            </h3>
            <p class="why__item-top-text">
              {{ item['image-title'] }}
            </p>
          </div>
          <div class="why__item-content">
            <h4 class="why__item-content-title">
              {{ item.title }}
            </h4>
            <p class="why__item-content-text body-l">
              {{ item.subtitle }}
            </p>
          </div>
          <ul class="why__item-list">
            <li v-for="card in item.info" :key="card.amount" class="why__item-item">
              <h5 class="why__item-item-title">{{ card.title }}</h5>
              <p class="why__item-item-amount heading-md">
                {{ card.amount }}
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <section class="demand">
      <UiSectionHeader
        :label="$t('home.demand.label')"
        :title="$t('home.demand.title')"
        :subtitle="$t('home.demand.subtitle')"
      />
      <ul class="demand__list">
        <li
          v-for="(item, i) in demandItems"
          :key="i"
          class="demand__item"
          :style="`--theme: ${item.color}`"
        >
          <div class="demand__item-top">
            <div class="demand__item-top-box">
              <component :is="item.icon" class="demand__item-top-icon" />
            </div>
            <h3 class="demand__item-top-title">{{ item.title }}</h3>
            <p class="body-md">{{ item.subtitle }}</p>
          </div>
          <button class="demand__item-button">
            <span>{{ item.label }}</span>
            <IconsArrowRight class="demand__item-arrow" />
          </button>
        </li>
      </ul>
      <button class="demand__button button--white">
        {{ $t('explore-all-sectors') }}
      </button>
    </section>
    <section class="trade">
      <UiPicture src="background-splash.png" alt="splash" class="trade__bg" />
      <UiSectionHeader
        class="trade__header"
        :label="$t('home.trade.label')"
        :title="$t('home.trade.title')"
        :subtitle="$t('home.trade.subtitle')"
      />
      <ul class="trade__list">
        <li v-for="(item, i) in tradeItems" :key="i" class="trade__item">
          <div class="trade__item-box">
            <IconsTradeLogo class="trade__item-icon" />
          </div>
          <div class="trade__item-content">
            <h3 class="trade__item-title">{{ item.title }}</h3>
            <p class="body-md">{{ item.subtitle }}</p>
          </div>
          <ul class="trade__item-labels">
            <li v-for="label in item.labels" :key="label" class="trade__item-label">
              {{ label }}
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <section class="roadmap">
      <UiSectionHeader
        class="roadmap__header"
        :label="$t('home.roadmap.label')"
        :title="$t('home.roadmap.title')"
        :subtitle="$t('home.roadmap.subtitle')"
      />
      <ul class="roadmap__list">
        <li class="roadmap__item"></li>
      </ul>
    </section>
  </main>
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
const demandSupply = [
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

const whyItems = computed(() => useMapRt('home.why.cards'));
const demandItems = computed(() =>
  useMapRt('home.demand.cards').map((el, i) => ({
    ...el,
    ...demandSupply[i]
  }))
);
const tradeItems = computed(() => useMapRt('home.trade.cards'));
</script>

<style lang="scss" scoped>
.roadmap {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-inline: var(--spacing-inline);
  border-radius: 2rem;
  border: 1px solid var(--orgn-100, #fbe5d0);
  background: #fefefe;
  box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
  padding: 4rem;
  &__header {
    max-width: 57%;
  }
}
.trade {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-inline: var(--spacing-inline);
  border-radius: 2rem;
  border: 1px solid var(--orgn-100, #fbe5d0);
  background: #fefefe;
  box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
  padding: 4rem;
  position: relative;
  &__bg {
    position: absolute;
    width: 123%;
    left: 50%;
    translate: -50%;
    top: -8%;
    z-index: -1;
  }
  &__header {
    max-width: 57%;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
  }
  &__item {
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.4rem;
    border-radius: 1.6rem;
    border: 1px solid var(--orgn-100, #fbe5d0);
    background: var(--orgn-50, #fdf2e7);
    box-shadow:
      0 1px 3px 0 rgba(28, 32, 43, 0.05),
      0 1px 2px 0 rgba(28, 32, 43, 0.04);
    transition:
      border 0.4s,
      box-shadow 0.4s;
    &:hover {
      border-color: #f4b071;
      box-shadow: 0 52px 60px -31px rgba(242, 131, 5, 0.3);
    }
    &-labels {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 6px;
    }
    &-label {
      padding: 0.8rem 1.2rem;
      border-radius: 1rem;
      background: #fff;
      color: #ed7e17;
      font-family: vars.$font-inter;
      font-size: 1.4rem;
      font-weight: 500;
    }
    &-title {
      color: var(--orgn-800, #5f3207);
      font-size: 1.8rem;
      font-weight: 800;
      line-height: 130%;
    }
    p {
      --text-clr: #353849;
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    &-box {
      @include mix.flex-center;
      width: 5.6rem;
      height: 5.6rem;
      background-color: #ed7e17;
      border-radius: 0.6rem;
      outline: 0.7px solid var(--Gray-50, #eeeff2);
      outline-offset: 4px;
      box-shadow: 0px 0px 0px 4px #fff;
    }
    &-icon {
      width: 80%;
    }
  }
}
.demand {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-inline: var(--spacing-inline);
  &__button {
    align-self: center;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 2rem;
  }
  &__item {
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    border: 1px solid var(--orgn-100, #fbe5d0);
    background: #fff;
    box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
    &-top {
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
    &-button {
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
    &-arrow {
      fill: currentColor;
      width: 2.4rem;
    }
  }
}
.why {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding-inline: var(--spacing-inline);
  &__item {
    display: flex;
    padding: 2rem;
    flex-direction: column;
    gap: 1.6rem;
    border-radius: 2rem;
    border: 2px solid var(--orgn-100, #fbe5d0);
    background: var(--Neutral-White-50, #fefefe);
    box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
    &-top {
      aspect-ratio: 57.3/36.6;
      position: relative;
      overflow: hidden;
      border-radius: 1.4rem;
      border: 1px solid var(--orgn-100, #fbe5d0);

      box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      gap: 0.8rem;
      padding: 3rem;

      & > *:not(.why__item-top-banner) {
        z-index: 1;
      }
      &-text {
        font-family: vars.$font-inter;
        line-height: 130%;
        color: #e8e9eb;
      }
      &-banner {
        position: absolute;
        inset: 0;
        &::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);
        }
      }
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      &-title {
        color: #5f3207;
        font-weight: 800;
        font-size: 2rem;
        line-height: 150%;
      }
    }
    &-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.6rem;
    }
    &-item {
      display: flex;
      padding: 2rem;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1.2rem;
      border-radius: 1.4rem;
      background: var(--orgn-50, #fdf2e7);
      &-amount {
        --text-clr: #ed7e17;
      }
      &-title {
        color: #5f3207;
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 130%;
      }
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
  }
}
.home {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}
</style>
