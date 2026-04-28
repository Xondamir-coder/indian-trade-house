<template>
  <section class="advantages">
    <UiSectionHeader
      class="advantages__header"
      :label="$t('section-advantages.label')"
      :title="$t('section-advantages.title')"
      :subtitle="$t('section-advantages.subtitle')"
    />
    <ul class="advantages__list">
      <li
        v-for="(item, i) in mapRt($tm('section-advantages.info'), $rt)"
        :key="i"
        class="advantages__list-item"
      >
        <h3 class="advantages__list-item-title">{{ item.title }}</h3>
        <p>
          {{ item.subtitle }}
        </p>
      </li>
    </ul>
    <ul class="advantages__cards">
      <li
        v-for="(card, i) in mapRt($tm('section-advantages.cards'), $rt)"
        :key="i"
        class="advantages__card"
      >
        <div class="advantages__card-left">
          <UiPicture src="registan.jpg" alt="registan" class="advantages__card-left-banner" />
          <div class="advantages__card-left-box">
            <div class="advantages__card-left-iconbox">
              <IconsGift class="advantages__card-left-icon" />
            </div>
            <div class="advantages__card-left-content">
              <span class="advantages__card-left-title">
                {{ card.tooltip.title }}
              </span>
              <p class="advantages__card-left-subtitle">
                {{ card.tooltip.subtitle }}
              </p>
            </div>
          </div>
        </div>
        <div class="advantages__card-content">
          <h3 class="advantages__card-content-title">
            {{ card.title }}
          </h3>
          <p class="advantages__card-content-subtitle">
            {{ card.subtitle }}
          </p>
          <div v-for="item in card.items" :key="item.title" class="advantages__card-content-item">
            <div class="advantages__card-content-item-iconbox">
              <IconsStars class="advantages__card-content-item-icon" />
            </div>
            <div class="advantages__card-content-item-box">
              <span class="advantages__card-content-item-title">
                {{ item.title }}
              </span>
              <span class="advantages__card-content-item-subtitle">
                {{ item.subtitle }}
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <SvgAboutServicesBg class="advantages__bg" />
  </section>
</template>

<style scoped lang="scss">
.advantages {
  display: flex;
  padding-inline: max(6rem, 16px);
  padding-block: max(6rem, 20px);
  flex-direction: column;
  gap: max(6rem, 20px);
  border-radius: 24px;
  border: 1px solid var(--orgn-100, #fbe5d0);
  background: #fff;
  margin-inline: var(--spacing-inline);
  position: relative;
  box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);

  @media screen and (max-width: vars.$bp-sm) {
    margin-inline: 0;
  }
  & > *:not(.advantages__bg) {
    z-index: 1;
  }
  &__bg {
    position: absolute;
    inset-inline: 0;
    bottom: 0;
    @media screen and (max-width: vars.$bp-md) {
      display: none;
    }
  }
  &__card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: max(6.7rem, 30px);
    @media screen and (max-width: vars.$bp-md) {
      grid-template-columns: 1fr;
    }
    @media screen and (min-width: vars.$bp-md) {
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
    }
    @media screen and (max-width: vars.$bp-md) {
      &:nth-child(even) .advantages__card-left-box {
        left: 0;
      }
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: max(2.4rem, 16px);
      &-title {
        color: var(--orgn-800, var(--orgn-800, #5f3207));
        font-size: max(3.6rem, 24px);
        font-weight: 800;
        line-height: 130%;
      }
      &-subtitle {
        font-size: max(2rem, 16px);
        color: var(--orgn-950, var(--orgn-950, #180c02));
        line-height: 152%;
        letter-spacing: -0.3px;
      }
      &-item {
        padding: max(1.2rem, 12px) max(1.6rem, 12px);
        display: flex;
        gap: 16px;
        border-radius: 16px;
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
          font-size: max(2rem, 18px);
          font-weight: 800;
          color: var(--orgn-500, var(--orgn-500, #ed7e17));
        }
        &-subtitle {
          color: var(--orgn-900, var(--orgn-900, #2f1904));
          line-height: 130%;
          font-size: max(1.6rem, 12px);
        }
        &-iconbox {
          @include mix.flex-center;
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: var(--orgn-500, #ed7e17);
        }
        &-icon {
          width: 45.75%;
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
        font-size: 14px;
        font-weight: 600;
      }
      &-subtitle {
        font-size: 12px;
      }
      &-iconbox {
        @include mix.flex-center;
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        border-radius: 6px;
        border: 0.6px solid #daade3;
        background: var(--Neutral-White-50, #fefefe);
      }
      &-icon {
        width: 41.25%;
      }
      &-box {
        position: absolute;
        translate: 0 30%;
        max-width: max(48%, 240px);
        padding: 16px;
        padding-bottom: max(1.6rem, 8px);
        display: flex;
        gap: 12px;
        border-radius: 16px;
        border: 1px solid #ffb166;
        background: linear-gradient(
          102deg,
          rgba(198, 93, 1, 0.5) 5.94%,
          rgba(166, 117, 1, 0.5) 98.1%
        );
        box-shadow: 0 2px 60px 0 rgba(94, 38, 0, 0.04);
        backdrop-filter: blur(10px);
        z-index: 1;
        @media screen and (max-width: vars.$bp-md) {
          translate: none;
        }
      }
      &-banner {
        border-radius: 20px;
        box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
        @media screen and (min-width: vars.$bp-md) {
          position: absolute;
          inset: 0;
          max-width: 93%;
        }
        @media screen and (max-width: vars.$bp-md) {
          max-height: 92%;
          align-self: flex-start;
          aspect-ratio: 34.3/34;
        }
      }
    }
  }
  &__cards {
    display: flex;
    flex-direction: column;
    gap: max(9rem, 30px);
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    &-item {
      display: flex;
      padding-inline: 2.4rem;
      padding-block: max(2.4rem, 16px);
      flex-direction: column;
      align-items: center;
      gap: 16px;
      text-align: center;
      @media screen and (max-width: vars.$bp-sm) {
        padding-inline: 0;
      }
      p {
        font-weight: 500;
        line-height: 130%;
        color: #2f1904;
        font-size: max(1.6rem, 16px);
      }
      &-title {
        color: var(--orgn-500, var(--orgn-500, #ed7e17));
        font-size: max(3.2rem, 32px);
        font-weight: 800;
        line-height: 130%;
      }
    }
  }
  &__header {
    @media screen and (min-width: vars.$bp-lg) {
      max-width: 62%;
    }
  }
}
</style>
