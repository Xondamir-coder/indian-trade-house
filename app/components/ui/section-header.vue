<template>
  <div class="section-header">
    <div class="section-header__label">
      <IconsLightning class="section-header__icon" />
      <span>{{ label }}</span>
    </div>
    <h2 class="heading-lg">{{ title }}</h2>
    <p class="body-xl">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  align-self: center;
  @media screen and (min-width: vars.$bp-lg) {
    max-width: 56%;
  }
  &__icon {
    width: max(1.6rem, 14px);
    fill: #f09642;
    flex-shrink: 0;
  }
  &__label {
    margin-bottom: max(1.6rem, 16px);
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 12px;
    border-bottom: 1.2px solid #fbe5d0;
    background: var(--orgn-50, #fdf2e7);
    color: var(--orgn-400, #f09642);
    font-weight: 600;
    line-height: 100%;
  }
  h2 {
    margin-bottom: max(0.8rem, 8px);
    text-align: inherit;
    @media screen and (max-width: vars.$bp-md) {
      margin-bottom: 10px;
    }
  }
}
</style>
