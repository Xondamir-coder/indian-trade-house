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
        <li v-for="(item, i) in roadmapItems" :key="i" class="roadmap__item">
          <div class="roadmap__item-card">
            <div class="roadmap__item-box">
              <div v-if="i % 2 === 0" class="roadmap__item-info">
                <h4>{{ $t('home.roadmap.info.title') }}</h4>
                <div class="roadmap__item-info-boxes">
                  <div
                    v-for="box in $tm('home.roadmap.info.items')"
                    :key="$rt(box.percent)"
                    class="roadmap__item-info-box"
                  >
                    <span class="roadmap__item-info-percent">{{ $rt(box.percent) }}</span>
                    <span class="roadmap__item-info-title">{{ $rt(box.title) }}</span>
                  </div>
                </div>
              </div>
              <div class="roadmap__item-container" />
              <UiPicture
                v-for="img in item.images"
                :key="img"
                :src="img"
                class="roadmap__item-box-pic"
              />
            </div>
            <div class="roadmap__item-bottom">
              <h4 class="roadmap__item-bottom-title">
                {{ item['card-title'] }}
              </h4>
              <p class="roadmap__item-bottom-text">
                {{ item['card-text'] }}
              </p>
            </div>
          </div>
          <div class="roadmap__item-right">
            <div class="roadmap__item-label">
              <span>🔥</span>
              <span>{{ item.label }}</span>
            </div>
            <h3 class="roadmap__item-title">{{ item.title }}</h3>
            <p class="roadmap__item-subtitle">
              {{ item.subtitle }}
            </p>
          </div>
        </li>
      </ul>
      <SvgHomePatterns class="roadmap__patterns" />
    </section>
    <section class="tier">
      <div class="tier__top">
        <UiSectionHeader
          class="tier__header"
          :label="$t('home.tier.label')"
          :title="$t('home.tier.title')"
          :subtitle="$t('home.tier.subtitle')"
        />
        <div class="tier__buttons">
          <button
            v-for="(button, i) in tierButtons"
            :key="button"
            class="tier__button"
            :class="{ active: activeTierButton === i }"
            @click="activeTierButton = i"
          >
            {{ button }}
          </button>
        </div>
      </div>
      <ul class="tier__list">
        <li v-for="(item, i) in tierItems" :key="i" class="tier__item">
          <span class="tier__item-label">{{ item.label }}</span>
          <div class="tier__item-content">
            <div class="tier__item-top">
              <div class="tier__item-amount">
                <span>{{ item.amount }}</span>
                <span>/ qtr</span>
              </div>
              <p class="tier__item-top-text">
                {{ item.subtitle }}
              </p>
            </div>
            <ul class="tier__item-amenities">
              <li v-for="amenity in item.amenities" :key="amenity" class="tier__item-amenity">
                <IconsCheck class="tier__item-icon" />
                <span>{{ amenity }}</span>
              </li>
            </ul>
            <button class="tier__item-button button--orange">
              {{ $t('home.tier.sign') }}
            </button>
          </div>
        </li>
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

const { t } = useI18n();

const activeTierButton = ref(0);

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
const roadmapItems = computed(() => useMapRt('home.roadmap.sections'));
const tierItems = computed(() => useMapRt('home.tier.cards'));
const tierButtons = computed(() => [t('monthly'), t('yearly')]);
</script>

<style lang="scss" scoped>
.tier {
  display: flex;
  padding-inline: var(--spacing-inline);
  flex-direction: column;
  gap: 6rem;
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;
  }
  &__item {
    display: flex;
    padding: 1.6rem;
    flex-direction: column;
    gap: 1.6rem;
    border-radius: 4rem;
    border: 1px solid var(--orgn-200, #f8cba0);
    background: var(--orgn-100, #fbe5d0);
    box-shadow:
      0 -1px 1px 1px rgba(48, 46, 43, 0.1) inset,
      0 8px 12px -6px rgba(44, 36, 26, 0.28);
    transition: all 0.4s;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        var(--orgn-700, #8e4a0b) 0%,
        var(--orgn-400, #f09642) 100%
      );
      opacity: 0;
      border-radius: inherit;
      transition: all 0.4s;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
      box-shadow:
        0 -1px 1px 1px rgba(48, 46, 43, 0.1) inset,
        0 8px 12px -6px rgba(44, 36, 26, 0.28);
      .tier__item-label {
        color: #fff;
      }
    }
    &-button {
      margin-top: auto;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        inset-inline: 0;
        height: 2px;
        background-color: #fbe5d0;
        top: calc(-3.6rem - 1px);
        left: 0;
        pointer-events: none;
      }
    }
    &-content {
      z-index: 2;
      flex: 1;
      padding: 3.2rem;
      display: flex;
      flex-direction: column;
      gap: 3.6rem;
      border-radius: 3.2rem;
      border: 1px solid var(--orgn-200, #f8cba0);
      background: #fff;
      box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
    }
    &-icon {
      width: 2.2rem;
    }
    &-label {
      z-index: 2;
      align-self: center;
      font-family: vars.$font-radio;
      font-weight: 600;
      font-size: 2rem;
      color: var(--orgn-900, #2f1904);
      transition: color 0.4s;
    }
    &-amount {
      font-family: vars.$font-radio;
      font-weight: 600;
      text-align: center;
      span:first-child {
        font-size: 5.3rem;
        letter-spacing: -0.56px;
        color: var(--orgn-950, #180c02);
      }
      span:last-child {
        font-size: 2rem;
        margin-left: 1.2rem;
        color: #636d7d;
      }
    }
    &-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.6rem;
      &-text {
        color: #8e4a0b;
        font-size: 1.7rem;
        font-weight: 500;
      }
    }
    &-amenity {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      font-size: 1.9rem;
      font-weight: 600;
      font-family: vars.$font-inter;
    }
    &-amenities {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      margin-bottom: 3.6rem;
    }
  }
  &__buttons {
    display: flex;
    padding: 0.8rem 1rem;
    align-items: center;
    gap: 0.8rem;
    border-radius: 4rem;
    border: 1px solid var(--orgn-100, #fbe5d0);
    background: #fff;
    box-shadow:
      0 -1px 1px 1px rgba(0, 0, 0, 0.1) inset,
      0 2px 2px -1px rgba(0, 0, 0, 0.08);
  }
  &__header {
    align-items: flex-start;
    text-align: start;
    max-width: 100%;
  }
  &__button {
    display: flex;
    width: 10.4rem;
    height: 3.6rem;
    padding: 0 2rem;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    color: var(--orgn-900, #2f1904);
    font-family: vars.$font-inter;
    font-size: 1.4rem;
    font-weight: 600;
    transition: all 0.4s;
    border-radius: 9.9rem;
    &.active {
      background: var(--orgn-500, #ed7e17);

      /* InnerShad */
      box-shadow: 0 -2px 0 0 rgba(0, 0, 0, 0.1) inset;
      color: #fff;
    }
  }
  &__top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 12px;
  }
}
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
  position: relative;
  & > *:not(.roadmap__patterns) {
    z-index: 1;
  }
  &__patterns {
    position: absolute;
    top: 50%;
    height: 53.75%;
    inset-inline: 0;
    translate: 0 -50%;
  }
  &__header {
    max-width: 57%;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  &__item {
    font-family: vars.$font-inter;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 7.2rem;
    &-container {
      position: absolute;
      inset: 0;
      overflow: hidden;
      border-radius: inherit;
      &::after {
        translate: -90% 50%;
      }
      &::before {
        translate: 47% -38%;
      }
      &::after,
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 120%;
        height: 140%;
        border-radius: 55.8rem;
        opacity: 0.24;
        background: linear-gradient(
          180deg,
          var(--grn-800, #165023) 0%,
          var(--grn-500, #154d22) 100%
        );
        filter: blur(100px);
      }
    }
    &-box {
      position: relative;
      aspect-ratio: 46.4/33;
      background-color: #f9f9f9;
      border-radius: inherit;

      &-pic {
        position: absolute;
      }
    }
    &-bottom {
      display: flex;
      flex-direction: column;
      gap: 8px;
      &-title {
        color: var(--Neutral-Grey-800, #141414);
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 130%;
      }
      &-text {
        color: #515050;
      }
    }
    &-info {
      position: absolute;
      top: 0;
      left: -15%;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      padding: 1.2rem 1.6rem;
      border-radius: 1.6rem;
      border: 1px solid var(--Neutral-White-50, #fefefe);
      background: linear-gradient(
        134deg,
        var(--grn-600, #2ca047) 15.34%,
        var(--grn-400, #5fd37a) 79.59%
      );
      box-shadow: 0 2px 8px 0 rgba(81, 81, 81, 0.06);
      h4 {
        color: var(--Neutral-White-50, #fefefe);
        font-size: 1.4rem;
        font-weight: 600;
        align-self: center;
        text-align: center;
      }
      &-boxes {
        display: flex;
        justify-content: space-between;
        gap: 3.8rem;
      }
      &-box {
        color: var(--Neutral-White-50, #fefefe);
        display: flex;
        flex-direction: column;
      }
      &-percent {
        font-size: 3rem;
        line-height: 130%;
        font-weight: 600;
      }
      &-title {
        font-size: 1.2rem;
        line-height: 150%;
      }
    }
    &-card {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      border-radius: 2rem;
      border: 8px solid var(--Neutral-White-50, #fefefe);
      background: #fbfaf9;

      /* stroke 01 */
      box-shadow:
        0 0 0 1px rgba(3, 7, 18, 0.06),
        0 2px 4px 0 rgba(3, 7, 18, 0.04);
    }
    &-label {
      display: flex;
      padding: 0.6rem 1.6rem;
      align-items: center;
      gap: 0.8rem;
      border-radius: 10rem;
      border: 1px solid var(--orgn-100, #fbe5d0);
      background: #fefefe;
      box-shadow:
        0 0 0 1px #e5e3e0,
        0 2px 8px 0 rgba(81, 81, 81, 0.06);
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--orgn-800, #5f3207);
    }
    &-title {
      margin-top: 2.4rem;
      color: #141414;
      font-size: 3.6rem;
      font-weight: 600;
      line-height: 130%;
    }
    &-subtitle {
      margin-top: 1.6rem;
      font-size: 2rem;
      line-height: 152%;
      letter-spacing: -0.3px;
      color: var(--Neutral-Grey-400, #515050);
    }
    &-right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: center;
    }
    &:nth-child(odd) {
      .roadmap__item-box-pic {
        right: 0;
        bottom: 10%;
        width: 69%;
      }
      .roadmap__item-card {
        margin-left: 3.6rem;
      }
    }
    &:nth-child(even) {
      .roadmap__item-right {
        order: -1;
      }
      .roadmap__item-box-pic {
        &:first-of-type {
          left: -25%;
          top: 0;
          width: 55%;
          filter: drop-shadow(0 2px 8px #afe9bcbc);
          z-index: 1;
        }
        &:last-of-type {
          inset-inline: 0;
          bottom: 3rem;
        }
      }
    }
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
  overflow-x: clip;
}
</style>
