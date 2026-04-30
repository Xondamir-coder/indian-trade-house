<template>
  <div class="layout">
    <LayoutHeader />
    <slot />
    <UiSectionPartners v-if="showPartnersSection" />
    <LayoutFooter />
  </div>
</template>

<script setup>
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const route = useRoute();
const { $lenis } = useNuxtApp();

watch(
  () => route.fullPath,
  async () => {
    await nextTick();

    requestAnimationFrame(() => {
      $lenis.resize();
      ScrollTrigger.refresh();
      $lenis.scrollTo(0, {
        immediate: true
      });
    });
  }
);

onMounted(() => {
  requestAnimationFrame(() => {
    $lenis.resize();
    ScrollTrigger.refresh();
  });
});

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
