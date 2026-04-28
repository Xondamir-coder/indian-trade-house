<template>
  <section class="products-list">
    <div class="products-list__sidebar">
      <h2 class="products-list__sidebar-label">
        {{ $t('products.categories.explore') }}
      </h2>
      <div class="products-list__sidebar-buttons">
        <button
          v-for="button in mapRt($tm('products.categories.filters'), $rt)"
          :key="button.label"
          class="products-list__sidebar-button"
        >
          <span>{{ button.label }}</span>
          <div class="products-list__sidebar-button-amount">
            {{ button.amount.toString().padStart(2, '0') }}
          </div>
        </button>
      </div>
    </div>
    <div class="products-list__list">
      <NuxtLink
        v-for="(item, i) in mapRt($tm('products.categories.items'), $rt)"
        :key="i"
        class="products-list__item"
        :to="$localePath(`/products/${i}`)"
      >
        <div class="products-list__item-icontainer">
          <IconsEye class="products-list__item-eye" />
        </div>
        <UiPicture :src="item.image" :alt="item.name" class="products-list__item-pic" />
        <span class="products-list__item-category">
          {{ item.category }}
        </span>
        <span class="products-list__item-name">
          {{ item.name }}
        </span>
        <ul class="products-list__item-labels">
          <li v-for="label in item.labels" :key="label" class="products-list__item-label">
            <span v-for="(el, index) in label.split(': ')" :key="el">
              {{ index === 0 ? `${el}:` : el }}
            </span>
          </li>
        </ul>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.products-list {
  display: grid;
  grid-template-columns: 1fr 2.04fr;
  gap: 4rem;
  padding-inline: var(--spacing-inline);
  align-items: flex-start;
  @media screen and (max-width: 1280px) {
    grid-template-columns: 375px 1fr;
  }
  @media screen and (max-width: vars.$bp-md) {
    grid-template-columns: 1fr;
    padding-inline: 0;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(39.6rem, 300px), 1fr));
    row-gap: max(4rem, 24px);
    column-gap: max(2.4rem, 10px);
    @media screen and (max-width: vars.$bp-md) {
      padding-inline: var(--spacing-inline);
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 12px);
    font-size: max(1.4rem, 14px);
    font-weight: 600;
    transition: translate 0.4s;
    position: relative;
    &:hover {
      translate: 0 -5px;
      .products-list__item-icontainer {
        transform: scale(1);
        opacity: 1;
      }
      .products-list__item-name {
        text-decoration: underline;
        color: #ed7e17;
      }
      .products-list__item-pic {
        box-shadow: 0 14px 60px -5px rgba(64, 27, 11, 0.46);
        & > * {
          scale: 1.1;
        }
        &::after {
          opacity: 1;
        }
      }
    }
    &-icontainer {
      @include mix.flex-center;
      position: absolute;
      right: max(2rem, 20px);
      top: max(2rem, 20px);
      width: max(4.4, 44px);
      height: max(4.4, 44px);
      border-radius: max(9.9rem, 99px);
      background: #fff;
      z-index: 2;
      opacity: 0;
      transform: scale(0);
      transition: all 0.4s;
      svg {
        width: 54.5454%;
      }
    }
    &-category {
      color: var(--orgn-600, var(--orgn-600, #bd630f));
    }
    &-name {
      color: var(--orgn-900, var(--orgn-900, #2f1904));
      font-size: max(1.8rem, 18px);
      font-weight: 800;
      line-height: 130%;
      transition: all 0.4s;
    }
    &-labels {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
    }
    &-label {
      display: flex;
      align-items: center;
      gap: 3px;
      border-radius: max(10rem, 100px);
      border: 1px solid var(--orgn-100, #fbe5d0);
      background: #fff;
      display: flex;
      padding: max(0.8rem, 8px) max(1.2rem, 12px);
      & > *:first-child {
        color: #2f1904;
      }
      & > *:last-child {
        color: #ed7e17;
      }
    }
    &-pic {
      position: relative;
      border-radius: max(2rem, 20px);
      aspect-ratio: 39.6/28;
      transition: box-shadow 0.4s;
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: opacity 0.4s;
      }
      @media screen and (max-width: vars.$bp-sm) {
        aspect-ratio: 34.3/22;
      }
      > * {
        transition: scale 0.4s;
      }
    }
  }
  &__sidebar {
    display: flex;
    padding: max(2.4rem, 24px) max(1.6rem, 16px);
    flex-direction: column;
    gap: max(1.6rem, 16px);
    border-radius: max(2rem, 20px);
    border: 1px solid var(--orgn-100, #fbe5d0);
    background: #fefefe;
    box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
    &-label {
      color: var(--orgn-800, var(--orgn-800, #5f3207));
      font-size: max(2rem, 20px);
      font-weight: 700;
      line-height: 120%;
    }
    &-buttons {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    &-button {
      display: flex;
      padding: max(1rem, 10px) max(1.6rem, 16px);
      justify-content: space-between;
      align-items: center;
      color: var(--orgn-900, var(--orgn-900, #2f1904));
      font-size: max(1.4rem, 14px);
      font-weight: 600;
      transition: background 0.4s;
      text-align: left;
      &:hover {
        background-color: var(--orgn-100, #fbe5d060);
      }
      &-amount {
        @include mix.flex-center;
        width: max(2.6rem, 26px);
        height: max(2.6rem, 26px);
        padding: max(0.2rem, 2px) max(0.4rem, 4px);
        border-radius: max(0.4rem, 4px);
        background: var(--orgn-100, #fbe5d0);
        color: var(--orgn-700, var(--orgn-700, #8e4a0b));
        font-weight: 500;
      }
    }
  }
}
</style>
