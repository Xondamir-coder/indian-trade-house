<template>
  <div class="bar">
    <form class="bar__top" @submit.prevent="submitQuery">
      <button class="bar__top-iconbox">
        <IconsSearch class="bar__top-icon" />
      </button>
      <input
        id="search"
        v-model="query"
        required
        type="text"
        name="text"
        class="bar__top-input"
        :placeholder="$t('search-filter-bar.placeholder')"
      />
      <button class="bar__top-button button--orange">
        {{ $t('search-filter-bar.search') }}
      </button>
    </form>
    <div class="bar__bottom">
      <span class="bar__bottom-label">{{ $t('search-filter-bar.filters-label') }}</span>
      <button
        v-for="filter in useMapRt('search-filter-bar.filters')"
        :key="filter"
        class="bar__bottom-filter"
      >
        {{ filter }}
      </button>
    </div>
  </div>
</template>

<script setup>
const query = ref('');

const submitQuery = () => {
  console.log(query.value);
};
</script>

<style lang="scss" scopeds>
@use 'sass:map';
@use 'sass:list';

.bar {
  border-radius: 1.6rem;
  background: #fff;
  overflow: hidden;
  min-width: 52%;
  &__bottom {
    display: flex;
    padding: 1.6rem;
    align-items: center;
    gap: 1rem;
    font-family: vars.$font-inter;
    $quick-filter-colors: (
      (
        text: #2ca047,
        bg: #ebfaee
      ),
      (
        text: #0091ff,
        bg: #ebf3fa
      ),
      (
        text: #ff9230,
        bg: #faf2eb
      ),
      (
        text: #00d2e0,
        bg: #e3f7fd
      )
    );
    &-label {
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--Blue-200, var(--Neutral-Blue-200, #969aa4));
    }
    &-filter {
      font-size: 1.4rem;
      padding: 0.8rem 1.2rem;
      border-radius: 1rem;
      @each $colors in $quick-filter-colors {
        $i: list.index($quick-filter-colors, $colors);

        &:nth-child(#{$i + 1}) {
          color: map.get($colors, text);
          background-color: map.get($colors, bg);
        }
      }
    }
  }
  &__top {
    display: flex;
    padding: 1rem 1rem 1rem 1.6rem;
    align-items: center;
    gap: 1.6rem;
    border-bottom: 1px solid var(--Neutral-Blue-50, #e8e9eb);
    background: #fff;
    &-input {
      flex: 1;
      font-size: 1.8rem;
      &::placeholder {
        color: var(--Blue-100, var(--Neutral-Blue-100, #b8bbc2));
      }
    }
    &-button {
    }
    &-icon {
      width: 2.4rem;
      stroke: #969aa4;
      fill: none;
      transition: stroke 0.3s;
      &:hover {
        stroke: #ed7e17;
      }
    }
    &-iconbox {
      display: flex;
    }
  }
}
</style>
