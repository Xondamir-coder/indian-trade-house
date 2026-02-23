<template>
  <header class="header">
    <NuxtLink class="header__logo" :to="$localePath('/')">
      <SvgLogo />
    </NuxtLink>
    <nav class="header__nav">
      <NuxtLink
        v-for="(link, i) in links"
        :key="i"
        :to="$localePath(link.to)"
        class="header__link"
        active-class="active"
      >
        <span>{{ link.label }}</span>
      </NuxtLink>
    </nav>
    <div class="header__right">
      <button class="header__right-button">
        <span>
          {{ $i18n.locales.value.find(l => l.code === $i18n.locale).name }}
        </span>
        <svg
          class="header__right-button-icon"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_507_1329)">
            <path d="M5.25 7.5L9 11.25L12.75 7.5H5.25Z" fill="#8E4A0B" />
          </g>
          <defs>
            <clipPath id="clip0_507_1329">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button class="header__right-button">
        <IconsLogin class="header__right-button-icon" />
        <span>
          {{ $t('login') }}
        </span>
      </button>
      <button class="header__button button--orange">
        {{ $t('join-program') }}
      </button>
      <button class="header__ham button--orange">
        <div class="header__ham-item"></div>
      </button>
    </div>
  </header>
</template>

<script setup>
const paths = ['', '/about', '/products', '/membership', '/services', '/contact'];

const links = computed(() =>
  useMapRt('header.nav')?.map((el, i) => ({
    to: paths[i],
    label: el
  }))
);
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: max(var(--spacing-inline), 25px);
  padding-inline: max(2.4rem, 12px);
  padding-block: max(1.6rem, 12px);
  border-radius: max(1.6rem, 10px);
  background: #fff;
  box-shadow: 0 8px 60px 1px var(--orgn-50, #fdf2e7);
  z-index: 5;
  position: fixed;
  top: 3.2rem;
  inset-inline: 0;
  &__ham {
    @include mix.flex-center;
    padding: 0;
    width: 48px;
    height: 48px;
    position: relative;
    &::after,
    &::before {
      content: '';
      position: absolute;
      width: 30%;
      height: 1.5px;
      background-color: #fff;
    }
    &::after {
      translate: 0 calc(-100% - 2.5px);
    }
    &::before {
      translate: 0 calc(100% + 2.5px);
    }
    &-item {
      background-color: #fff;
      width: 30%;
      height: 1.5px;
    }
    @media screen and (min-width: 1100px) {
      display: none;
    }
  }
  &__button {
    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
  &__right {
    display: flex;
    gap: 1rem;
    &-button {
      display: flex;
      height: max(4.8rem, 48px);
      padding-inline: 14px;
      align-items: center;
      gap: 8px;
      border-radius: 99px;
      border: 2px solid #fff;
      background: var(--orgn-50, #fdf2e7);
      box-shadow: 0 4.343px 12px 0 rgba(253, 242, 231, 0.3) inset;
      color: var(--orgn-700, var(--orgn-700, #8e4a0b));
      font-size: 14px;
      font-weight: 500;
      transition: background 0.3s;
      &:nth-child(2) {
        @media screen and (max-width: 1100px) {
          display: none;
        }
      }
      &:hover {
        background: var(--orgn-100, #fbe5d0);
      }
      &-icon {
        width: 18px;
      }
    }
    &-login {
      padding-inline: max(1.6rem, 10px);
      color: #686a75;
      font-weight: 500;
      transition: color 0.4s;
      &:hover {
        color: #000;
      }
    }
  }
  &__nav {
    display: flex;
    align-items: center;
    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
  &__link {
    font-weight: 500;
    color: #5f3207;
    transition: all 0.7s;
    border-radius: 8rem;
    padding: 1.35rem 1.2rem;
    position: relative;
    display: flex;
    span {
      z-index: 1;
    }
    &.active {
      color: #fff;
      &::after {
        clip-path: inset(0% 0%);
      }
    }
    &::after {
      border-radius: 8rem;
      transition: all 0.7s;
      clip-path: inset(50% 0%);
      content: '';
      position: absolute;
      inset: 0;
      background: var(--orgn-500, #ed7e17);
      box-shadow: 0 4.343px 10px 0 rgba(248, 203, 160, 0.5) inset;
    }
  }
  &__logo {
    width: 108px;
  }
}
</style>
