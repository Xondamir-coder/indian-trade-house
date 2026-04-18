<template>
  <main class="products">
    <section class="hero">
      <UiSearchFilterBar />
      <UiBreadcrumbs :crumbs />
    </section>
    <UiProductsList />
  </main>
</template>

<script setup>
const { t } = useI18n();

const crumbs = [
  {
    text: 'Dashboard',
    link: '/'
  },
  {
    text: t('product'),
    link: '/products'
  },
  {
    text: t('add-product'),
    link: '/'
  }
];
</script>

<style lang="scss" scoped>
.hero {
  padding-top: max(17.2rem, 116px);
  padding-inline: var(--spacing-inline);
  display: flex;
  flex-direction: column;
  gap: max(3rem, 16px);
}
.products {
  @include mix.container-style;
}
</style>
