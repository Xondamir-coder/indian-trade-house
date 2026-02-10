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
    <UiSectionServices :items="useMapRt('membership.services')" />
    <UiSectionSubscriptions
      :cards="useMapRt('membership.subscriptions.cards')"
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
            <h2 class="trust__content-title">
              {{ $t('membership.trust.image-title') }}
            </h2>
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
    </section>
    <section class="how">
      <UiSectionHeader
        :label="$t('membership.how.label')"
        :title="$t('membership.how.title')"
        :subtitle="$t('membership.how.subtitle')"
      />
      <ul class="how__list">
        <li v-for="item in howItems" :key="item.title" class="how__item">
          <h4 class="how__item-title">
            {{ item.title }}
          </h4>
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

      <div class="faq__accordions">
        <button
          v-for="(accordion, i) in useMapRt('membership.faq.accordions')"
          :key="accordion.question"
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
      </div>
    </section>
  </main>
</template>

<script setup>
import { IconsAnalytics, IconsCart, IconsSlideshow } from '#components';

const howSupply = [IconsAnalytics, IconsCart, IconsSlideshow];

const activeAccordion = ref(null);

const howItems = computed(() =>
  useMapRt('membership.how.cards')?.map((el, i) => ({ ...el, icon: howSupply[i] }))
);

const hideAccordions = e => {
  if (e.target.closest('.faq__accordion')) return;
  activeAccordion.value = null;
};

onMounted(() => {
  document.addEventListener('click', hideAccordions);
});
onUnmounted(() => {
  document.removeEventListener('click', hideAccordions);
});
</script>

<style lang="scss" scoped>
.faq {
  display: flex;
  margin-inline: var(--spacing-inline);
  padding: 6rem;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  border-radius: 2.4rem;
  border: 1px solid var(--orgn-100, #fbe5d0);
  background: #fff;
  box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
  &__accordion {
    display: flex;
    flex-direction: column;
    padding: 2rem 2.4rem;
    border-radius: 1.6rem;
    border: 1px solid transparent;
    background: var(--orgn-50, #fdf2e7);
    gap: 0;
    transition:
      border 0.4s,
      gap 0.4s 0.5s;
    &.active {
      transition:
        border 0.4s,
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
      width: 1.5rem;
      height: 1.5rem;
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
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-question {
      color: var(--orgn-800, var(--orgn-800, #5f3207));
      font-size: 2rem;
      font-weight: 700;
      line-height: 120%;
    }
    &-answer {
      max-height: 0;
      transition: max-height 1s;
      align-self: flex-start;
      text-align: start;
      color: #525252;
      font-size: 1.8rem;
      line-height: 155%;
      overflow: hidden;
    }
  }
  &__accordions {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
  &__header {
    max-width: 60%;
  }
}
.how {
  display: flex;
  padding-inline: var(--spacing-inline);
  flex-direction: column;
  gap: 6rem;
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
  }
  &__item {
    display: flex;
    padding: 1.6rem;
    flex-direction: column;
    gap: 1rem;
    border-radius: 4rem;
    border: 1px solid var(--orgn-200, #f8cba0);
    background: var(--orgn-100, #fbe5d0);
    box-shadow:
      0 -1px 1px 1px rgba(48, 46, 43, 0.1) inset,
      0 8px 12px -6px rgba(44, 36, 26, 0.28);
    &-title {
      color: var(--orgn-700, var(--orgn-700, #8e4a0b));
      font-family: vars.$font-radio;
      font-size: 2.4rem;
      font-weight: 500;
      letter-spacing: -0.24px;
      padding-inline: 3.2rem;
    }
    &-box {
      display: flex;
      padding: 3.2rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 3.6rem;
      align-self: stretch;
      border-radius: 3.2rem;
      border: 1px solid var(--orgn-200, #f8cba0);
      background: #fff;

      /* Drop Shadow */
      box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
    }
    &-desc {
      color: var(--orgn-700, #8e4a0b);
      font-size: 2rem;
      font-weight: 500;
      line-height: 150%;
    }
    &-iconbox {
      @include mix.flex-center;
      border-radius: 50%;
      width: 7.4rem;
      height: 7.4rem;
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
  gap: 6.4rem;
  padding-inline: var(--spacing-inline);
  &__path {
    position: absolute;
  }
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    aspect-ratio: 125/65;
    & > *:not(picture) {
      z-index: 1;
    }
  }
  &__banner {
    position: absolute;
    inset: 0;
    clip-path: url('#trustPath');
  }
  &__help {
    padding-right: 4rem;
    padding-bottom: 1.8rem;
    display: flex;
    flex-direction: column;
    gap: 4px;
    &-title {
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--orgn-900, var(--orgn-900, #2f1904));
    }
    &-subtitle {
      color: var(--Blue-400, var(--Neutral-Blue-400, #494f61));
      line-height: 130%;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 4.2rem;
    padding-left: 4rem;
    color: #fbe5d0;
    &-title {
      font-size: 4.4rem;
      font-weight: 800;
      line-height: 130%;
    }
    &-desc {
      font-size: 1.8rem;
      line-height: 155%;
      opacity: 0.7;
      max-width: 60ch;
    }
  }
  &__bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  &__label {
    align-self: flex-start;
    display: flex;
    padding: 1.5914rem 2.387rem;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    border-radius: 6rem;
    border: 0.796px solid var(--orgn-100, #fbe5d0);
    background: var(--orgn-700, #8e4a0b);
    font-weight: 600;
    color: var(--orgn-200, var(--orgn-200, #f8cba0));
    line-height: 100%;

    &-icon {
      fill: #f8cba0;
      width: 1.6rem;
    }
  }
}
.hero {
  @include mix.flex-center;
  padding-block: 25rem;
  flex-direction: column;
  gap: 1.6rem;
  border-radius: 0 0 2.4rem 2.4rem;
  box-shadow: 0 0 0 1px #e5e3e0;
  background: linear-gradient(180deg, var(--orgn-50, #fdf2e7) 72.27%, #fed4ac 100%);
  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, #f9d7b6 1.5px, transparent 1.5px);
    mix-blend-mode: multiply;
    pointer-events: none;
    background-size: 25px 25px;

    -webkit-mask-image: radial-gradient(
      circle at 50% 0%,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.9) 25%,
      rgba(0, 0, 0, 0.4) 45%,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0) 75%
    );
    mask-image: radial-gradient(
      circle at 50% 0%,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.9) 25%,
      rgba(0, 0, 0, 0.4) 45%,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0) 75%
    );
  }
  &__subtitle {
    color: var(--orgn-950, var(--orgn-950, #180c02));
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    line-height: 150%;
    max-width: 40ch;
  }
}
.membership {
  display: flex;
  flex-direction: column;
  gap: 6rem;
  overflow-x: clip;
}
</style>
