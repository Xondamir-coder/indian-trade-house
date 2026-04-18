<template>
  <div class="breadcrumbs">
    <NuxtLink
      v-for="crumb in crumbs"
      :key="crumb.text"
      :to="$localePath(crumb.link)"
      class="breadcrumbs__item"
    >
      {{ crumb.text }}
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  crumbs: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  gap: max(0.8rem, 8px);
  &__item {
    font-size: max(1.4rem, 14px);
    font-weight: 600;
    color: var(--orgn-500, #ed7e17);
    position: relative;
    display: flex;
    align-items: center;
    gap: max(0.8rem, 8px);
    &::after {
      content: '/';
      color: #969aa4;
      font-weight: 400;
    }
    &:last-child {
      color: var(--Blue-400, #494f61);
      pointer-events: none;
      &::after {
        display: none;
      }
    }
  }
}
</style>
