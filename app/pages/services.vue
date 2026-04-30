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
          <span>{{ $t('services.hero.button') }}</span>
          <IconsArrowRight />
        </button>
      </div>
      <div class="hero__container">
        <SvgServicesHeroArrow class="hero__container-arrow" />
        <div
          v-for="(box, i) in mapRt(tm('services.hero.boxes'), rt)"
          :key="box.title"
          class="hero__box"
          :class="{ hidden: i !== activeHeroItem }"
        >
          <span class="hero__box-title">
            {{ box.title }}
          </span>
          <p class="hero__box-text">
            {{ box.text }}
          </p>
        </div>
        <div :class="{ hidden: activeHeroItem === 1 }" class="hero__card">
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
        <div :class="{ hidden: activeHeroItem !== 1 }" class="hero__card">
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
            :class="{ hidden: i - 1 !== activeHeroItem }"
          />
        </div>
        <div class="hero__circles">
          <button
            v-for="i in 3"
            :key="i"
            class="hero__circle"
            :class="{ active: i - 1 === activeHeroItem }"
            :aria-label="$t('accessibility.select-slide', { number: i })"
            :aria-pressed="i - 1 === activeHeroItem"
            @click="activeHeroItem = i - 1"
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
        <li v-for="(item, i) in coreItems" :key="item.title" class="core__item">
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
          <button class="button--orange" @click="toggleModal(i)">
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <button class="core__button">
        <IconsLogin />
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
        <picture class="galaxy__items">
          <source
            srcset="/images/galaxy-items-mobile.png"
            type="image/png"
            media="(max-width: 768px)"
          />
          <img src="/images/galaxy-items.png" alt="galaxy" class="galaxy__items-img" />
        </picture>
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
      :items="mapRt(tm('services.services.cards'), rt)"
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
        <NuxtLink :to="$localePath('/contact')" class="start__right-button">
          <span>{{ $t('services.start.button') }}</span>
          <IconsArrowRight class="start__right-button-icon" />
        </NuxtLink>
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
    <UiBaseModal
      v-model="showModal"
      :button-text="$t('message-us')"
      @action="$router.push('/contact')"
    >
      <div class="modal-content">
        <div class="modal-content__top">
          <div class="modal-content__logos">
            <div class="modal-content__logo">
              <div class="modal-content__logo-container">
                <component :is="coreSupply[activeCoreItem]" class="modal-content__logo-icon" />
              </div>
            </div>
            <div class="modal-content__logo">
              <SvgIndiaLogo class="modal-content__logo-icon" />
            </div>
          </div>
          <h3 class="modal-content__top-title">
            {{ modalData.title }}
          </h3>
          <p class="modal-content__top-text">
            {{ modalData.text }}
          </p>
        </div>
        <ul class="modal-content__items">
          <li v-for="item in modalData.items" :key="item" class="modal-content__item">
            <IconsBrownCheck class="modal-content__item-icon" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </UiBaseModal>
  </main>
</template>

<script setup>
import { IconsCarWash, IconsFire, IconsUploadFile } from '#components';

const { tm, rt } = useI18n();

const activeHeroItem = ref(0);
const activeCoreItem = ref(0);
const showModal = ref(false);

const modalData = computed(() => mapRt(tm('service-modal'), rt)[activeCoreItem.value]);

usePageSEO('services');

const toggleModal = idx => {
  activeCoreItem.value = idx;
  showModal.value = true;
};

const coreSupply = [IconsFire, IconsUploadFile, IconsCarWash];
const coreItems = mapRt(tm('services.core.cards'), rt).map((el, i) => ({
  ...el,
  icon: coreSupply[i]
}));

let heroReveal;
let heroIntervalId = 0;
const animations = [];

onMounted(() => {
  heroIntervalId = window.setInterval(() => {
    activeHeroItem.value = (activeHeroItem.value + 1) % 3;
  }, 3000);

  heroReveal = useHeroReveal({
    extra: '.hero .button--orange',
    subtitle: '.hero__text',
    extraFrom: {
      opacity: 0,
      scale: 1.1
    }
  });

  animations.push(
    useAnimate('.core__item', {
      animProps: {
        scale: 0.8,
        stagger: 0.1
      }
    })
  );

  animations.push(
    useAnimate('.start', {
      animProps: {
        clipPath: 'inset(0 100%)',
        duration: 1.2,
        opacity: 1
      }
    })
  );
});

onUnmounted(() => {
  window.clearInterval(heroIntervalId);
  animations.forEach(animation => animation?.revert?.());
  heroReveal?.revert();
});
</script>

<style lang="scss" scoped>
@keyframes animate-arrow {
  from {
    transform: translate(-35px, 25px);
    opacity: 0;
  }
}
@keyframes scale-up {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: max(4.5rem, 22px);
  &__logo {
    width: max(7.2rem, 72px);
    height: max(7.2rem, 72px);
    &-container {
      @include mix.flex-center;
      z-index: 1;
      flex: 1;
      background: linear-gradient(
        180deg,
        var(--orgn-300, #f4b071) 0%,
        var(--orgn-600, #bd630f) 100%
      );

      border-radius: max(1.44rem, 14px);
      & > * {
        width: max(3.2rem, 32px);
      }
    }
    &:first-child {
      display: flex;
      transform: rotate(-15deg);
      position: relative;
      z-index: 1;
      box-shadow:
        0 7.2px 7.2px 0 rgba(255, 255, 255, 0.45) inset,
        0 3.6px 10.8px 0 rgba(200, 145, 77, 0.5);
      border-radius: max(1.44rem, 14px);
      &::after {
        content: '';
        position: absolute;
        inset: -2.7px;
        background-image: linear-gradient(to bottom, #ed7e17 0%, #fffffe 100%);
        border-radius: max(1.6rem, 16px);
      }
    }
    &:last-child {
      @include mix.flex-center;
      transform: rotate(15deg);
      border-radius: max(1.2rem, 12px);
      background: #fff;
      box-shadow:
        0 3.6px 10.8px 0 rgba(75, 46, 21, 0.4),
        0 7.2px 7.2px 0 rgba(255, 255, 255, 0.45) inset;
      & > * {
        width: max(4.2rem, 42px);
      }
    }
  }
  &__logos {
    display: flex;
    justify-content: center;
    margin-bottom: max(2rem, 20px);
  }
  &__item {
    display: flex;
    align-items: center;
    gap: max(0.8rem, 8px);
    color: var(--orgn-700, #8e4a0b);
    font-weight: 500;
    &-icon {
      width: max(2rem, 20px);
      fill: none;
    }
  }
  &__items {
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 16px);
    padding: max(1.6rem, 16px);
    border-radius: max(0.8rem, 8px);
    border: 1px solid var(--orgn-100, #fbe5d0);
    background: var(--orgn-50, #fdf2e7);
  }
  &__top {
    display: flex;
    flex-direction: column;
    &-title {
      color: var(--orgn-800, #5f3207);
      text-align: center;
      font-size: max(2rem, 20px);
      font-weight: 700;
      margin-bottom: max(0.4rem, 4px);
    }
    &-text {
      color: var(--Blue-400, #494f61);
      text-align: center;
      font-size: max(1.4rem, 12px);
      line-height: 150%;
    }
  }
}
.start {
  clip-path: inset(0);
  display: grid;
  grid-template-columns: 1fr 1.72fr;
  gap: max(6rem, 30px);
  padding-block: max(9rem, 30px);
  padding-inline: var(--spacing-inline);
  position: relative;
  overflow: hidden;
  @media screen and (max-width: vars.$bp-lg) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: vars.$bp-md) {
    grid-template-columns: 1fr;
    .start__right {
      order: -1;
    }
  }
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
    pointer-events: none;
    @media screen and (max-width: vars.$bp-md) {
      height: 100%;
      width: auto;
    }
  }
  &__left {
    display: grid;
    column-gap: max(1rem, 8px);
    row-gap: max(5rem, 40px);
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
        border-radius: max(4.2rem, 30px);
      }
      &-pic {
        z-index: 1;
        width: 90%;
        translate: 0% -12%;
      }
    }
    &-box {
      grid-area: box;
      color: var(--Primary-warmth, #fffefd);
      display: flex;
      padding: max(3.2rem, 20px) max(3rem, 20px);
      flex-direction: column;
      align-items: flex-start;
      border-radius: max(4.2rem, 30px);
      background: var(--Primary-vivid-green, #0cbb52);
      box-shadow:
        0 2px 0 0 rgba(255, 255, 255, 0.2) inset,
        0 -1px 0 1px rgba(0, 0, 0, 0.05) inset,
        0 4px 2.7px 0 rgba(0, 212, 126, 0.1);
      &-amount {
        font-size: max(5.4rem, 42px);
        font-weight: 800;
      }
      &-text {
        font-size: max(1.6rem, 12px);
        font-weight: 500;
      }
    }
    &-content {
      padding-bottom: max(4.7rem, 37px);
      padding-inline: max(3.3rem, 20px);
      grid-area: content;
      display: flex;
      align-items: center;
      gap: max(2.4rem, 20px);
      p {
        color: var(--orgn-900, #2f1904);
        font-family: vars.$font-inter;
        font-size: max(2.8rem, 20px);
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
        width: max(8.4rem, 64px);
        height: max(8.4rem, 64px);
        border-radius: max(2.4rem, 18px);
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
    gap: max(3.2rem, 16px);
    color: var(--Grayscale-White, #fff);
    &-box {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
    p {
      font-size: max(1.8rem, 18px);
    }
    &-title {
      font-family: vars.$font-inter;
      font-size: max(5.4rem, 32px);
      font-weight: 600;
      line-height: 133%;
      max-width: 15ch;
    }
    &-label {
      display: flex;
      padding: max(0.8rem, 6px) max(1.6rem, 16px);
      justify-content: center;
      align-items: center;
      gap: max(0.8rem, 8px);
      border-radius: max(1.2rem, 12px);
      border: 1.2px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.2);
      font-weight: 600;
      &-icon {
        width: max(1.6rem, 13px);
        fill: currentColor;
      }
    }
    &-button {
      display: flex;
      height: max(4.8rem, 48px);
      padding-inline: max(1.4rem, 14px);
      align-items: center;
      gap: max(0.5rem, 5px);
      border-radius: max(9.9rem, 99px);
      border: 2px solid #fff;
      background: #fff;
      box-shadow: 0 4.343px 16px 0 rgba(248, 203, 160, 0.3) inset;
      color: #bd630f;
      font-weight: 500;
      transition: all 0.4s;
      font-size: max(1.6rem, 16px);
      &:hover {
        color: #fff;
        background: transparent;
      }
      &-icon {
        fill: currentColor;
        width: max(1.8rem, 15px);
        height: max(1.8rem, 15px);
      }
    }
  }
}
.galaxy {
  position: relative;
  display: flex;
  aspect-ratio: 125.6/46.3;
  margin-inline: var(--spacing-inline);
  margin-bottom: calc(max(24.8rem, 149px) * 0.25);
  @media screen and (max-width: vars.$bp-md) {
    aspect-ratio: 37.5/36;
    margin-inline: 0;
    margin-bottom: calc(max(24.8rem, 149px) * 0.5);
  }
  & > * {
    position: absolute;
  }
  & > *:not(.galaxy__container) {
    z-index: 2;
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
    @media screen and (max-width: 1100px) {
      clip-path: none;
    }
    & > * {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }
  &__label {
    display: flex;
    padding: max(1.6rem, 12px) max(2rem, 12px);
    align-items: center;
    gap: max(1rem, 10px);
    border-radius: max(4rem, 40px);
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
    font-size: max(2rem, 16px);
    font-weight: 400;
    @media screen and (max-width: vars.$bp-md) {
      position: static;
      align-self: flex-start;
      margin-top: 16px;
      margin-left: 16px;
      font-weight: 600;
      &:nth-child(2) {
        margin-left: 16px + 15px;
      }
    }
    &:nth-child(2) {
      right: 0;
      bottom: 0;
    }
    &-icon {
      width: max(2rem, 24px);
      height: max(2rem, 24px);
    }
  }
  &__box {
    @include mix.flex-center;
    bottom: 0;
    left: 50%;
    translate: -50% 25%;
    width: max(24.9rem, 149px);
    height: max(24.9rem, 149px);
    border-radius: 50%;
    background:
      linear-gradient(136deg, rgba(255, 255, 255, 0) 17.58%, var(--orgn-100, #fbe5d0) 83.01%),
      var(--orgn-200, #f8cba0);
    @media screen and (max-width: vars.$bp-md) {
      translate: -50% 50%;
    }
    &-logo {
      width: 49%;
    }
  }
}
.core {
  padding-inline: var(--spacing-inline);
  display: flex;
  flex-direction: column;
  gap: max(3rem, 16px);
  &__button {
    display: flex;
    height: 48px;
    padding: 11px 14px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: center;
    font-size: 14px;
    font-weight: 500;
    color: #bd630f;
    border-radius: 99px;
    border: 2px solid #fef7f0;
    background: #fff;
    box-shadow: 0 4.343px 16px 0 rgba(248, 203, 160, 0.3) inset;
    svg {
      width: 18px;
    }
  }
  & > svg {
    position: absolute;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: max(3rem, 10px);
    @media screen and (max-width: 1100px) {
      @include mix.grid-scroll(340px);
    }
  }
  &__item {
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: box-shadow 0.3s;
    @media screen and (max-width: vars.$bp-sm) {
      padding-right: 0;
    }
    &:has(button:hover) {
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
      margin-bottom: max(1.8rem, 10px);
      padding-top: max(2.4rem, 16px);
      padding-left: max(2.4rem, 16px);
      gap: 15px;
      @media screen and (max-width: vars.$bp-sm) {
        padding-right: 20px;
      }
    }
    button {
      align-self: flex-start;
      margin-left: auto;
      margin-top: auto;
    }
    &-text {
      color: var(--Neutral-500, #666d80);
      font-size: max(1.6rem, 12px);
      font-weight: 500;
      line-height: 130%;
      max-width: 70%;
      padding-left: max(2.4rem, 16px);
    }
    &-title {
      transition: color 0.3s;
      max-width: 20ch;
      color: var(--orgn-800, #5f3207);
      font-size: max(2rem, 18px);
      font-weight: 700;
      line-height: 120%;
    }
    &-iconbox {
      @include mix.flex-center;
      flex-shrink: 0;
      width: max(5.2rem, 48px);
      height: max(5.2rem, 48px);
      border-radius: max(0.8rem, 8px);
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
  padding-top: max(17.3rem, 167px);
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.08fr;
  gap: max(18rem, 50px);
  padding-inline: var(--spacing-inline);
  @media screen and (max-width: vars.$bp-lg) {
    grid-template-columns: 1fr;
  }
  & > * {
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
    border-radius: 0 0 max(2rem, 24px) max(2rem, 24px);
    width: 100%;
    height: calc(100% - 7rem);
    @media screen and (max-width: vars.$bp-md) {
      height: 75%;
    }
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
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.1) 70%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 16px);
    align-items: flex-start;
    @media screen and (min-width: vars.$bp-lg) {
      margin-top: 25%;
    }
    @media screen and (max-width: vars.$bp-lg) {
      align-items: center;
      text-align: center;
    }
  }
  &__card {
    animation: scale-up 0.6s 0.1s backwards;
    position: absolute;
    right: 0;
    bottom: 4.55rem;
    translate: 30%;
    width: 46%;
    border-radius: max(1rem, 8px);
    border: 0.518px solid var(--orgn-50, #fdf2e7);
    background: #fff;
    padding: max(1.53rem, 12px);
    display: flex;
    flex-direction: column;
    gap: max(1rem, 10px);
    z-index: 1;
    transition: all 0.6s;
    @media screen and (max-width: vars.$bp-lg) {
      width: 168px;
      translate: none;
      bottom: 16px;
      right: 16px;
    }
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
      gap: max(2.4rem, 10px);
    }
    &-title {
      font-weight: 600;
      font-size: max(1.4rem, 10px);
      color: #2f1904;
    }
    &-bottom {
      display: flex;
      align-items: center;
      gap: max(0.8rem, 8px);
      color: var(--orgn-900, #2f1904);
      font-size: max(1.2rem, 10px);
      &-label {
        font-weight: 600;
      }
      &-percent {
        display: flex;
        padding: max(0.4rem, 4px) max(0.8rem, 8px);
        align-items: center;
        gap: max(1rem, 10px);
        border-radius: max(10rem, 100px);
        border: 1px solid var(--orgn-300, #f4b071);
        background: var(--orgn-50, #fdf2e7);
        font-family: vars.$font-inter;
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
      font-size: max(0.7649rem, 7px);
      font-weight: 500;
    }
    &-number {
      color: var(--orgn-800, #5f3207);
      font-size: max(1.7849rem, 14px);
      font-weight: 800;
    }
    &-text {
      color: var(--Blue-300, #666c7a);
      font-size: max(1.0199rem, 8px);
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
    top: max(2rem, 10px);
    right: max(3rem, 10px);
    @media screen and (max-width: vars.$bp-lg) {
      right: 0;
    }
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
    animation: appear 0.6s 0.2s backwards;
    display: grid;
    & > * {
      grid-area: 1/1/2/2;
    }
  }
  &__pic {
    clip-path: url('#cardClip');
    aspect-ratio: 48.3/55.7;
    transition: all 0.6s;
    @media screen and (max-width: vars.$bp-lg) {
      aspect-ratio: 34.3/42;
    }
    &.hidden {
      opacity: 0;
      scale: 0.95;
    }
  }
  &__box {
    animation: scale-up 0.6s;
    font-family: vars.$font-inter;
    position: absolute;
    left: 10rem;
    top: 58%;
    translate: -100% -50%;
    display: flex;
    max-width: max(31.6rem, 210px);
    padding: max(1.6rem, 10px);
    flex-direction: column;
    align-items: flex-start;
    gap: max(1.2rem, 10px);
    border-radius: max(1.6rem, 10px);
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
    @media screen and (max-width: vars.$bp-lg) {
      translate: none;
      left: 16px;
      top: 40%;
    }

    &.hidden {
      pointer-events: none;
      transform: translateX(-20px);
      opacity: 0;
    }
    &-title {
      color: var(--orgn-800, #5f3207);
      font-size: max(2.4rem, 16px);
      font-weight: 600;
      line-height: 130%; /* 3.12rem */
    }
    &-text {
      color: var(--orgn-700, #8e4a0b);
      font-size: max(1.4rem, 10px);
      font-weight: 500;
    }
  }
  & > svg {
    position: absolute;
  }
  &__container {
    position: relative;

    &-arrow {
      animation: animate-arrow 0.7s;
      width: 10.2995rem;
      position: absolute;
      left: -1.65rem;
      top: 40%;
      translate: -100% -50%;
      @media screen and (max-width: vars.$bp-lg) {
        display: none;
      }
    }
  }
  button {
    svg {
      @media screen and (max-width: vars.$bp-sm) {
        display: none;
      }
    }
  }
}
.services {
  @include mix.container-style;
  &__services {
    & > *:last-child {
      & > * {
        & > *:last-child {
          & > *:first-child {
            font-size: max(3.2rem, 32px);
          }
        }
      }
    }
  }
}
</style>
