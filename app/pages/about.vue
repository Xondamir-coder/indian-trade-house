<template>
  <main class="about">
    <section class="hero">
      <div class="hero__content">
        <h1 class="heading-xl">
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
    <UiSectionAdvantages />
    <UiSectionMarket />
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
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
  h1 {
    --text-clr: #fdf2e7;
    font-weight: 600;
  }
  & > * {
    z-index: 1;
  }
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
  &__subtitle {
    color: #f8cba0;
    letter-spacing: 0.3px;
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
