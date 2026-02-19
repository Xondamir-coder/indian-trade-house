<template>
  <div class="layout">
    <LayoutHeader />
    <slot />
    <UiSectionPartners
      v-if="
        !(
          $route.name.includes('membership') ||
          $route.name.includes('contact') ||
          $route.name.includes('services')
        )
      "
    />
    <LayoutFooter />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
}
</style>
