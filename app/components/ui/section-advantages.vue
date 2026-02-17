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
        v-for="(item, i) in useMapRt('section-advantages.info')"
        :key="i"
        class="advantages__list-item"
      >
        <h4 class="advantages__list-item-title">{{ item.title }}</h4>
        <p>
          {{ item.subtitle }}
        </p>
      </li>
    </ul>
    <ul class="advantages__cards">
      <li
        v-for="(card, i) in useMapRt('section-advantages.cards')"
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
  & > *:not(.advantages__bg) {
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
</style>
