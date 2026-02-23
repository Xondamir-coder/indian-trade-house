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
@keyframes travel {
  from {
    translate: 200%;
  }
  to {
    translate: -500%;
  }
}
.partners {
  margin-block: max(6rem, 40px);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 45%),
    linear-gradient(90deg, #f66840 0%, #f66965 32%, #f9987e 72%, #fcbf97 100%);
  padding: max(6rem, 20px) max(2.4rem, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: max(3rem, 16px);
  &__header {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    text-align: center;

    h2,
    p {
      --text-clr: #fff;
    }
    &-icon {
      width: max(1.6rem, 16px);
      fill: #fff;
      flex-shrink: 0;
    }
    &-label {
      display: flex;
      padding: 8px 16px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 12px;
      border: 1.2px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.2);
      font-weight: 600;
      color: #fff;
      margin-bottom: max(3.2rem, 8px);
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(6, 120px);
    gap: 16px;
    overflow-x: scroll;
    max-width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__item {
    @include mix.flex-center;
    padding: 29px 10px 29px 10px;
    @media screen and (max-width: vars.$bp-lg) {
      animation: travel 50s linear infinite alternate;
    }
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
