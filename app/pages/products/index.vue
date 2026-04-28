<template>
  <main class="products">
    <section class="hero">
      <h1 class="hero__title heading-xl">
        {{ $t('products.hero.title') }}
      </h1>
      <p class="hero__subtitle">
        {{ $t('products.hero.subtitle') }}
      </p>
      <UiSearchFilterBar />
    </section>
    <section class="cards">
      <UiInfoCards />
    </section>
    <UiProductsList />
  </main>
</template>

<script setup>
usePageSEO('products');
</script>

<style lang="scss" scoped>
.cards {
  padding-inline: var(--spacing-inline);
}
.hero {
  padding-inline: var(--spacing-inline);
  padding-top: max(19rem, 183px);
  padding-bottom: max(6rem, 20px);
  display: flex;
  gap: max(1.6rem, 16px);
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 0 0 max(2.6rem, 26px) max(2.6rem, 26px);
  background:
    radial-gradient(
      65% 50% at 52% 18%,
      #3a1207 0%,
      #5a1e0c 28%,
      rgba(90, 30, 12, 0.65) 48%,
      rgba(90, 30, 12, 0.35) 62%,
      rgba(90, 30, 12, 0) 78%
    ),
    linear-gradient(135deg, #8f3a14 0%, #b8673f 38%, #ddb79f 68%, #c6929d 100%);

  @media screen and (max-width: vars.$bp-md) {
    background: linear-gradient(to bottom, #954327 0%, #772407 50%, #ecc3b5 100%);
  }

  & > * {
    z-index: 1;
  }
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, #d19d78 1.5px, transparent 1.5px);
    mix-blend-mode: lighten;
    pointer-events: none;
    background-size: 25px 25px;
    opacity: 0.4;

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
  &__title {
    text-align: center;
    --text-clr: #fff;
  }
  &__subtitle {
    text-align: center;
    color: #fdf2e7;
    font-size: max(2rem, 14px);
    font-weight: 600;
    line-height: 120%;
    max-width: 60ch;
  }
}
.products {
  @include mix.container-style;
}
</style>
