<template>
  <div class="layout">
    <LayoutHeader />
    <slot />
    <UiSectionPartners />
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
