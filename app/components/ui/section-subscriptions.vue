<template>
  <section class="subscriptions">
    <div class="subscriptions__top">
      <UiSectionHeader
        class="subscriptions__header"
        :label="$t('subscriptions-section.label')"
        :title="title"
        :subtitle="$t('subscriptions-section.subtitle')"
      />
      <div class="subscriptions__buttons">
        <button
          v-for="(button, i) in buttons"
          :key="button"
          class="subscriptions__button"
          :class="{ active: activeButton === i }"
          @click="activeButton = i"
        >
          {{ button }}
        </button>
      </div>
    </div>
    <ul class="subscriptions__list">
      <li v-for="(item, i) in cards" :key="i" class="subscriptions__item">
        <span class="subscriptions__item-label">{{ item.label }}</span>
        <div class="subscriptions__item-content">
          <div class="subscriptions__item-top">
            <div class="subscriptions__item-amount">
              <span>{{ item.amount }}</span>
              <span>/ qtr</span>
            </div>
            <p class="subscriptions__item-top-text">
              {{ item.subtitle }}
            </p>
          </div>
          <ul class="subscriptions__item-amenities">
            <li
              v-for="amenity in item.amenities"
              :key="amenity"
              class="subscriptions__item-amenity"
            >
              <IconsCheck class="subscriptions__item-icon" />
              <span>{{ amenity }}</span>
            </li>
          </ul>
          <button class="subscriptions__item-button button--orange">
            {{ $t('subscriptions-section.sign') }}
          </button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { t } = useI18n();

const activeButton = ref(0);

const buttons = computed(() => [t('monthly'), t('yearly')]);

defineProps({
  title: {
    required: true,
    type: String
  },
  cards: {
    required: true,
    type: Array
  }
});
</script>

<style lang="scss" scoped>
.subscriptions {
  display: flex;
  padding-inline: var(--spacing-inline);
  flex-direction: column;
  gap: max(6rem, 40px);
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    @media screen and (max-width: vars.$bp-md) {
      grid-template-columns: 1fr;
    }
  }
  &__item {
    display: flex;
    padding: max(1.6rem, 10px);
    flex-direction: column;
    gap: max(1.6rem, 10px);
    border-radius: 40px;
    border: 1px solid var(--orgn-200, #f8cba0);
    background: var(--orgn-100, #fbe5d0);
    box-shadow:
      0 -1px 1px 1px rgba(48, 46, 43, 0.1) inset,
      0 8px 12px -6px rgba(44, 36, 26, 0.28);
    transition: all 0.4s;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        var(--orgn-700, #8e4a0b) 0%,
        var(--orgn-400, #f09642) 100%
      );
      opacity: 0;
      border-radius: inherit;
      transition: all 0.4s;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
      box-shadow:
        0 -1px 1px 1px rgba(48, 46, 43, 0.1) inset,
        0 8px 12px -6px rgba(44, 36, 26, 0.28);
      .subscriptions__item-label {
        color: #fff;
      }
    }
    &-button {
      margin-top: auto;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        inset-inline: 0;
        height: 2px;
        background-color: #fbe5d0;
        top: calc(-36px - 1px);
        left: 0;
        pointer-events: none;
      }
    }
    &-content {
      z-index: 2;
      flex: 1;
      padding: max(3.2rem, 12px);
      display: flex;
      flex-direction: column;
      gap: 36px;
      border-radius: 32px;
      border: 1px solid var(--orgn-200, #f8cba0);
      background: #fff;
      box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
    }
    &-icon {
      width: max(2.2rem, 18px);
      flex-shrink: 0;
    }
    &-label {
      z-index: 2;
      align-self: center;
      font-family: vars.$font-radio;
      font-weight: 600;
      font-size: 20px;
      color: var(--orgn-900, #2f1904);
      transition: color 0.4s;
    }
    &-amount {
      font-family: vars.$font-radio;
      font-weight: 600;
      text-align: center;
      span:first-child {
        font-size: max(5.3rem, 36px);
        letter-spacing: -0.56px;
        color: var(--orgn-950, #180c02);
      }
      span:last-child {
        font-size: 20px;
        margin-left: 12px;
        color: #636d7d;
      }
    }
    &-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: max(1.6rem, 10px);
      &-text {
        color: #8e4a0b;
        font-size: max(1.7rem, 16px);
        font-weight: 500;
      }
    }
    &-amenity {
      display: flex;
      align-items: center;
      gap: max(1.6rem, 10px);
      font-size: max(1.9rem, 16px);
      font-weight: 600;
      font-family: vars.$font-inter;
    }
    &-amenities {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 36px;
    }
  }
  &__buttons {
    display: flex;
    padding: 8px 10px;
    align-items: center;
    gap: 8px;
    border-radius: 40px;
    border: 1px solid var(--orgn-100, #fbe5d0);
    background: #fff;
    box-shadow:
      0 -1px 1px 1px rgba(0, 0, 0, 0.1) inset,
      0 2px 2px -1px rgba(0, 0, 0, 0.08);
    position: relative;
    &:has(> *:last-child.active)::after {
      translate: calc(100% + 8px);
    }
    &::after {
      content: '';
      position: absolute;
      background-color: red;
      width: 104px;
      height: 36px;
      padding-inline: 20px;
      border-radius: 99px;
      background: var(--orgn-500, #ed7e17);
      box-shadow: 0 -2px 0 0 rgba(0, 0, 0, 0.1) inset;
      transition: translate 0.4s;
    }
  }
  &__header {
    align-items: flex-start;
    text-align: start;
    max-width: 100%;
  }
  &__button {
    z-index: 2;
    display: flex;
    width: 104px;
    height: 36px;
    padding-inline: 2rem;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: var(--orgn-900, #2f1904);
    font-family: vars.$font-inter;
    font-size: 14px;
    font-weight: 600;
    border-radius: 99px;
    transition: color 0.4s;
    &.active {
      color: #fff;
    }
  }
  &__top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
}
</style>
