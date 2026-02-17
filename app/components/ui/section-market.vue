<template>
  <section class="market">
    <svg width="0" height="0" aria-hidden="true" class="market__path">
      <defs>
        <clipPath id="marketCardPath" clipPathUnits="objectBoundingBox">
          <path
            d="M 1.00000 0.82010
C 1.00000 0.86120 0.97788 0.89435 0.95000 0.89435
H 0.56118
C 0.54168 0.89435 0.52588 0.91756 0.52588 0.94727
C 0.52588 0.97652 0.51008 1.00000 0.49059 1.00000
H 0.04941
C 0.02212 1.00000 0.00000 0.96786 0.00000 0.92557
V 0.07407
C 0.00000 0.03316 0.02212 0.00000 0.04941 0.00000
H 0.95000
C 0.97788 0.00000 1.00000 0.03316 1.00000 0.07407
V 0.82010
Z
"
          />
        </clipPath>
      </defs>
    </svg>
    <UiSectionHeader
      :label="$t('section-market.label')"
      :title="$t('section-market.title')"
      :subtitle="$t('section-market.subtitle')"
    />
    <div class="market__container">
      <ClientOnly>
        <swiper
          :modules="[Navigation]"
          :slides-per-view="1.75"
          :space-between="24"
          :centered-slides="true"
          :grab-cursor="true"
          :navigation="{
            nextEl: '.market__button:last-of-type',
            prevEl: '.market__button:first-of-type'
          }"
        >
          <swiper-slide v-for="(slide, i) in slideCards" :key="i" class="market__card">
            <UiPicture :src="slide.image" alt="banner" class="market__card-pic" />
            <h3 class="market__card-title">{{ slide.title }}</h3>
            <p class="market__card-text">{{ slide.text }}</p>
          </swiper-slide>
        </swiper>
      </ClientOnly>
      <button class="market__button">
        <IconsArrowRight class="market__button-icon" />
      </button>
      <button class="market__button">
        <IconsArrowRight class="market__button-icon" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const images = ['teamwork.jpg', 'men-at-office.jpg', 'teamwork.jpg'];
const slideCards = computed(() =>
  useMapRt('section-market.cards')?.map((el, i) => ({
    ...el,
    image: images[i]
  }))
);
</script>

<style lang="scss" scoped>
.market {
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  &__container {
    position: relative;
  }
  &__button {
    @include mix.flex-center;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    border: 2px solid var(--orgn-100, #fbe5d0);
    background: #fff3ed;
    fill: #8e4a0b;
    transition: all 0.4s;
    position: absolute;
    z-index: 5;
    top: 50%;
    translate: 0 -50%;
    &:disabled {
      opacity: 0.4;
    }
    &:first-of-type {
      rotate: 180deg;
      left: 19.5%;
    }
    &:last-of-type {
      right: 19.5%;
    }
    &:not(:disabled):hover {
      border-color: var(--orgn-100, #fbe5d0);
      background: var(--orgn-500, #ed7e17);
      fill: #fff;
    }
    &-icon {
      width: 45%;
    }
  }
  &__path {
    position: absolute;
  }
  &__card {
    position: relative;
    border-radius: 4.2rem;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    aspect-ratio: 85/56.7;
    transform-origin: center;
    & > *:not(picture) {
      z-index: 1;
    }
    &:not(.swiper-slide-active) {
      .market__card-pic {
        inset-block: 7.5%;
      }
      .market__card-text,
      .market__card-title {
        opacity: 0;
        translate: 0 15px;
      }
    }
    &-title {
      transition-property: opacity, translate;
      transition-duration: 0.5s;
      flex: 1;
      color: var(--orgn-100, var(--orgn-100, #fbe5d0));
      font-size: 3.2rem;
      font-weight: 800;
      line-height: 130%;
      padding-left: 4rem;
      padding-bottom: 3.4rem;
    }
    &-text {
      transition-property: opacity, translate;
      transition-duration: 0.5s;
      transition-delay: 0.2s;
      flex: 1;
      line-height: 130%;
      color: var(--orgn-900, var(--orgn-900, #2f1904));
      padding-left: 4rem;
    }
    &-pic {
      transition: inset-block 0.5s;
      position: absolute;
      inset: 0;
      clip-path: url('#marketCardPath');
    }
  }
}
</style>
