<template>
  <main class="services">
    <section class="hero">
      <div class="hero__content">
        <h1 class="heading-xl">
          {{ $t('services.hero.title') }}
        </h1>
        <p class="body-xl hero__text">
          {{ $t('services.hero.text') }}
        </p>
        <button class="button--orange">
          {{ $t('services.hero.button') }}
        </button>
      </div>
      <div class="hero__container">
        <SvgServicesHeroArrow class="hero__container-arrow" />
        <div class="hero__box">
          <span class="hero__box-title">
            {{ $t('services.hero.box.title') }}
          </span>
          <p class="hero__box-text">
            {{ $t('services.hero.box.text') }}
          </p>
        </div>
        <div class="hero__card">
          <div class="hero__card-wrapper">
            <UiPicture src="arc.png" alt="arc" class="hero__card-pic" />
            <div class="hero__card-content">
              <span class="hero__card-number"> 88% </span>
              <span class="hero__card-label">
                {{ $t('services.hero.card.label') }}
              </span>
            </div>
          </div>
          <p class="hero__card-text">
            {{ $t('services.hero.card.text') }}
          </p>
        </div>
        <UiPicture src="girl-portrait.jpg" alt="girl" class="hero__pic" />
        <div class="hero__circles">
          <button
            v-for="i in 3"
            :key="i"
            class="hero__circle"
            :class="{ active: i - 1 === activeItem }"
          />
        </div>
      </div>
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="cardClip" clipPathUnits="objectBoundingBox">
            <path
              d="M 0.75434 0
C 0.78356 0 0.80683 0.02054 0.80683 0.04587
C 0.80683 0.07120 0.83010 0.09174 0.85932 0.09174
H 0.91270
C 0.96041 0.09174 1.00000 0.12553 1.00000 0.16717
V 0.92460
C 1.00000 0.96625 0.96041 1.00000 0.91270 1.00000
H 0.08696
C 0.03934 1.00000 0.00000 0.96625 0.00000 0.92460
V 0.07540
C 0.00000 0.03375 0.03934 0.00000 0.08696 0.00000
H 0.75434
Z"
            />
          </clipPath>
        </defs>
      </svg>
    </section>
    <section class="core">
      <UiSectionHeader
        :label="$t('services.core.label')"
        :title="$t('services.core.title')"
        :subtitle="$t('services.core.subtitle')"
      />
      <ul class="core__list">
        <li v-for="item in coreItems" :key="item.title" class="core__item">
          <div class="core__item-top">
            <h3 class="core__item-title">
              {{ item.title }}
            </h3>
            <div class="core__item-iconbox">
              <component :is="item.icon" class="core__item-icon" />
            </div>
          </div>
          <p class="core__item-text">
            {{ item.text }}
          </p>
          <button class="button--orange">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_453_317)">
                <path d="M5.83325 8.33337L9.99992 12.5L14.1666 8.33337H5.83325Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_453_317">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>{{ $t('details') }}</span>
          </button>
        </li>
      </ul>
      <button class="button--white">
        <span>{{ $t('explore-all-sectors') }}</span>
      </button>
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="coreClip" clipPathUnits="objectBoundingBox">
            <path
              d="M 1.00000 0.65455
C 1.00000 0.69471 0.98200 0.72727 0.95980 0.72727
H 0.70787
C 0.68567 0.72727 0.66767 0.75983 0.66767 0.80000
V 0.92727
C 0.66767 0.96744 0.64967 1.00000 0.62747 1.00000
H 0.04020
C 0.01800 1.00000 0.00000 0.96744 0.00000 0.92727
V 0.07273
C 0.00000 0.03256 0.01800 0.00000 0.04020 0.00000
H 0.95980
C 0.98200 0.00000 1.00000 0.03256 1.00000 0.07273
V 0.65455
Z"
            />
          </clipPath>
        </defs>
      </svg>
    </section>
    <UiSectionAdvantages />
    <UiSectionMarket />
  </main>
</template>

<script setup>
import { IconsCarWash, IconsFire, IconsUploadFile } from '#components';

const activeItem = ref(0);

const coreSupply = [IconsFire, IconsUploadFile, IconsCarWash];
const coreItems = useMapRt('services.core.cards')?.map((el, i) => ({
  ...el,
  icon: coreSupply[i]
}));
</script>

<style lang="scss" scoped>
.core {
  padding-inline: var(--spacing-inline);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  & > button {
    align-self: center;
  }
  & > svg {
    position: absolute;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
  }
  &__item {
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
    &::after {
      position: absolute;
      inset: 0;
      content: '';
      border-radius: 1rem;
      background-color: #fff;
      z-index: -1;
      clip-path: url('#coreClip');
    }
    &-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.8rem;
      padding-top: 2.4rem;
      padding-left: 2.4rem;
    }
    button {
      align-self: flex-start;
      margin-left: auto;
    }
    &-text {
      color: var(--Neutral-500, #666d80);
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 130%;
      max-width: 70%;
      padding-left: 2.4rem;
    }
    &-title {
      color: var(--orgn-800, #5f3207);
      font-size: 2rem;
      font-weight: 700;
      line-height: 120%;
    }
    &-iconbox {
      @include mix.flex-center;
      flex-shrink: 0;
      width: 5.2rem;
      height: 5.2rem;
      border-radius: 0.8rem;
      background: var(--orgn-400, #f09642);
      box-shadow:
        0 4.421px 4.421px 0 rgba(255, 255, 255, 0.25) inset,
        0 0.461px 0.461px 0 #fff inset;
      position: relative;
      outline: 1px solid #fbe5d0;
      outline-offset: 3px;
    }
    &-icon {
      width: 46%;
    }
  }
}
.hero {
  padding-top: 17.3rem;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.08fr;
  gap: 18rem;
  padding-inline: var(--spacing-inline);
  > * {
    z-index: 1;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
  }
  &::before {
    inset: 0;
    background-color: #fbe5d0;
    border-radius: 0 0 2.4rem 2.4rem;
    width: 100%;
    height: calc(100% - 7rem);
  }
  &::after {
    inset: 0;
    background: radial-gradient(circle, #f6bd88 1.5px, transparent 1.5px);
    mix-blend-mode: normal;
    pointer-events: none;
    background-size: 25px 25px;
    mask-image: radial-gradient(
      circle at 50% 0%,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.9) 25%,
      rgba(0, 0, 0, 0.2) 45%,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0) 70%
    );
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    align-items: flex-start;
    margin-top: 25%;
  }
  &__card {
    position: absolute;
    right: 0;
    bottom: 4.55rem;
    translate: 30%;
    width: 46%;
    border-radius: 1rem;
    border: 0.518px solid var(--orgn-50, #fdf2e7);
    background: #fff;
    padding: 1.53rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 1;
    & > *:not(picture) {
      z-index: 1;
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: 2px;
      align-items: center;
      padding-top: 15%;
    }
    &-label {
      color: var(--orgn-900, var(--orgn-900, #2f1904));
      font-size: 0.7649rem;
      font-weight: 500;
    }
    &-number {
      color: var(--orgn-800, #5f3207);
      font-size: 1.7849rem;
      font-weight: 800;
    }
    &-text {
      color: var(--Blue-300, #666c7a);
      font-size: 1.0199rem;
      font-weight: 500;
      line-height: 130%; /* 1.3259rem */
    }
    &-wrapper {
      display: grid;
      place-items: center;
      & > * {
        grid-area: 1/1/2/2;
      }
    }
  }
  &__circles {
    display: flex;
    gap: 10px;
    z-index: 1;
    position: absolute;
    top: 2rem;
    right: 3rem;
  }
  &__circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
    transition: all 0.3s;
    &:hover {
      background-color: rgba(#ed7e17, 0.4);
    }
    &.active {
      background-color: #ed7e17;
      scale: 1.2;
    }
  }
  &__pic {
    clip-path: url('#cardClip');
    aspect-ratio: 48.3/55.7;
  }
  &__box {
    font-family: vars.$font-inter;
    position: absolute;
    left: 10rem;
    top: 58%;
    translate: -100% -50%;
    display: flex;
    max-width: 31.6rem;
    padding: 1.6rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    border-radius: 1.6rem;
    border: 1px solid rgba(253, 242, 231, 0.1);
    background: linear-gradient(
      99deg,
      rgba(255, 255, 255, 0.64) 18.31%,
      rgba(255, 255, 255, 0.32) 91.1%
    );
    box-shadow: 44px 36px 100px 0 rgba(183, 92, 7, 0.25);
    backdrop-filter: blur(35px);
    z-index: 1;
    &-title {
      color: var(--orgn-800, #5f3207);
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 130%; /* 3.12rem */
    }
    &-text {
      color: var(--orgn-700, #8e4a0b);
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
  & > svg {
    position: absolute;
  }
  &__container {
    position: relative;

    &-arrow {
      width: 10.2995rem;
      position: absolute;
      left: -1.65rem;
      top: 40%;
      translate: -100% -50%;
    }
  }
}
.services {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}
</style>
