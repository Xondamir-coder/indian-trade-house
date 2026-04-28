<template>
  <div class="bar" :class="{ searched: route.query?.query, empty: !query }">
    <form ref="formRef" class="bar__top" @submit.prevent="submitQuery">
      <button class="bar__top-iconbox" type="submit" :aria-label="$t('search-filter-bar.search')">
        <IconsSearch class="bar__top-icon" />
      </button>
      <input
        id="search"
        ref="inputRef"
        v-model="query"
        required
        type="text"
        name="text"
        class="bar__top-input"
        :placeholder="$t('search-filter-bar.placeholder')"
      />
      <button
        class="bar__top-button"
        type="button"
        :aria-label="$t('accessibility.clear-search')"
        @click="clearQuery"
      >
        <IconsClose />
      </button>
    </form>
    <div class="bar__bottom">
      <span class="bar__bottom-label">{{ $t('search-filter-bar.filters-label') }}</span>
      <button
        v-for="filter in mapRt($tm('search-filter-bar.filters'), $rt)"
        :key="filter"
        class="bar__bottom-filter"
      >
        {{ filter }}
      </button>
    </div>
    <div class="bar__results">
      <button
        v-for="i in 3"
        :key="i"
        class="bar__result"
        @click="router.push(localePath(`/products/search?query=${query}`))"
      >
        <IconsSearch class="bar__result-icon" />
        <span>{{ query }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
const route = useRoute();
const router = useRouter();

const inputRef = ref();
const query = ref(route.query?.query || '');

const submitQuery = () => {
  if (!query.value) return;
  router.push({
    path: localePath('/products/search'),
    query: { query: query.value }
  });
};
const clearQuery = () => {
  query.value = '';
  inputRef.value.blur();
};
</script>

<style lang="scss" scopeds>
@use 'sass:map';
@use 'sass:list';

.bar {
  border-radius: max(1.6rem, 16px);
  background: #fff;
  max-width: 100%;
  position: relative;
  transition: background 0.3s;
  @media screen and (min-width: vars.$bp-sm) {
    min-width: max(68rem, 500px);
  }
  &:focus-within {
    .bar__bottom {
      transform: translateY(15px);
      opacity: 0;
      pointer-events: none;
    }
    .bar__results {
      transform: translateY(0);
      opacity: 1;
      pointer-events: all;
    }
  }
  &.empty .bar__results {
    transform: translateY(15px);
    opacity: 0;
    pointer-events: none;
  }
  &:focus-within,
  &.searched {
    background: transparent;
    .bar__top {
      border-radius: inherit;
    }
  }
  &.searched {
    .bar__bottom {
      display: none;
    }
    .bar__results {
      top: calc(100% + max(1rem, 10px));
    }
  }

  &__result {
    display: flex;
    gap: max(1.6rem, 16px);
    padding: max(0.8rem, 8px) max(1.2rem, 12px);
    color: var(--Blue-500, #1b2339);
    font-size: max(1.8rem, 16px);
    border-radius: max(1rem, 10px);
    transition:
      background 0.3s,
      color 0.3s;
    &:hover {
      background: #fdf2e7;
      color: #bd630f;
      svg {
        stroke: #bd630f;
      }
    }

    &-icon {
      width: max(2.4rem, 24px);
      fill: none;
      stroke: #969aa4;
      transition: stroke 0.3s;
    }
  }
  &__results {
    z-index: 5;
    transform: translateY(15px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    position: absolute;
    inset-inline: 0;
    top: calc(50% + max(1rem, 10px));
    padding: max(0.6rem, 6px);
    border-radius: max(1.6rem, 16px);
    background: var(--Blue-50, #fff);
    display: flex;
    flex-direction: column;
    border: 6px solid #e8e9eb;

    /* shadow 1 */
    box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
  }
  &__bottom {
    transition: all 0.3s;
    display: flex;
    padding: max(1.6rem, 16px);
    align-items: center;
    gap: max(1rem, 6px);
    font-family: vars.$font-inter;
    overflow-x: auto;
    scrollbar-width: 0;
    &::-webkit-scrollbar {
      display: none;
    }
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
      font-size: max(1.4rem, 14px);
      font-weight: 500;
      color: var(--Blue-200, var(--Neutral-Blue-200, #969aa4));
      text-wrap: nowrap;
      flex-shrink: 0;
    }
    &-filter {
      text-wrap: nowrap;
      flex-shrink: 0;
      font-size: max(1.4rem, 14px);
      padding: max(0.8rem, 8px) max(1.2rem, 12px);
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
    padding: max(1rem, 10px) max(1rem, 10px) max(1rem, 10px) max(1.6rem, 16px);
    border-top-left-radius: max(1.6rem, 16px);
    border-top-right-radius: max(1.6rem, 16px);
    align-items: center;
    gap: max(1.6rem, 16px);
    border: 1px solid transparent;
    border-bottom-color: #e8e9eb;
    background: #fff;
    transition:
      border-color 0.5s,
      border-radius 0.5s;
    &:focus-within {
      border-color: #ed7e17;
    }
    &-input {
      flex: 1;
      font-size: max(1.8rem, 16px);
      color: var(--Blue-500, #1b2339);

      &::placeholder {
        color: var(--Blue-100, var(--Neutral-Blue-100, #b8bbc2));
      }
      &:placeholder-shown + button {
        transform: scale(0);
        opacity: 0;
      }
    }
    &-button {
      @include mix.flex-center;
      font-family: vars.$font-base;
      padding-inline: 18px;
      background: #fdf2e7;
      height: max(4.8rem, 48px);
      width: max(5.6rem, 56px);
      border-radius: max(9.9rem, 99px);
      box-shadow: 0 4.343px 12px 0 rgba(253, 242, 231, 0.3) inset;
      transition:
        background 0.3s,
        opacity 0.3s,
        transform 0.3s;
      &:hover {
        background-color: #ed7e176e;
      }
      svg {
        width: max(2rem, 20px);
        fill: none;
        stroke: #8e4a0b;
      }
    }
    &-icon {
      flex-shrink: 0;
      width: max(2.4rem, 24px);
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
