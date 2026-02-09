<template>
  <div class="partners">
    <div class="partners__header">
      <div class="partners__header-label">
        <IconsLightning class="partners__header-icon" />
        <span>{{ $t('partners-section.label') }}</span>
      </div>
      <h2 class="heading-lg">{{ $t('partners-section.title') }}</h2>
      <p class="body-xl">{{ $t('partners-section.subtitle') }}</p>
    </div>
    <ul class="partners__list">
      <li v-for="(item, i) in partners" :key="i" class="partners__item">
        <component :is="item" class="partners__item-logo" />
      </li>
    </ul>
    <button class="button--white">{{ $t('partners-section.button-label') }}</button>
  </div>
</template>

<script setup>
import { SvgFigma, SvgLogoipsum, SvgTelegram, SvgZendesk } from '#components';

const partners = [SvgLogoipsum, SvgLogoipsum, SvgZendesk, SvgLogoipsum, SvgTelegram, SvgFigma];
</script>

<style lang="scss" scoped>
.partners {
  margin-block: 6rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 45%),
    linear-gradient(90deg, #f66840 0%, #f66965 32%, #f9987e 72%, #fcbf97 100%);
  padding: 6rem 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  &__header {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
    text-align: center;

    h2,
    p {
      --text-clr: #fff;
    }
    &-icon {
      width: 1.6rem;
      fill: #fff;
    }
    &-label {
      display: flex;
      padding: 0.8rem 1.6rem;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      border-radius: 1.2rem;
      border: 1.2px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.2);
      font-weight: 600;
      color: #fff;
      margin-bottom: 3.2rem;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(6, 12rem);
    gap: 1.6rem;
  }
  &__item {
    @include mix.flex-center;
    padding: 2.9rem 1rem 2.9852rem 1rem;
    &:nth-child(3) svg {
      width: 60%;
    }
    &:nth-child(5) svg {
      width: 60%;
    }
    &:nth-child(6) svg {
      width: 70%;
    }
  }
}
</style>
