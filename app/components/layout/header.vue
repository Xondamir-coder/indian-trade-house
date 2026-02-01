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
      >
        {{ link.label }}
      </NuxtLink>
    </nav>
    <div class="header__right">
      <span>{{ $t('login') }}</span>
      <button class="header__button button--orange">
        {{ $t('join-program') }}
      </button>
    </div>
  </header>
</template>

<script setup>
const { tm } = useI18n();

const links = computed(() =>
  tm('header.nav')
    .map(useMapRt)
    .map(el => ({
      to: el === 'Home' ? '/' : `/${el.toLowerCase().split(' ').join('-')}`,
      label: el
    }))
);
</script>

<style lang="scss" scoped></style>
