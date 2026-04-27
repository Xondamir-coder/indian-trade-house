<template>
  <header ref="headerRef" class="header" :class="{ shown: showMenu }">
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
        <button class="header__right-button" @click="changeLang">
          {{ $i18n.locales.value.find(l => l.code === $i18n.locale).name }}
        </button>
        <NuxtLink :to="$localePath('/contact')" class="header__button button--orange">
          <span>{{ $t('join-program') }}</span>
          <IconsArrowRight />
        </NuxtLink>
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
          <NuxtLink :to="$localePath('/contact')" class="header__button button--orange">
            <span>{{ $t('join-program') }}</span>
            <IconsArrowRight />
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
const { setLocale, locale } = useI18n();
const paths = ['/', '/about', '/products', '/membership', '/services', '/contact'];

const showMenu = ref(false);

const { $gsap } = useNuxtApp();

const { tm, rt } = useI18n();

const headerRef = ref();

const changeLang = () => {
  setLocale(locale.value === 'en' ? 'uz' : 'en');
};

const links = computed(() =>
  mapRt(tm('header.nav'), rt).map((el, i) => ({
    to: paths[i],
    label: el
  }))
);

onMounted(() => {
  $gsap.to(headerRef.value, {
    scrollTrigger: {
      trigger: '.layout',
      start: '+=20 top',
      end: 'bottom bottom',
      toggleClass: {
        targets: headerRef.value,
        className: 'active'
      },
      toggleActions: 'play none none reverse'
    }
  });
});
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
  height: max(7.7rem, 77px);
  transition: all 0.4s;
  @media screen and (max-width: 1110px) {
    padding-bottom: 0;
  }
  &.active {
    margin-inline: 0;
    top: 0;
    padding-inline: var(--spacing-inline);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
    border-radius: 0;
  }
  &.shown {
    transition-delay: 0s;
    $spacing: 30px;
    $header-container-height: max(7.7rem, 77px);
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
          font-family: vars.$font-base;
        }
      }
      button {
        justify-content: center;
        height: initial;
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
  &__right {
    display: flex;
    gap: 1rem;
    .header__right-button:nth-child(2) {
      @media screen and (max-width: 1110px) {
        display: none;
      }
    }
    .header__button {
      font-family: vars.$font-base;
      font-size: max(1.4rem, 14px);
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
    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
  &__link {
    font-weight: 500;
    color: #5f3207;
    transition: all 0.7s;
    border-radius: 8rem;
    padding: 0 1.2rem;
    position: relative;
    display: flex;
    align-items: center;
    span {
      z-index: 1;
    }
    &.active {
      color: #fff;
      box-shadow: 0 13px 20px -9px rgba(237, 126, 23, 0.4);
      &::after {
        clip-path: inset(0%);
      }
    }
    &::after {
      transition: all 0.7s;
      clip-path: inset(100% 0% 0%);
      content: '';
      position: absolute;
      inset: 0;
      border-radius: max(9.9rem, 99px);
      background: var(--orgn-500, #ed7e17);
      box-shadow: 0 4.343px 12px 0 rgba(253, 242, 231, 0.3) inset;
    }
  }
  &__logo {
    align-self: center;
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
