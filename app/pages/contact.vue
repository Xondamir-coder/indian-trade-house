<template>
  <main class="contact">
    <section class="hero">
      <UiPicture src="contacts-hero.png" class="hero__bg" alt="bg" />
      <UiPicture src="contacts-hero-mobile.png" class="hero__bg" alt="bg" />
      <h1 class="heading-xl">
        {{ $t('contact.hero.title') }}
      </h1>
      <p class="hero__subtitle">
        {{ $t('contact.hero.subtitle') }}
      </p>
      <button class="button--orange">
        {{ $t('apply-membership') }}
      </button>
    </section>
    <UiSectionServices
      :items="useMapRt('contact.services')"
      :title="$t('contact.help.title')"
      :subtitle="$t('contact.help.subtitle')"
    />
    <section class="help">
      <div class="help__container">
        <UiSectionHeader
          class="help__header"
          :label="$t('contact.help.label')"
          :title="$t('contact.help.title')"
          :subtitle="$t('contact.help.subtitle')"
        />
        <UiForm />
      </div>
      <div class="help__box">
        <h3 class="help__box-label">
          {{ $t('contact.help.next') }}
        </h3>
        <ul class="help__box-steps">
          <li v-for="(step, i) in useMapRt('contact.help.steps')" :key="i" class="help__box-step">
            <span>{{ (i + 1).toString().padStart(2, '0') }}</span>
            <span>{{ step }}</span>
          </li>
        </ul>
      </div>
      <div class="help__box">
        <h3 class="help__box-label">
          {{ $t('contact.help.urgent.title') }}
        </h3>
        <p class="help__box-subtitle">
          {{ $t('contact.help.urgent.subtitle') }}
        </p>
        <a href="tel:+998 90 900 90 09" class="help__box-cta">
          <div class="help__box-cta-iconbox">
            <IconsPhone class="help__box-cta-icon" />
          </div>
          <span>+998 90 900 90 09</span>
        </a>
        <a href="mailto:support@ithu.uz" class="help__box-cta">
          <div class="help__box-cta-iconbox">
            <IconsMailOpened class="help__box-cta-icon" />
          </div>
          <span>support@ithu.uz</span>
        </a>
      </div>
    </section>
    <section class="map">
      <UiPicture src="sitting-at-table.jpg" alt="banner" class="map__bg" />
      <div class="map__container">
        <div class="map__box">
          <UiPicture src="tashkent-map.jpg" alt="map" class="map__box-banner" />
          <div class="map__box-container">
            <div class="map__box-item">
              <button class="map__box-button">
                <span>{{ $t('contact.map.view') }}</span>
                <IconsArrowRight class="map__box-arrow" />
              </button>
              <div class="map__box-content">
                <span>{{ $t('tashkent') }}</span>
                <span>{{ $t('contact.map.address') }}</span>
              </div>
            </div>
            <div class="map__box-dot"></div>
            <svg width="0" height="0" aria-hidden="true" class="map__svg">
              <defs>
                <clipPath id="bubbleClip" clipPathUnits="objectBoundingBox">
                  <path
                    d="M 1.00000 0.11765
C 1.00000 0.05268 0.96288 0.00000 0.91549 0.00000
L 0.08451 0.00000
C 0.03712 0.00000 0.00000 0.05268 0.00000 0.11765
L 0.00000 0.78431
C 0.00000 0.84929 0.03712 0.90196 0.08451 0.90196
L 0.37303 0.90196
C 0.39559 0.90196 0.41743 0.91443 0.43366 0.93612
L 0.46506 0.98055
C 0.48438 1.00750 0.51570 1.00750 0.53502 0.98055
L 0.56642 0.93612
C 0.58265 0.91443 0.60449 0.90196 0.62705 0.90196
L 0.91549 0.90196
C 0.96288 0.90196 1.00000 0.84929 1.00000 0.78431
L 1.00000 0.11765
Z
"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.map {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: max(25rem, 210px);
  margin-bottom: calc(9rem - 3.2rem);
  &__bg {
    aspect-ratio: 144/66.5;
    position: absolute;
    top: 0;
    inset-inline: 0;
    @media screen and (max-width: vars.$bp-lg) {
      aspect-ratio: 37.5/26;
    }
  }
  &__container {
    padding-inline: var(--spacing-inline);
    z-index: 2;
    @media screen and (max-width: vars.$bp-sm) {
      padding-inline: 0;
    }
  }
  &__svg {
    position: absolute;
  }
  &__box {
    z-index: 2;
    display: grid;
    border-radius: 2.4rem;
    background: var(--Primary-warmth, #fffefd);
    box-shadow: 0 21px 100px -7px rgba(124, 62, 12, 0.3);
    overflow: hidden;
    &-dot {
      width: max(2.8rem, 28px);
      height: max(2.8rem, 28px);
      background-color: #8e4a0b;
      border-radius: 50%;
      align-self: center;
      position: relative;
      &::before,
      &::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        background-color: #8e4a0b;
      }
      &::before {
        inset: -71.5%;
        opacity: 0.2;
      }
      &::after {
        inset: -475%;
        opacity: 0.1;
      }
    }
    &-container {
      margin-bottom: 4%;
      place-self: center;
      display: flex;
      flex-direction: column;
      gap: max(2.2rem, 22px);
    }
    &-button {
      display: flex;
      padding-left: max(2.39rem, 16px);
      padding-right: max(1.6rem, 10px);
      height: max(4.8rem, 40px);
      justify-content: space-between;
      align-items: center;
      gap: max(0.7957rem, 8px);
      border-radius: max(6.1rem, 61px);
      background: var(--orgn-50, #fdf2e7);
      transition: background 0.4s;
      &:hover {
        background: var(--orgn-100, #fbe5d0);
      }
      span {
        color: var(--orgn-700, var(--orgn-700, #8e4a0b));
        font-weight: 600;
        line-height: 100%;
      }
    }
    &-content {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: max(1.2rem, 12px);
      text-align: center;
      span {
        &:first-child {
          color: var(--orgn-900, var(--orgn-900, #2f1904));
          text-align: center;
          font-size: max(2rem, 20px);
          font-weight: 700;
          line-height: 120%;
        }
        &:last-child {
          color: var(--Blue-400, var(--Neutral-Blue-400, #494f61));
          font-size: max(1.6rem, 16px);
          font-weight: 500;
          line-height: 130%;
          max-width: 20ch;
        }
      }
    }
    &-item {
      z-index: 1;
      padding: max(1.6rem, 16px);
      padding-bottom: max(4.82rem, 48px);
      display: flex;
      flex-direction: column;
      gap: max(2rem, 20px);
      background: var(--Primary-warmth, #fffefd);
      box-shadow: 16px 22px 140px rgba(35, 35, 35, 0.1);
      clip-path: url('#bubbleClip');
    }
    &-arrow {
      width: max(2.4rem, 20px);
      fill: #8e4a0b;
    }
    &-banner {
      aspect-ratio: 125.6/64.7;
      @media screen and (max-width: vars.$bp-lg) {
        aspect-ratio: 37.5/42;
      }
    }
    & > * {
      grid-area: 1/1/2/2;
    }
  }
}
.help {
  display: grid;
  grid-template-columns: 1.92fr 1fr;
  gap: max(3rem, 20px);
  padding-inline: var(--spacing-inline);
  @media screen and (max-width: vars.$bp-lg) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: vars.$bp-md) {
    padding-inline: 0;
  }
  &__header {
    align-self: flex-start;
    text-align: start;
    align-items: flex-start;
    @media screen and (min-width: vars.$bp-lg) {
      max-width: 80%;
    }
  }
  &__container {
    grid-row: span 3;
    padding-block: max(6rem, 20px);
    padding-inline: max(6rem, 16px);
    display: flex;
    gap: max(6rem, 20px);
    flex-direction: column;
    border-radius: max(2.4rem, 24px);
    border: 1px solid var(--orgn-100, #fbe5d0);
    background: #fff;

    /* Drop Shadow */
    box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
  }

  &__box {
    display: flex;
    padding: max(1.6rem, 10px);
    flex-direction: column;
    gap: max(1.6rem, 10px);
    border-radius: max(2.4rem, 20px);
    border: 1px solid var(--orgn-200, #f8cba0);
    background: var(--orgn-100, #fbe5d0);

    /* Drop Shadow */
    box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);

    @media screen and (max-width: vars.$bp-md) {
      margin-inline: var(--spacing-inline);
    }
    &-label {
      color: var(--orgn-800, var(--orgn-800, #5f3207));
      font-family: vars.$font-radio;
      font-size: max(2.4rem, 20px);
      font-weight: 600;
      line-height: 133%;
      letter-spacing: -0.24px;
    }
    &-step {
      color: var(--orgn-900, #2f1904);
      line-height: 130%;
      display: flex;
      align-items: center;
      gap: max(1.6rem, 16px);
      z-index: 1;

      & > *:first-child {
        @include mix.flex-center;
        width: max(3.2rem, 28px);
        height: max(3.2rem, 28px);
        color: #fff;
        font-size: max(1.4rem, 12px);
        font-weight: 800;
        border-radius: 50%;
        background: var(--orgn-400, #f09642);
        flex-shrink: 0;
      }
      & > *:last-child {
        font-family: vars.$font-inter;
        font-size: max(2.4rem, 18px);
        font-weight: 600;
      }
    }
    &-steps {
      display: flex;
      padding: max(3.2rem, 16px);
      flex-direction: column;
      gap: max(2rem, 20px);
      border-radius: max(3.2rem, 22px);
      border: 1px solid var(--orgn-200, #f8cba0);
      background: #fff;

      /* Drop Shadow */
      box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 60%;
        background: var(--orgn-200, #f8cba0);
        left: calc(max(3.2rem, 24px) + (3.2 / 2) * 1rem);
        top: max(3.2rem, 28px);
      }
    }
    &-subtitle {
      color: var(--orgn-800, var(--orgn-800, #5f3207));
      font-size: max(1.8rem, 16px);
      font-weight: 600;
      line-height: 130%;
    }
    &-cta {
      display: flex;
      padding: max(1.6rem, 12px);
      align-items: center;
      gap: max(1rem, 10px);
      border-radius: max(3.2rem, 26px);
      border: 1px solid var(--orgn-200, #f8cba0);
      background: #fff;
      color: var(--orgn-900, #2f1904);

      /* Drop Shadow */
      box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
      transition: all 0.4s;
      &:hover {
        background: #bd630fa4;
        color: #fff;
      }
      span {
        font-family: vars.$font-inter;
        font-size: max(2.4rem, 20px);
        font-weight: 600;
        line-height: 130%;
      }
      &-iconbox {
        @include mix.flex-center;
        width: max(5.2rem, 52px);
        height: max(5.2rem, 52px);
        border-radius: 50%;
        border: 0.833px solid var(--orgn-100, #fbe5d0);
        background: var(--orgn-100, #fbe5d0);
      }
      &-icon {
        fill: none;
        width: 47%;
      }
    }
  }
}
.hero {
  @include mix.flex-center;
  padding-top: max(25rem, 160px);
  padding-bottom: max(25rem, 250px);
  padding-inline: 30px;
  flex-direction: column;
  gap: max(1.6rem, 16px);
  border-radius: 0 0 max(1.6rem, 24px) max(1.6rem, 24px);
  position: relative;
  background: linear-gradient(180deg, var(--orgn-50, #fdf2e7) 72.27%, #fed4ac 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, #f09642 1.5px, transparent 1.5px);
    mix-blend-mode: darken;
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
      rgba(0, 0, 0, 0.5) 45%,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0) 75%
    );
  }
  & > *:not(.hero__bg) {
    z-index: 1;
  }
  &__bg {
    position: absolute;
    inset: 0;
    mix-blend-mode: multiply;
    &:first-of-type {
      @media screen and (max-width: vars.$bp-lg) {
        display: none;
      }
    }
    &:last-of-type {
      @media screen and (min-width: vars.$bp-lg) {
        display: none;
      }
    }
  }
  &__subtitle {
    color: var(--orgn-950, var(--orgn-950, #180c02));
    text-align: center;
    font-size: max(2rem, 14px);
    font-weight: 500;
    line-height: 150%;
    max-width: 45ch;
  }
}
.contact {
  @include mix.container-style;
}
</style>
