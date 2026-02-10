<template>
  <main class="products">
    <section class="hero">
      <h1 class="hero__title heading-xl">
        {{ $t('products.hero.title') }}
      </h1>
      <p class="hero__subtitle">
        {{ $t('products.hero.subtitle') }}
      </p>
      <UiSearchFilterBar />
    </section>
    <section class="cards">
      <UiInfoCards />
    </section>
    <section class="categories">
      <div class="categories__sidebar">
        <h4 class="categories__sidebar-label">
          {{ $t('products.categories.explore') }}
        </h4>
        <div class="categories__sidebar-buttons">
          <button
            v-for="button in useMapRt('products.categories.filters')"
            :key="button.label"
            class="categories__sidebar-button"
          >
            <span>{{ button.label }}</span>
            <div class="categories__sidebar-button-amount">
              {{ button.amount.toString().padStart(2, '0') }}
            </div>
          </button>
        </div>
      </div>
      <ul class="categories__list">
        <li
          v-for="(item, i) in useMapRt('products.categories.items')"
          :key="i"
          class="categories__item"
        >
          <UiPicture :src="item.image" :alt="item.name" class="categories__item-pic" />
          <span class="categories__item-category">
            {{ item.category }}
          </span>
          <span class="categories__item-name">
            {{ item.name }}
          </span>
          <ul class="categories__item-labels">
            <li v-for="label in item.labels" :key="label" class="categories__item-label">
              <span v-for="(el, index) in label.split(': ')" :key="el">
                {{ index === 0 ? `${el}:` : el }}
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.categories {
  display: grid;
  grid-template-columns: 1fr 2.04fr;
  gap: 4rem;
  padding-inline: var(--spacing-inline);
  align-items: flex-start;
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    row-gap: 4rem;
    column-gap: 2.4rem;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    font-size: 1.4rem;
    font-weight: 600;
    &-category {
      color: var(--orgn-600, var(--orgn-600, #bd630f));
    }
    &-name {
      color: var(--orgn-900, var(--orgn-900, #2f1904));
      font-size: 1.8rem;
      font-weight: 800;
      line-height: 130%;
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
      border-radius: 10rem;
      border: 1px solid var(--orgn-100, #fbe5d0);
      background: #fff;
      display: flex;
      padding: 0.8rem 1.2rem;
      & > *:first-child {
        color: #2f1904;
      }
      & > *:last-child {
        color: #ed7e17;
      }
    }
    &-pic {
      border-radius: 2rem;
      aspect-ratio: 39.6/28;
    }
  }
  &__sidebar {
    display: flex;
    padding: 2.4rem 1.6rem;
    flex-direction: column;
    gap: 1.6rem;
    border-radius: 2rem;
    border: 1px solid var(--orgn-100, #fbe5d0);
    background: #fefefe;
    box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
    &-label {
      color: var(--orgn-800, var(--orgn-800, #5f3207));
      font-family: Manrope;
      font-size: 2rem;
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
      padding: 1rem 1.6rem;
      justify-content: space-between;
      align-items: center;
      color: var(--orgn-900, var(--orgn-900, #2f1904));
      font-size: 1.4rem;
      font-weight: 600;
      &-amount {
        @include mix.flex-center;
        width: 2.6rem;
        height: 2.6rem;
        padding: 0.2rem 0.4rem;
        border-radius: 0.4rem;
        background: var(--orgn-100, #fbe5d0);
        color: var(--orgn-700, var(--orgn-700, #8e4a0b));
        font-weight: 500;
      }
    }
  }
}
.cards {
  padding-inline: var(--spacing-inline);
}
.hero {
  padding-inline: var(--spacing-inline);
  padding-top: 19rem;
  padding-bottom: 6rem;
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 0 0 2.6rem 2.6rem;
  background:
    radial-gradient(
      65% 50% at 52% 18%,
      #3a1207 0%,
      #5a1e0c 28%,
      rgba(90, 30, 12, 0.65) 48%,
      rgba(90, 30, 12, 0.35) 62%,
      rgba(90, 30, 12, 0) 78%
    ),
    linear-gradient(135deg, #8f3a14 0%, #b8673f 38%, #ddb79f 68%, #c6929d 100%);

  & > * {
    z-index: 1;
  }
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, #d19d78 1.5px, transparent 1.5px);
    mix-blend-mode: lighten;
    pointer-events: none;
    background-size: 25px 25px;
    opacity: 0.4;

    -webkit-mask-image: radial-gradient(
      circle at 50% 0%,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.9) 25%,
      rgba(0, 0, 0, 0.4) 45%,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0) 75%
    );
    mask-image: radial-gradient(
      circle at 50% 0%,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.9) 25%,
      rgba(0, 0, 0, 0.4) 45%,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0) 75%
    );
  }
  &__title {
    text-align: center;
    --text-clr: #fff;
  }
  &__subtitle {
    text-align: center;
    margin-bottom: 3.6rem - 1.6rem;
    color: #fdf2e7;
    font-size: 2rem;
    font-weight: 600;
    line-height: 120%;
    max-width: 60ch;
  }
}
.products {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}
</style>
