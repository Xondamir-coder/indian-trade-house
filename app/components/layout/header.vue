<template>
  <header class="header" :class="{ shown: showMenu }">
    <div class="header__container">
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
          <span>{{ $t('join-program') }}</span>
          <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_727_782)">
              <path
                d="M4.41003 3.09L10.32 9L4.41003 14.91L6.00003 16.5L13.5 9L6.00003 1.5L4.41003 3.09Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_727_782">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button class="header__ham button--orange" @click="showMenu = !showMenu">
          <div class="header__ham-item"></div>
        </button>
      </div>
    </div>
    <Transition name="appear">
      <div v-if="showMenu" class="header__menu">
        <nav class="header__menu-nav">
          <NuxtLink
            v-for="(link, i) in links"
            :key="i"
            :to="$localePath(link.to)"
            class="header__menu-link"
            active-class="active"
            @click="showMenu = !showMenu"
          >
            <span>{{ link.label }}</span>
          </NuxtLink>
        </nav>
        <div class="header__menu-bottom">
          <button class="header__right-button">
            <IconsLogin class="header__right-button-icon" />
            <span>
              {{ $t('login') }}
            </span>
          </button>
          <button class="header__button button--orange">
            <span>{{ $t('join-program') }}</span>
            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_727_782)">
                <path
                  d="M4.41003 3.09L10.32 9L4.41003 14.91L6.00003 16.5L13.5 9L6.00003 1.5L4.41003 3.09Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_727_782">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
const paths = ['/', '/about', '/products', '/membership', '/services', '/contact'];

const showMenu = ref(false);

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
  flex-direction: column;
  margin-inline: var(--spacing-inline);
  padding-inline: max(2.4rem, 12px);
  padding-block: max(1.6rem, 12px);
  border-radius: max(1.6rem, 16px);
  background: #fff;
  box-shadow: 0 8px 60px 1px var(--orgn-50, #fdf2e7);
  z-index: 5;
  position: fixed;
  top: max(3.2rem, 20px);
  inset-inline: 0;
  transition:
    height 0.5s,
    box-shadow 0.5s;
  transition-delay: 0.6s;
  height: 77px;
  @media screen and (max-width: 1110px) {
    padding-bottom: 0;
  }
  &.shown {
    transition-delay: 0s;
    $spacing: 30px;
    $header-container-height: 77px;
    $menu-height: 382px;
    height: calc($header-container-height + $menu-height + $spacing);
    box-shadow: 0 55px 100px 0 #630;
    .header__container {
      border-bottom-color: var(--orgn-100, #fbe5d0);
    }
    .header__ham {
      &-item {
        transition:
          transform 0.6s,
          opacity 0.4s;
        opacity: 0;
        transform: scaleX(0);
      }
      &::before,
      &::after {
        transition: transform 0.6s;
      }
      &::before {
        transform: translateY(0) rotate(225deg);
      }
      &::after {
        transform: translateY(0) rotate(-225deg);
      }
    }
  }
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: border 0.4s;
    border-bottom: 1px solid transparent;
    @media screen and (max-width: 1110px) {
      padding-bottom: 16px;
    }
  }
  &__menu {
    padding-inline: 12px;
    padding-bottom: 31px;
    position: absolute;
    bottom: 0;
    inset-inline: 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    transition: opacity 0.4s;
    &.hidden {
      opacity: 0;
      pointer-events: none;
    }
    &-bottom {
      display: flex;
      gap: 10px;
      & > * {
        flex: 1;
        animation: 0.5s backwards 0.7s;
        &:first-child {
          animation-name: slide-from-left-20;
        }
        &:last-child {
          animation-name: slide-from-right-20;
        }
      }
      button {
        justify-content: center;
        height: 48px;
      }
    }
    &-nav {
      display: flex;
      flex-direction: column;
    }
    &-link {
      text-align: center;
      padding: 13px 12px;
      color: var(--orgn-800, var(--orgn-800, #5f3207));
      font-family: vars.$font-inter;
      font-size: 16px;
      font-weight: 500;
      border-radius: 9.9rem;
      animation: slide-from-top-20 0.5s backwards;
      transition:
        box-shadow 0.4s,
        color 0.4s,
        background 0.4s;
      @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
          animation-delay: $i * 0.1s;
        }
      }
      &.active {
        box-shadow: 0 4.343px 10px 0 rgba(248, 203, 160, 0.5) inset;
        background: var(--orgn-500, #ed7e17);
        color: #fff;
      }
    }
  }
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
      transition: transform 0.6s 0.4s;
    }
    &::after {
      transform: translateY(-4px);
    }
    &::before {
      transform: translateY(4px);
    }
    &-item {
      background-color: #fff;
      width: 30%;
      height: 1.5px;
      transition:
        transform 0.6s 0.4s,
        opacity 0.4s 0.4s;
    }
    @media screen and (min-width: 1100px) {
      display: none;
    }
  }
  &__button {
  }
  &__right {
    display: flex;
    gap: 1rem;
    .header__right-button:nth-child(2) {
      @media screen and (max-width: 1110px) {
        display: none;
      }
    }
    .header__button {
      @media screen and (max-width: 1110px) {
        display: none;
      }
    }
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
.appear-enter-active,
.appear-leave-active {
  transition: opacity 0.5s;
}
.appear-enter-from,
.appear-leave-to {
  opacity: 0;
}
</style>
