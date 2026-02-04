<template>
  <header class="header">
    <NuxtLink class="header__logo" :to="$localePath('/')">
      <SvgLogo />
      <span>Indian Trade</span>
    </NuxtLink>
    <nav class="header__nav">
      <NuxtLink
        v-for="link in links"
        :key="link.label"
        :to="$localePath(link.to)"
        class="header__link"
        active-class="active"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>
    <div class="header__right">
      <button class="header__right-login">{{ $t('login') }}</button>
      <button class="header__button button--orange">
        {{ $t('join-program') }}
      </button>
    </div>
  </header>
</template>

<script setup>
const links = computed(() =>
  useMapRt('header.nav').map(el => ({
    to: el === 'Home' ? '/' : `/${el.toLowerCase().split(' ').join('-')}`,
    label: el
  }))
);
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: var(--spacing-inline);
  padding-inline: max(2.4rem, 12px);
  padding-block: max(1.6rem, 10px);
  border-radius: max(1.6rem, 10px);
  margin-top: 3.2rem;
  background: #fff;
  box-shadow: 0 8px 60px 1px var(--orgn-50, #fdf2e7);
  z-index: 5;
  &__right {
    display: flex;
    @media screen and (max-width: vars.$bp-sm) {
      display: none;
    }
    &-login {
      padding-inline: max(1.6rem, 10px);
      color: #686a75;
      font-weight: 500;
    }
  }
  &__nav {
    display: flex;
    align-items: center;
    gap: 2.8rem;
    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
  &__link {
    font-weight: 500;
    color: var(--Neutral-Grey-200, #9b9a9a);
    &.active {
      color: var(--Neutral-Grey-800, #141414);
    }
  }
  &__logo {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: max(2.4rem, 20px);
    font-weight: 600;
    font-family: vars.$font-inter;
    text-wrap: nowrap;
    svg {
      flex-shrink: 0;
      width: 41px;
    }
  }
}
</style>
