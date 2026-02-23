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
              {{ item['image-subtitle'] }}
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
      <UiInfoCards />
      <button class="demand__button button--white">
        {{ $t('explore-all-sectors') }}
      </button>
    </section>
    <div class="home__wrapper">
      <UiPicture src="background-splash.png" alt="splash" class="home__wrapper-bg" />
      <UiSectionServices :items="useMapRt('home.services-cards')" />
    </div>
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
    <UiSectionSubscriptions
      :cards="useMapRt('home.subscriptions.cards')"
      :title="$t('home.subscriptions.title')"
    />
  </main>
</template>

<script setup>
const whyItems = computed(() => useMapRt('home.why.cards'));
const roadmapItems = computed(() => useMapRt('home.roadmap.sections'));
</script>

<style lang="scss" scoped>
.roadmap {
  display: flex;
  flex-direction: column;
  gap: max(3rem, 20px);
  margin-inline: var(--spacing-inline);
  border-radius: 20px;
  border: 1px solid var(--orgn-100, #fbe5d0);
  background: #fefefe;
  box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
  padding-inline: max(4rem, 16px);
  padding-block: 40px;
  position: relative;
  @media screen and (max-width: vars.$bp-sm) {
    margin-inline: 0;
  }
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
    @media screen and (min-width: vars.$bp-lg) {
      max-width: 57%;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: max(3rem, 20px);
  }
  &__item {
    font-family: vars.$font-inter;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: max(7.2rem, 20px);
    @media screen and (max-width: vars.$bp-md) {
      grid-template-columns: 1fr;
    }
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
        color: var(--Neutral-Grey-800, #0b2812);
        font-size: max(1.8rem, 16px);
        font-weight: 600;
        line-height: 130%;
      }
      &-text {
        color: #165023;
      }
    }
    &-info {
      position: absolute;
      top: 0;
      left: -15%;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 12px 16px;
      border-radius: 16px;
      border: 1px solid var(--Neutral-White-50, #fefefe);
      background: linear-gradient(
        134deg,
        var(--grn-600, #2ca047) 15.34%,
        var(--grn-400, #5fd37a) 79.59%
      );
      box-shadow: 0 2px 8px 0 rgba(81, 81, 81, 0.06);
      z-index: 1;
      @media screen and (max-width: vars.$bp-md) {
        left: -15%;
      }
      h4 {
        color: var(--Neutral-White-50, #fefefe);
        font-size: max(1.4rem, 14px);
        font-weight: 600;
        align-self: center;
        text-align: center;
      }
      &-boxes {
        display: flex;
        justify-content: space-between;
        gap: 38px;
      }
      &-box {
        color: var(--Neutral-White-50, #fefefe);
        display: flex;
        flex-direction: column;
      }
      &-percent {
        font-size: 30px;
        line-height: 130%;
        font-weight: 600;
      }
      &-title {
        font-size: 12px;
        line-height: 150%;
      }
    }
    &-card {
      padding: max(2rem, 8px);
      display: flex;
      flex-direction: column;
      gap: max(4rem, 20px);
      border-radius: max(2rem, 14px);
      border: 8px solid var(--Neutral-White-50, #fefefe);
      background: #fbfaf9;

      /* stroke 01 */
      box-shadow:
        0 0 0 1px rgba(3, 7, 18, 0.06),
        0 2px 4px 0 rgba(3, 7, 18, 0.04);

      @media screen and (max-width: vars.$bp-md) {
        margin-left: 0;
      }
    }
    &-label {
      display: flex;
      padding: 6px 16px;
      align-items: center;
      gap: 8px;
      border-radius: 10px;
      border: 1px solid var(--orgn-100, #fbe5d0);
      background: #fefefe;
      box-shadow:
        0 0 0 1px #e5e3e0,
        0 2px 8px 0 rgba(81, 81, 81, 0.06);
      font-size: 14px;
      font-weight: 500;
      color: var(--orgn-800, #5f3207);
    }
    &-title {
      margin-top: max(2.4rem, 16px);
      color: #141414;
      font-size: max(3.6rem, 24px);
      font-weight: 600;
      line-height: 130%;
    }
    &-subtitle {
      margin-top: 16px;
      font-size: max(2rem, 16px);
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
        @media screen and (max-width: vars.$bp-md) {
          margin-left: 0;
        }
      }
    }
    &:nth-child(even) {
      .roadmap__item-right {
        @media screen and (min-width: vars.$bp-md) {
          order: -1;
        }
      }
      .roadmap__item-box-pic {
        &:first-of-type {
          left: -25%;
          top: 0;
          width: 55%;
          filter: drop-shadow(0 2px 8px #afe9bcbc);
          z-index: 1;
          @media screen and (max-width: vars.$bp-md) {
            left: -10%;
          }
        }
        &:last-of-type {
          inset-inline: 0;
          bottom: max(3rem, 28px);
        }
      }
    }
  }
}
.demand {
  display: flex;
  flex-direction: column;
  gap: max(3rem, 30px);
  padding-inline: var(--spacing-inline);
  &__button {
    align-self: center;
  }
}
.why {
  margin-top: max(3rem, 30px);
  display: flex;
  flex-direction: column;
  gap: max(5rem, 20px);
  padding-inline: var(--spacing-inline);
  &__item {
    display: flex;
    padding: max(2rem, 10px);
    flex-direction: column;
    gap: 16px;
    border-radius: 20px;
    border: 2px solid var(--orgn-100, #fbe5d0);
    background: var(--Neutral-White-50, #fefefe);
    box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
    &-top {
      aspect-ratio: 57.3/36.6;
      position: relative;
      overflow: hidden;
      border-radius: 14px;
      border: 1px solid var(--orgn-100, #fbe5d0);

      box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      gap: max(0.8rem, 6px);
      padding-block: max(3rem, 10px);
      padding-inline: max(3rem, 16px);
      @media screen and (max-width: vars.$bp-md) {
        aspect-ratio: 32.3/22.3;
      }
      & > *:not(.why__item-top-banner) {
        z-index: 1;
      }
      &-text {
        font-family: vars.$font-inter;
        line-height: 130%;
        color: #e8e9eb;
        font-size: max(1.6rem, 12px);
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
        font-size: max(2rem, 20px);
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
      padding: max(2rem, 14px);
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: max(1.2rem, 10px);
      border-radius: max(1.4rem, 12px);
      background: var(--orgn-50, #fdf2e7);
      &-amount {
        --text-clr: #ed7e17;
      }
      &-title {
        color: #5f3207;
        font-size: max(1.8rem, 16px);
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
  gap: max(6rem, 40px);
  overflow-x: clip;
  &__wrapper {
    position: relative;
    &-bg {
      position: absolute;
      z-index: -1;

      @media screen and (min-width: vars.$bp-lg) {
        width: 123%;
        left: 50%;
        translate: -50%;
        top: -8%;
      }
      @media screen and (max-width: vars.$bp-lg) {
        width: 250%;
        top: 0;
        left: 50%;
        translate: -50%;
      }
    }
  }
}
</style>
