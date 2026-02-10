<template>
  <main class="contact">
    <section class="hero">
      <UiPicture src="contacts-hero.png" class="hero__bg" alt="bg" />
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
    <UiSectionServices :items="useMapRt('contact.services')" />
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.hero {
  @include mix.flex-center;
  padding-block: 25rem;
  flex-direction: column;
  gap: 1.6rem;
  border-radius: 0 0 2.4rem 2.4rem;
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
.contact {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}
</style>
