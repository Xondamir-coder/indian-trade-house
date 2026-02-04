<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title">
          <span v-for="text in $tm('home.hero.title')" :key="text">
            {{ $rt(text) }}
          </span>
        </h1>
        <p class="hero__subtitle">
          {{ $t('home.hero.subtitle') }}
        </p>
        <div class="hero__buttons">
          <button class="button--orange">
            {{ $t('explore-opp') }}
          </button>
          <button class="button--white">
            {{ $t('view-packages') }}
          </button>
        </div>
      </div>
      <div class="hero__box">
        <UiPicture src="spice-1.png" alt="spices banner" class="hero__pic" />
      </div>
    </div>
    <div class="hero__things">
      <UiPicture src="spice-1.png" alt="spice 1" class="hero__things-pic" />
      <UiPicture src="spice-2.png" alt="spice 2" class="hero__things-pic" />
      <UiPicture src="spice-3.png" alt="spice 3" class="hero__things-pic" />
      <div class="hero__things-box">
        <SvgGreenLightning class="hero__things-lightning" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.hero {
  padding-inline: max(3.2rem, 20px);
  display: flex;
  flex-direction: column;
  &__things {
    margin-top: -15%;
    align-self: center;
    width: 23%;
    aspect-ratio: 1;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        166deg,
        rgba(247, 244, 240, 0.8) 51.46%,
        rgba(255, 219, 172, 0.8) 90.25%
      );
      backdrop-filter: blur(10px);
      border-radius: 50%;
      z-index: -1;
    }
    &-box {
      @include mix.flex-center;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow:
        0 -1px 1px 0 rgba(228, 228, 228, 0.25),
        0 2px 2px 0 rgba(175, 175, 175, 0.25),
        0 0 0 1px rgba(252, 252, 252, 0.17),
        0 2px 4px 0 rgba(252, 252, 252, 0.04);
      position: absolute;
      left: 50%;
      top: 50%;
      translate: -50%;
    }
    &-pic {
      width: 68px;
      position: absolute;
      border-radius: 10rem;
      border: 2px solid var(--Neutral-White-50, #fefefe);
      &:first-child {
        left: 50%;
        translate: -50% 50%;
        bottom: 0;
      }
      &:nth-child(2) {
        left: 0;
        bottom: 5%;
        translate: 20%;
      }
      &:nth-child(3) {
        right: 0;
        bottom: 5%;
        translate: -20%;
      }
    }
  }
  &__pic {
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
  }
  &__box {
    position: relative;
    width: 60%;
    aspect-ratio: 2 / 1;
    &::after {
      content: '';
      position: absolute;
      inset: -40px;
      aspect-ratio: 1;
      border-radius: 50%;
      border: 4px solid #fff;
      mix-blend-mode: lighten;
    }
  }
  &__container {
    border-radius: 2.4rem;
    box-shadow: 0 0 0 1px #e5e3e0;
    margin-top: min(-4rem, -25px);
    padding-top: calc(max(4rem, 25px) + max(4rem, 30px));
    min-height: 116vh;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background: conic-gradient(
      from 180deg at 50% 50%,
      var(--orgn-500, #ed7e17) 0deg,
      var(--orgn-50, #fdf2e7) 209.4230818748474deg,
      var(--orgn-100, #fbe5d0) 360deg
    );
    &::after {
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
  }
  &__title {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 5.4rem;
    font-weight: 800;
    line-height: 133%;
    color: var(--orgn-900, #2f1904);
  }
  &__subtitle {
    font-size: 2rem;
    font-family: vars.$font-inter;
    line-height: 152%;
    color: var(--Neutral-Grey-400, #515050);
    letter-spacing: -0.3px;
    text-align: center;
    max-width: 63ch;
  }
  &__content {
    z-index: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.6rem;
  }
  &__buttons {
    display: flex;
    gap: 1.6rem;
  }
}
</style>
