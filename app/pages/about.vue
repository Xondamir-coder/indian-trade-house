<template>
  <main class="about">
    <section class="hero">
      <div class="hero__content">
        <h1 class="hero__title">
          {{ $t('about.hero.title') }}
        </h1>
        <p class="hero__subtitle">
          {{ $t('about.hero.subtitle') }}
        </p>
      </div>
      <div class="hero__container">
        <UiPicture src="about-card-1.png" class="hero__pic" />
        <SvgCurvedArrow class="hero__arrow" />
        <UiPicture src="about-card-2.png" class="hero__pic" />
      </div>
    </section>
    <section class="services">
      <UiSectionHeader
        class="services__header"
        :label="$t('about.services.label')"
        :title="$t('about.services.title')"
        :subtitle="$t('about.services.subtitle')"
      />
      <ul class="services__list">
        <li
          v-for="(item, i) in useMapRt('about.services.info')"
          :key="i"
          class="services__list-item"
        >
          <h4 class="services__list-item-title">{{ item.title }}</h4>
          <p>
            {{ item.subtitle }}
          </p>
        </li>
      </ul>
      <ul class="services__cards">
        <li v-for="(card, i) in useMapRt('about.services.cards')" :key="i" class="services__card">
          <div class="services__card-left">
            <UiPicture src="registan.jpg" alt="registan" class="services__card-left-banner" />
            <div class="services__card-left-box">
              <div class="services__card-left-iconbox">
                <IconsGift class="services__card-left-icon" />
              </div>
              <div class="services__card-left-content">
                <span class="services__card-left-title">
                  {{ card.tooltip.title }}
                </span>
                <p class="services__card-left-subtitle">
                  {{ card.tooltip.subtitle }}
                </p>
              </div>
            </div>
          </div>
          <div class="services__card-content">
            <h3 class="services__card-content-title">
              {{ card.title }}
            </h3>
            <p class="services__card-content-subtitle">
              {{ card.subtitle }}
            </p>
            <div v-for="item in card.items" :key="item.title" class="services__card-content-item">
              <div class="services__card-content-item-iconbox">
                <IconsStars class="services__card-content-item-icon" />
              </div>
              <div class="services__card-content-item-box">
                <span class="services__card-content-item-title">
                  {{ item.title }}
                </span>
                <span class="services__card-content-item-subtitle">
                  {{ item.subtitle }}
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <SvgAboutServicesBg class="services__bg" />
    </section>
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
        :label="$t('about.market.label')"
        :title="$t('about.market.title')"
        :subtitle="$t('about.market.subtitle')"
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
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const images = ['teamwork.jpg', 'men-at-office.jpg', 'teamwork.jpg'];
const slideCards = computed(() =>
  useMapRt('about.market.cards').map((el, i) => ({
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
.services {
  display: flex;
  padding: 6rem;
  flex-direction: column;
  gap: 6rem;
  border-radius: 2.4rem;
  border: 1px solid var(--orgn-100, #fbe5d0);
  background: #fff;
  margin-inline: var(--spacing-inline);
  position: relative;

  /* Drop Shadow */
  box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
  & > *:not(.services__bg) {
    z-index: 1;
  }
  &__bg {
    position: absolute;
    inset-inline: 0;
    bottom: 0;
  }
  &__card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6.7rem;
    &:nth-child(even) {
      & > *:first-child {
        order: 1;
        justify-content: flex-start;
        picture {
          right: 0;
          left: auto;
        }
      }
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      &-title {
        color: var(--orgn-800, var(--orgn-800, #5f3207));
        font-family: Manrope;
        font-size: 3.6rem;
        font-weight: 800;
        line-height: 130%;
      }
      &-subtitle {
        font-size: 2rem;
        color: var(--orgn-950, var(--orgn-950, #180c02));
        line-height: 152%;
        letter-spacing: -0.3px;
      }
      &-item {
        padding: 1.2rem 1.6rem;
        display: flex;
        gap: 1.6rem;
        border-radius: 1.6rem;
        border: 1px solid #ffb566;
        background: var(--Neutral-White-50, #fefefe);

        /* Drop Shadow */
        box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
        &-box {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        &-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--orgn-500, var(--orgn-500, #ed7e17));
        }
        &-subtitle {
          color: var(--orgn-900, var(--orgn-900, #2f1904));
          line-height: 130%;
        }
        &-iconbox {
          @include mix.flex-center;
          flex-shrink: 0;
          width: 4rem;
          height: 4rem;
          border-radius: 0.8rem;
          background: var(--orgn-500, #ed7e17);
        }
        &-icon {
          width: 1.8333rem;
        }
      }
    }
    &-left {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      position: relative;
      font-family: vars.$font-inter;
      color: var(--Neutral-White-50, #fefefe);
      &-content {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      &-title {
        font-size: 1.4rem;
        font-weight: 600;
      }
      &-subtitle {
        font-size: 1.2rem;
      }
      &-iconbox {
        @include mix.flex-center;
        flex-shrink: 0;
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 0.64rem;
        border: 0.6px solid #daade3;
        background: var(--Neutral-White-50, #fefefe);
      }
      &-icon {
        width: 1.32rem;
      }
      &-box {
        position: absolute;
        translate: 0 30%;
        max-width: 48%;
        padding: 1.6rem;
        display: flex;
        gap: 1.2rem;
        border-radius: 1.6rem;
        border: 1px solid #ffb166;
        background: linear-gradient(
          102deg,
          rgba(198, 93, 1, 0.5) 5.94%,
          rgba(166, 117, 1, 0.5) 98.1%
        );
        box-shadow: 0 2px 60px 0 rgba(94, 38, 0, 0.04);
        backdrop-filter: blur(10px);
        z-index: 1;
      }
      &-banner {
        position: absolute;
        inset: 0;
        max-width: 93%;
        border-radius: 2rem;
        box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
      }
    }
  }
  &__cards {
    display: flex;
    flex-direction: column;
    gap: 9rem;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    &-item {
      display: flex;
      padding: 2.4rem;
      flex-direction: column;
      align-items: center;
      gap: 1.6rem;
      text-align: center;
      p {
        font-weight: 500;
        line-height: 130%;
        color: #2f1904;
      }
      &-title {
        color: var(--orgn-500, var(--orgn-500, #ed7e17));
        font-size: 3.2rem;
        font-weight: 800;
        line-height: 130%;
      }
    }
  }
  &__header {
    max-width: 62%;
  }
}
.hero {
  color: var(--orgn-50, var(--orgn-50, #fdf2e7));
  font-family: vars.$font-inter;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 2.36rem;
  padding-top: 18.2rem;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    height: 80%;
    z-index: -1;
    border-radius: 0 0 2.6rem 2.6rem;
    background:
      radial-gradient(600px 500px at 20% 40%, #b65a2b 0%, transparent 70%),
      radial-gradient(500px 500px at 55% 20%, #f3b77d 0%, transparent 65%),
      radial-gradient(700px 600px at 75% 70%, #e6b3b8 0%, transparent 70%),
      linear-gradient(135deg, #a5532b 0%, #d98c5f 45%, #e9c2b0 70%, #b06a50 100%);
  }
  &__container {
    display: flex;
    align-items: flex-start;
  }
  &__arrow {
    width: 23.9535rem;
    margin-top: 5%;
  }
  &__pic {
    width: 35rem;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    max-width: 55.555%;
    text-align: center;
  }
  &__title {
    font-size: 5.4rem;
    font-weight: 600;
    line-height: 133%;
  }
  &__subtitle {
    font-size: 2rem;
    line-height: 152%;
  }
}
.about {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}
</style>
