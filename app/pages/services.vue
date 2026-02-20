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
        <div
          v-for="(box, i) in useMapRt('services.hero.boxes')"
          :key="box.title"
          class="hero__box"
          :class="{ hidden: i !== activeItem }"
        >
          <span class="hero__box-title">
            {{ box.title }}
          </span>
          <p class="hero__box-text">
            {{ box.text }}
          </p>
        </div>
        <div :class="{ hidden: activeItem === 1 }" class="hero__card">
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
        <div :class="{ hidden: activeItem !== 1 }" class="hero__card">
          <p class="hero__card-title">
            {{ $t('services.hero.card-2.title') }}
          </p>
          <SvgColorfulGraph class="hero__card-graph" />
          <div class="hero__card-bottom">
            <span class="hero__card-bottom-label">{{ $t('services.hero.card-2.label') }}</span>
            <span class="hero__card-bottom-percent">+24.6%</span>
          </div>
        </div>
        <div class="hero__pics">
          <UiPicture
            v-for="i in 3"
            :key="i"
            :src="`services-${i}.jpg`"
            alt="man"
            class="hero__pic"
            :class="{ hidden: i - 1 !== activeItem }"
          />
        </div>
        <div class="hero__circles">
          <button
            v-for="i in 3"
            :key="i"
            class="hero__circle"
            :class="{ active: i - 1 === activeItem }"
            @click="activeItem = i - 1"
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
    <section class="galaxy">
      <div class="galaxy__label">
        <IconsFlagUz class="galaxy__label-icon" />
        <span>{{ $t('uzbekistan') }}</span>
      </div>
      <div class="galaxy__label">
        <IconsFlagAf class="galaxy__label-icon" />
        <span>{{ $t('afghanistan') }}</span>
      </div>
      <div class="galaxy__container">
        <div class="galaxy__banner">
          <img src="/images/galaxy-bg.png" alt="galaxy" class="galaxy__banner-image" />
        </div>
        <img src="/images/galaxy-items.png" alt="galaxy" class="galaxy__items" />
      </div>
      <div class="galaxy__box">
        <SvgCentredLogo class="galaxy__box-logo" />
      </div>
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="galaxyClip" clipPathUnits="objectBoundingBox">
            <path
              d="M 1.00000 0.78402
C 1.00000 0.81980 0.98931 0.84881 0.97612 0.84881
H 0.86465
C 0.85145 0.84881 0.84076 0.87782 0.84076 0.91361
V 0.93520
C 0.84076 0.97099 0.83006 1.00000 0.81688 1.00000
H 0.02389
C 0.01070 1.00000 0.00000 0.97099 0.00000 0.93520
V 0.21663
C 0.00000 0.18084 0.01070 0.15183 0.02389 0.15183
H 0.13535
C 0.14855 0.15183 0.15924 0.12282 0.15924 0.08704
V 0.06479
C 0.15924 0.02899 0.16994 0.00000 0.18312 0.00000
H 0.97612
C 0.98931 0.00000 1.00000 0.02899 1.00000 0.06479
V 0.78402
Z
"
            />
          </clipPath>
        </defs>
      </svg>
    </section>
    <UiSectionServices
      class="services__services"
      :title="$t('services.services.title')"
      :subtitle="$t('services.services.subtitle')"
      :label="$t('services.services.label')"
      :items="useMapRt('services.services.cards')"
    />
    <section class="start">
      <img src="/images/start-gradient.png" alt="banner" class="start__banner" />
      <div class="start__left">
        <div class="start__left-box">
          <span class="start__left-box-amount">180+</span>
          <span class="start__left-box-text">{{ $t('services.start.residency') }}</span>
        </div>
        <div class="start__left-container">
          <UiPicture src="start-pic.png" alt="pic" class="start__left-container-pic" />
          <UiPicture src="start-bg.png" alt="bg" class="start__left-container-bg" />
        </div>
        <div class="start__left-content">
          <div class="start__left-content-iconbox">
            <IconsOfficeChair class="start__left-content-icon" />
          </div>
          <p>{{ $t('services.start.text') }}</p>
        </div>
      </div>
      <div class="start__right">
        <div class="start__right-label">
          <IconsLightning class="start__right-label-icon" />
          <span>{{ $t('services.start.label') }}</span>
        </div>
        <div class="start__right-box">
          <h2 class="start__right-title">
            {{ $t('services.start.title') }}
          </h2>
          <p>
            {{ $t('services.start.subtitle') }}
          </p>
        </div>
        <button class="start__right-button">
          <span>{{ $t('services.start.button') }}</span>
          <IconsArrowRight class="start__right-button-icon" />
        </button>
      </div>
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="startClip" clipPathUnits="objectBoundingBox">
            <path
              d="M 0.09453 0
L 0.41800 0
C 0.47021 0 0.51253 0.05649 0.51253 0.12614
L 0.51253 0.39058
C 0.51253 0.46192 0.55687 0.51976 0.60934 0.51976
L 0.90547 0.51976
C 0.95768 0.51976 1.00000 0.57626 1.00000 0.64590
L 1.00000 0.87462
C 1.00000 0.94427 0.95768 1.00000 0.90547 1.00000
L 0.09453 1.00000
C 0.04232 1.00000 0.00000 0.94427 0.00000 0.87462
L 0.00000 0.12614
C 0.00000 0.05649 0.04232 0.00000 0.09453 0.00000
Z
"
            />
          </clipPath>
        </defs>
      </svg>
    </section>
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

onMounted(() => {
  setInterval(() => {
    activeItem.value = (activeItem.value + 1) % 3;
  }, 3000);
});
</script>

<style lang="scss" scoped>
.start {
  display: grid;
  grid-template-columns: 1fr 1.72fr;
  gap: 6rem;
  padding-block: 9rem;
  padding-inline: var(--spacing-inline);
  position: relative;
  overflow: hidden;
  & > svg {
    position: absolute;
  }
  & > *:not(img) {
    z-index: 1;
  }
  &__banner {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  &__left {
    display: grid;
    column-gap: 1rem;
    row-gap: 5rem;
    grid-auto-columns: 1.12fr 1fr;
    grid-template-areas:
      'box pic'
      'content content';
    position: relative;
    > * {
      z-index: 1;
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(255, 243, 237, 0.7);
      border: 1px solid #fefdf9;
      box-shadow: 22px 26px 100px rgba(116, 60, 4, 0.4);
      clip-path: url('#startClip');
    }
    &-container {
      grid-area: pic;
      position: relative;
      display: flex;
      justify-content: flex-end;

      &-bg {
        position: absolute;
        inset: 0;
        border-radius: 4.2rem;
      }
      &-pic {
        z-index: 1;
        max-width: 90%;
        translate: 0% -12%;
      }
    }
    &-box {
      grid-area: box;
      color: var(--Primary-warmth, #fffefd);
      display: flex;
      padding: 3.2rem 3rem;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 4.2rem;
      background: var(--Primary-vivid-green, #0cbb52);
      box-shadow:
        0 2px 0 0 rgba(255, 255, 255, 0.2) inset,
        0 -1px 0 1px rgba(0, 0, 0, 0.05) inset,
        0 4px 2.7px 0 rgba(0, 212, 126, 0.1);
      &-amount {
        font-size: 5.4rem;
        font-weight: 800;
      }
      &-text {
        font-weight: 500;
      }
    }

    &-content {
      padding-bottom: 4.7rem;
      padding-inline: 3.3rem;
      grid-area: content;
      display: flex;
      align-items: center;
      gap: 2.4rem;
      p {
        color: var(--orgn-900, #2f1904);
        font-family: vars.$font-inter;
        font-size: 2.8rem;
        font-weight: 600;
        line-height: 130%;
      }
      &-icon {
        width: 55%;
        fill: none;
      }
      &-iconbox {
        @include mix.flex-center;
        flex-shrink: 0;
        width: 8.4rem;
        height: 8.4rem;
        border-radius: 2.4rem;
        border-right: 1px solid #fff;
        border-bottom: 1px solid #fff;
        background-image: linear-gradient(to right, #fdf7f0 0%, rgba(255, 255, 255, 0) 100%);
      }
    }
  }
  &__right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.2rem;
    color: var(--Grayscale-White, #fff);
    &-box {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
    p {
      font-size: 1.8rem;
    }
    &-title {
      font-family: vars.$font-inter;
      font-size: 5.4rem;
      font-weight: 600;
      line-height: 133%;
      max-width: 15ch;
    }
    &-label {
      display: flex;
      padding: 0.8rem 1.6rem;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      border-radius: 1.2rem;
      border: 1.2px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.2);
      font-size: 1.6rem;
      font-weight: 600;
      &-icon {
        width: 1.6rem;
        fill: currentColor;
      }
    }
    &-button {
      display: flex;
      height: 4.8rem;
      padding-inline: 1.4rem;
      align-items: center;
      gap: 1rem;
      border-radius: 9.9rem;
      border: 2px solid #fff;
      background: #fff;
      box-shadow: 0 4.343px 16px 0 rgba(248, 203, 160, 0.3) inset;
      color: #bd630f;
      font-weight: 500;
      transition: all 0.4s;
      &:hover {
        color: #fff;
        background: transparent;
      }
      &-icon {
        fill: currentColor;
        width: 3rem;
        height: 3rem;
      }
    }
  }
}
.galaxy {
  position: relative;
  display: flex;
  aspect-ratio: 125.6/46.3;
  margin-inline: var(--spacing-inline);
  margin-bottom: calc(24.8rem * 0.25);
  & > * {
    position: absolute;
  }
  & > *:not(.galaxy__container) {
    z-index: 1;
  }
  &__banner {
    position: relative;
    &-image {
      position: absolute;
      width: 100%;
      height: 100%;
      object-position: bottom;
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      // background: linear-gradient(to right, rgba(#903e0e, 0.7) 0%, rgba(#360d07, 0.3) 95%);
      background: linear-gradient(to right, rgba(#903e0e, 0.7) 0%, rgba(rgb(57, 35, 32), 0.3) 95%);
    }
  }
  &__items {
    pointer-events: none;
  }
  &__container {
    inset: 0;
    clip-path: url('#galaxyClip');
    & > * {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }
  &__label {
    display: flex;
    padding: 1.6rem 2rem;
    align-items: center;
    gap: 1rem;
    border-radius: 4rem;
    border: 1px solid #f8cba0;
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 12.29%,
        var(--orgn-100, rgba(251, 229, 208, 0.4)) 107.11%
      ),
      var(--Color-1, #fff);
    box-shadow: 0 23px 60px 0 rgba(189, 88, 0, 0.33);
    color: var(--Neutral-Colors-Neutral-950, #000);
    font-family: vars.$font-inter;
    font-size: 2rem;
    font-weight: 400;
    &:nth-child(2) {
      right: 0;
      bottom: 0;
    }
    &-icon {
      width: 3rem;
      height: 3rem;
    }
  }

  &__box {
    @include mix.flex-center;
    bottom: 0;
    left: 50%;
    translate: -50% 25%;
    width: 24.8rem;
    height: 24.8rem;
    border-radius: 50%;
    background:
      linear-gradient(136deg, rgba(255, 255, 255, 0) 17.58%, var(--orgn-100, #fbe5d0) 83.01%),
      var(--orgn-200, #f8cba0);
    &-logo {
      width: 49%;
    }
  }
}
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
    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 0 0 60px 0 var(--orgn-50, #fdf2e7) inset;
      border-radius: 2rem;
      &::after {
        border-color: #fbe5d0;
        box-shadow: 0 18px 44px 0 rgba(184, 98, 0, 0.2);
      }
      h3 {
        color: #ed7e17;
      }
    }
    &::after {
      border: 1px solid transparent;
      position: absolute;
      inset: 0;
      content: '';
      border-radius: 2rem;
      background-color: #fff;
      z-index: -1;
      clip-path: url('#coreClip');
      transition: all 0.3s;
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
      transition: color 0.3s;
      max-width: 20ch;
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
    transition: all 0.6s;
    &.hidden {
      opacity: 0;
      pointer-events: none;
      transform: translateY(15%);
    }
    & > *:not(picture) {
      z-index: 1;
    }
    &:nth-child(6) {
      border: 1px solid #ed7e17;
      background: #fefefe;
      box-shadow: 0 2px 8px 0 rgba(81, 81, 81, 0.06);
      gap: 2.4rem;
    }
    &-title {
      font-weight: 600;
      font-size: 1.4rem;
      color: #2f1904;
    }
    &-bottom {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: var(--orgn-900, #2f1904);
      &-label {
        font-size: 1.2rem;
        font-weight: 600;
      }
      &-percent {
        display: flex;
        padding: 0.4rem 0.8rem;
        align-items: center;
        gap: 1rem;
        border-radius: 10rem;
        border: 1px solid var(--orgn-300, #f4b071);
        background: var(--orgn-50, #fdf2e7);
        font-family: vars.$font-inter;
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
    &-graph {
      fill: none;
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
    transition: all 0.6s;
    &:hover {
      background-color: rgba(#ed7e17, 0.4);
    }
    &.active {
      background-color: #ed7e17;
      scale: 1.2;
    }
  }
  &__pics {
    display: grid;
    & > * {
      grid-area: 1/1/2/2;
    }
  }
  &__pic {
    clip-path: url('#cardClip');
    aspect-ratio: 48.3/55.7;
    transition: all 0.6s;
    &.hidden {
      opacity: 0;
      scale: 0.95;
    }
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
    transition: all 0.6s;
    &.hidden {
      pointer-events: none;
      transform: translateX(-20px);
      opacity: 0;
    }
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
  &__services {
    & > *:last-child {
      & > * {
        & > *:last-child {
          & > *:first-child {
            font-size: 3.2rem;
          }
        }
      }
    }
  }
}
</style>
