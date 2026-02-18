<template>
  <section class="services">
    <UiSectionHeader
      class="services__header"
      :label="label || $t('services-section.label')"
      :title="title || $t('services-section.title')"
      :subtitle="subtitle || $t('services-section.subtitle')"
    />
    <ul class="services__list">
      <li v-for="(item, i) in items" :key="i" class="services__item">
        <div class="services__item-box">
          <IconsSpiral class="services__item-icon" />
        </div>
        <div class="services__item-content">
          <h3 class="services__item-title">{{ item.title }}</h3>
          <p class="body-md">{{ item.subtitle }}</p>
        </div>
        <ul v-if="item.labels" class="services__item-labels">
          <li v-for="l in item.labels" :key="l" class="services__item-label">
            {{ l }}
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.services {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-inline: var(--spacing-inline);
  border-radius: 2rem;
  border: 1px solid var(--orgn-100, #fbe5d0);
  background: #fefefe;
  box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
  padding: 4rem;
  &__header {
    max-width: 57%;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
  }
  &__item {
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.4rem;
    border-radius: 1.6rem;
    border: 1px solid var(--orgn-100, #fbe5d0);
    background: var(--orgn-50, #fdf2e7);
    box-shadow:
      0 1px 3px 0 rgba(28, 32, 43, 0.05),
      0 1px 2px 0 rgba(28, 32, 43, 0.04);
    transition:
      border 0.4s,
      box-shadow 0.4s;
    &:hover {
      border-color: #f4b071;
      box-shadow: 0 52px 60px -31px rgba(242, 131, 5, 0.3);
    }
    &-labels {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 6px;
    }
    &-label {
      padding: 0.8rem 1.2rem;
      border-radius: 1rem;
      background: #fff;
      color: #ed7e17;
      font-family: vars.$font-inter;
      font-size: 1.4rem;
      font-weight: 500;
    }
    &-title {
      color: var(--orgn-800, #5f3207);
      font-size: 1.8rem;
      font-weight: 800;
      line-height: 130%;
    }
    p {
      --text-clr: #353849;
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    &-box {
      @include mix.flex-center;
      width: 5.6rem;
      height: 5.6rem;
      background-color: #ed7e17;
      border-radius: 0.6rem;
      outline: 0.7px solid var(--Gray-50, #eeeff2);
      outline-offset: 4px;
      box-shadow: 0px 0px 0px 4px #fff;
    }
    &-icon {
      width: 70%;
    }
  }
}
</style>
