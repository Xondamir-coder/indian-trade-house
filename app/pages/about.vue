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

<script setup>
usePageSEO('about');

let heroReveal;

onMounted(() => {
  heroReveal = useHeroReveal();
  useAnimate('.hero__pic:first-child', {
    animProps: {
      y: 50,
      rotate: 5,
      x: -50,
      delay: 0.5
    }
  });
  useAnimate('.hero__pic:last-child', {
    animProps: {
      y: 50,
      rotate: -5,
      x: 50,
      delay: 0.5
    }
  });
});

onBeforeUnmount(() => {
  heroReveal?.revert();
});
</script>

<style lang="scss" scoped>
.hero {
  color: var(--orgn-50, var(--orgn-50, #fdf2e7));
  font-family: vars.$font-inter;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 23px;
  padding-top: max(18.2rem, 150px);
  @media screen and (max-width: vars.$bp-sm) {
    overflow: hidden;
    gap: 96px;
  }
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

    mask-image: radial-gradient(
      circle at 50% 0%,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.9) 25%,
      rgba(0, 0, 0, 0.4) 45%,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0) 75%
    );

    @media screen and (max-width: vars.$bp-sm) {
      mask-image: radial-gradient(
        circle at 50% 0%,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.9) 70%,
        rgba(0, 0, 0, 0.1) 100%
      );
    }
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    height: 80%;
    z-index: -1;
    border-radius: 0 0 max(2.6rem, 20px) max(2.6rem, 20px);
    background:
      radial-gradient(600px 500px at 20% 40%, #b65a2b 0%, transparent 70%),
      radial-gradient(500px 500px at 55% 20%, #f3b77d 0%, transparent 65%),
      radial-gradient(700px 600px at 75% 70%, #e6b3b8 0%, transparent 70%),
      linear-gradient(135deg, #a5532b 0%, #d98c5f 45%, #e9c2b0 70%, #b06a50 100%);

    @media screen and (max-width: vars.$bp-sm) {
      height: 90%;
    }
  }
  &__container {
    display: flex;
    align-items: flex-start;
  }
  &__arrow {
    width: max(23.9535rem, 100px);
    margin-top: 5%;
    animation: appear 0.5s 0.6s backwards;
    @media screen and (max-width: vars.$bp-sm) {
      display: none;
    }
  }
  &__pic {
    width: max(35rem, 226px);
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;

    text-align: center;
    @media screen and (max-width: vars.$bp-sm) {
      padding-inline: 30px;
      h1 {
        font-size: 28px;
      }
    }
    @media screen and (min-width: vars.$bp-sm) {
      max-width: 55.555%;
    }
  }
  &__subtitle {
    color: #e8e9eb;
    letter-spacing: 0.3px;
    font-size: max(2rem, 14px);
    line-height: 152%;
  }
}
.about {
  @include mix.container-style;
}
</style>
