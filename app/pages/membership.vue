<template>
  <main class="membership">
    <section class="hero">
      <h1 class="heading-xl">
        {{ $t('membership.hero.title') }}
      </h1>
      <p class="hero__subtitle">
        {{ $t('membership.hero.subtitle') }}
      </p>
      <button class="button--orange">
        {{ $t('apply-membership') }}
      </button>
    </section>
    <UiSectionServices :items="mapRt(tm('membership.services'), rt)" />
    <UiSectionSubscriptions
      :cards="mapRt(tm('membership.subscriptions.cards'), rt)"
      :title="$t('membership.subscriptions.title')"
    />
    <section class="trust">
      <svg width="0" height="0" aria-hidden="true" class="trust__path">
        <defs>
          <clipPath id="trustPath" clipPathUnits="objectBoundingBox">
            <path
              d="M 0.03347 0.99538
C 0.01499 0.99538 0.00000 0.96646 0.00000 0.93077
V 0.14769
C 0.00000 0.11201 0.01499 0.08308 0.03347 0.08308
H 0.19255
C 0.20446 0.08308 0.21416 0.06448 0.21416 0.04154
C 0.21416 0.01860 0.22378 0.00000 0.23572 0.00000
H 0.96733
C 0.98663 0.00000 1.00080 0.02893 1.00080 0.06462
V 0.80769
C 1.00080 0.84338 0.98663 0.87231 0.96733 0.87231
H 0.79280
C 0.77442 0.87231 0.76072 0.89986 0.76072 0.93385
C 0.76072 0.96783 0.74665 0.99538 0.72873 0.99538
H 0.03347
Z
"
            />
          </clipPath>
        </defs>
      </svg>
      <svg width="0" height="0" aria-hidden="true" class="trust__path">
        <defs>
          <clipPath id="trustPathMobile" clipPathUnits="objectBoundingBox">
            <path
              d="M 1 0.93846
C 1 0.97245 0.97912 1 0.95335 1
L 0.04665 1
C 0.02089 1 0 0.97245 0 0.93846
L 0 0.24186
C 0 0.20787 0.02089 0.18032 0.04665 0.18032
L 0.41691 0.18032
C 0.44267 0.18032 0.46356 0.15277 0.46356 0.11878
L 0.46356 0.06154
C 0.46356 0.02755 0.48444 0 0.51020 0
L 0.95335 0
C 0.97912 0 1 0.02755 1 0.06154
L 1 0.93846
Z"
            />
          </clipPath>
        </defs>
      </svg>
      <UiSectionHeader
        :label="$t('membership.trust.label')"
        :title="$t('membership.trust.title')"
        :subtitle="$t('membership.trust.subtitle')"
      />
      <div class="trust__container">
        <div class="trust__label">
          <IconsLightning class="trust__label-icon" />
          <span>{{ $t('membership.trust.incoop') }}</span>
        </div>
        <UiPicture class="trust__banner" src="hands-touch.jpg" alt="banner" />
        <div class="trust__bottom">
          <div class="trust__content">
            <h3 class="trust__content-title">
              {{ $t('membership.trust.image-title') }}
            </h3>
            <p class="trust__content-desc">
              {{ $t('membership.trust.image-subtitle') }}
            </p>
          </div>
          <div class="trust__help">
            <span class="trust__help-title">
              {{ $t('membership.trust.help-title') }}
            </span>
            <p class="trust__help-subtitle">
              {{ $t('membership.trust.help-subtitle') }}
            </p>
          </div>
        </div>
      </div>
      <div class="trust__help">
        <span class="trust__help-title">
          {{ $t('membership.trust.help-title') }}
        </span>
        <p class="trust__help-subtitle">
          {{ $t('membership.trust.help-subtitle') }}
        </p>
      </div>
    </section>
    <section class="how">
      <UiSectionHeader
        :label="$t('membership.how.label')"
        :title="$t('membership.how.title')"
        :subtitle="$t('membership.how.subtitle')"
      />
      <ul class="how__list">
        <li v-for="item in howItems" :key="item.title" class="how__item">
          <h3 class="how__item-title">
            {{ item.title }}
          </h3>
          <div class="how__item-box">
            <div class="how__item-iconbox">
              <component :is="item.icon" class="how__item-icon" />
            </div>
            <p class="how__item-desc">
              {{ item.desc }}
            </p>
          </div>
        </li>
      </ul>
    </section>
    <section class="faq">
      <UiSectionHeader
        class="faq__header"
        :label="$t('membership.faq.label')"
        :title="$t('membership.faq.title')"
        :subtitle="$t('membership.faq.subtitle')"
      />

      <ul class="faq__accordions">
        <li
          v-for="(accordion, i) in mapRt(tm('membership.faq.accordions'), rt)"
          :key="accordion.question"
        >
          <button
            class="faq__accordion"
            :class="{ active: activeAccordion === i }"
            @click="activeAccordion = i"
          >
            <div class="faq__accordion-top">
              <span class="faq__accordion-question">
                {{ accordion.question }}
              </span>
              <div class="faq__accordion-icon" />
            </div>
            <p class="faq__accordion-answer">
              {{ accordion.answer }}
            </p>
          </button>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
import { IconsFileCopy, IconsBigCheck, IconsResetTv } from '#components';
const howSupply = [IconsFileCopy, IconsBigCheck, IconsResetTv];

const { tm, rt } = useI18n();

const activeAccordion = ref(null);

const howItems = mapRt(tm('membership.how.cards'), rt).map((el, i) => ({
  ...el,
  icon: howSupply[i]
}));

usePageSEO('membership');
let heroReveal;

const hideAccordions = e => {
  if (e.target.closest('.faq__accordion')) return;
  activeAccordion.value = null;
};

onMounted(() => {
  document.addEventListener('click', hideAccordions);

  heroReveal = useHeroReveal({
    extra: '.hero .button--orange',
    extraFrom: {
      opacity: 0,
      scale: 1.1
    }
  });

  useAnimate('.trust__container', {
    animProps: {
      clipPath: 'inset(0 0 100%)',
      opacity: 1
    },
    scrollProps: {
      scrub: true
    }
  });
  useAnimate('.how__item', {
    animProps: {
      x: () => Math.random() * 200 - 100,
      y: () => Math.random() * 200 - 100
    }
  });
  document.querySelectorAll('.faq__accordions li').forEach(el => {
    useAnimate(el, {
      animProps: {
        y: 25
      },
      scrollProps: {
        scrub: true,
        start: 'top 95%'
      }
    });
  });
});

onUnmounted(() => {
  document.removeEventListener('click', hideAccordions);
  heroReveal?.revert();
});
</script>

<style lang="scss" scoped>
.faq {
  display: flex;
  margin-inline: var(--spacing-inline);
  padding-inline: max(6rem, 16px);
  padding-block: max(6rem, 20px);
  flex-direction: column;
  align-items: center;
  gap: max(6rem, 20px);
  border-radius: max(2.4rem, 24px);
  border: 1px solid var(--orgn-100, #fbe5d0);
  background: #fff;
  box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
  margin-bottom: calc(9rem - 3.2rem);
  @media screen and (max-width: vars.$bp-sm) {
    margin-inline: 0;
  }
  &__accordion {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: max(2rem, 16px) max(2.4rem, 16px);
    border-radius: max(1.6rem, 12px);
    border: 1px solid #fbe5d0;
    background: var(--orgn-50, #fdf2e7);
    gap: 0;
    transition:
      border 0.4s,
      background 0.4s,
      gap 0.4s 0.5s;
    &:not(.active):hover {
      background-color: #ed7e1736;
    }
    &.active {
      transition:
        border 0.4s,
        background 0.4s,
        gap 0.4s;
      border-color: #ed7e17;
      gap: 8px;
      .faq__accordion-answer {
        max-height: 100px;
      }
      .faq__accordion-icon::before {
        scale: 0 1;
      }
      .faq__accordion-icon::after {
        rotate: 90deg;
      }
    }
    &-icon {
      flex-shrink: 0;
      width: max(1.5rem, 12px);
      height: max(1.5rem, 12px);
      position: relative;
      &::after,
      &::before {
        content: '';
        position: absolute;
        background-color: #bd630f;
        border-radius: 5rem;
        transition: all 0.4s;
      }
      &::after {
        inset-block: 0;
        left: 50%;
        translate: -50%;
        width: 2px;
      }
      &::before {
        inset-inline: 0;
        top: 50%;
        translate: 0 -50%;
        height: 2px;
      }
    }
    &-top {
      gap: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-question {
      text-align: start;
      color: var(--orgn-800, var(--orgn-800, #5f3207));
      font-size: max(2rem, 18px);
      font-weight: 700;
      line-height: 1.3;
    }
    &-answer {
      max-height: 0;
      transition: max-height 1s;
      align-self: flex-start;
      text-align: start;
      color: #525252;
      font-size: max(1.8rem, 16px);
      line-height: 1.55;
      overflow: hidden;
    }
  }
  &__accordions {
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 16px);
    & > * {
      display: flex;
    }
  }
  &__header {
    @media screen and (min-width: vars.$bp-lg) {
      max-width: 60%;
    }
  }
}
.how {
  display: flex;
  padding-inline: var(--spacing-inline);
  flex-direction: column;
  gap: max(6rem, 20px);
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: max(3rem, 16px);
  }
  &__item {
    display: flex;
    padding: max(1.6rem, 12px);
    flex-direction: column;
    gap: max(1rem, 6px);
    border-radius: max(4rem, 28px);
    border: 1px solid var(--orgn-200, #f8cba0);
    background: var(--orgn-100, #fbe5d0);
    box-shadow:
      0 -1px 1px 1px rgba(48, 46, 43, 0.1) inset,
      0 8px 12px -6px rgba(44, 36, 26, 0.28);
    &-title {
      color: var(--orgn-700, var(--orgn-700, #8e4a0b));
      font-family: vars.$font-radio;
      font-size: max(2.4rem, 20px);
      font-weight: 500;
      letter-spacing: -0.24px;
      padding-inline: max(3.2rem, 10px);
    }
    &-box {
      display: flex;
      padding: max(3.2rem, 20px);
      flex-direction: column;
      align-items: flex-start;
      gap: max(3.6rem, 24px);
      align-self: stretch;
      border-radius: max(3.2rem, 20px);
      border: 1px solid var(--orgn-200, #f8cba0);
      background: #fff;

      /* Drop Shadow */
      box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
    }
    &-desc {
      color: var(--orgn-700, #8e4a0b);
      font-size: max(2rem, 16px);
      font-weight: 500;
      line-height: 150%;
    }
    &-iconbox {
      @include mix.flex-center;
      border-radius: 50%;
      width: max(7.4rem, 62px);
      height: max(7.4rem, 62px);
      background-color: #ed7e17;
    }
    &-icon {
      width: 57%;
      fill: none;
    }
  }
}
.trust {
  display: flex;
  flex-direction: column;
  gap: max(6.4rem, 20px);
  padding-inline: var(--spacing-inline);
  & > &__help {
    @media screen and (min-width: 1300px) {
      display: none;
    }
  }
  &__path {
    position: absolute;
  }
  &__container {
    clip-path: inset(0);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    aspect-ratio: 125/65;
    @media screen and (max-width: vars.$bp-sm) {
      aspect-ratio: 34/26;
    }
    & > *:not(picture) {
      z-index: 1;
    }
  }
  &__banner {
    position: absolute;
    inset: 0;
    clip-path: url('#trustPath');
    @media screen and (max-width: vars.$bp-sm) {
      clip-path: url('#trustPathMobile');
    }
  }
  &__help {
    padding-right: 4rem;
    padding-bottom: 1.8rem;
    display: flex;
    flex-direction: column;
    gap: 4px;
    &-title {
      font-size: max(1.8rem, 18px);
      font-weight: 600;
      color: var(--orgn-900, var(--orgn-900, #2f1904));
    }
    &-subtitle {
      font-size: max(1.6rem, 16px);
      color: var(--Blue-400, var(--Neutral-Blue-400, #494f61));
      line-height: 130%;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 10px);
    padding-bottom: max(4.2rem, 16px);
    padding-left: max(4rem, 16px);
    color: #fbe5d0;
    &-title {
      font-size: max(4.4rem, 20px);
      font-weight: 800;
      line-height: 130%;
    }
    &-desc {
      font-size: max(1.8rem, 12px);
      line-height: 155%;
      opacity: 0.7;
      max-width: 60ch;
    }
  }
  &__bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    @media screen and (max-width: 1300px) {
      .trust__help {
        display: none;
      }
    }
  }
  &__label {
    align-self: flex-start;
    display: flex;
    padding: max(1.5914rem, 10px) max(2.387rem, 6px);
    justify-content: center;
    align-items: center;
    gap: max(2rem, 10px);
    border-radius: 60px;
    border: 0.796px solid var(--orgn-100, #fbe5d0);
    background: var(--orgn-700, #8e4a0b);
    font-weight: 600;
    color: var(--orgn-200, var(--orgn-200, #f8cba0));
    line-height: 100%;
    font-size: max(1.6rem, 12px);
    @media screen and (max-width: vars.$bp-sm) {
      margin-left: 6px;
      margin-top: 6px;
    }
    &-icon {
      fill: #f8cba0;
      width: max(1.6rem, 16px);
    }
  }
}
.hero {
  @include mix.flex-center;
  padding-top: max(25rem, 160px);
  padding-bottom: max(25rem, 250px);
  flex-direction: column;
  gap: max(1.6rem, 16px);
  border-radius: 0 0 max(2.4rem, 24px) max(2.4rem, 24px);
  box-shadow: 0 0 0 1px #e5e3e0;
  background: linear-gradient(180deg, var(--orgn-50, #fdf2e7) 72.27%, #fed4ac 100%);
  position: relative;
  @media screen and (max-width: vars.$bp-md) {
    padding-inline: 30px;
    text-align: center;
    margin-bottom: 111px - 20px;
  }
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, #f9d7b6 1.5px, transparent 1.5px);
    mix-blend-mode: multiply;
    pointer-events: none;
    background-size: 25px 25px;

    mask-image: radial-gradient(
      circle at 50% 0%,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.9) 25%,
      rgba(0, 0, 0, 0.4) 45%
    );

    @media screen and (max-width: vars.$bp-md) {
      mask-image: radial-gradient(
        circle at 50% 0%,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.9) 25%,
        rgba(0, 0, 0, 1) 100%
      );
    }
  }
  &__subtitle {
    color: var(--orgn-950, var(--orgn-950, #180c02));
    text-align: center;
    font-size: max(2rem, 14px);
    font-weight: 500;
    line-height: 150%;
    max-width: 40ch;
  }
}
.membership {
  @include mix.container-style;
  overflow-x: clip;
}
</style>
