<template>
  <div class="layout">
    <LayoutHeader />
    <slot />
    <UiSectionPartners v-if="showPartnersSection" />
    <LayoutFooter />
  </div>
</template>

<script setup>
const route = useRoute();

const showPartnersSection = computed(() => {
  const currentPath = route.path.toLowerCase();

  return !['/membership', '/contact', '/services'].some(path => currentPath.includes(path));
});
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
}
</style>
