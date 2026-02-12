<template>
  <footer class="footer">
    <div class="footer__socials">
      <a
        v-for="social in socials"
        :key="social.link"
        :href="`https://${social.link}`"
        target="_blank"
        rel="noopener noreferrer"
        class="footer__socials-link"
      >
        <component :is="social.icon" class="footer__socials-icon" />
      </a>
    </div>
    <div class="footer__header">
      <h3 class="footer__header-text">
        {{ $t('footer.label') }}
      </h3>
      <h2 class="footer__header-title">
        {{ $t('footer.title') }}
      </h2>
    </div>
    <div class="footer__middle">
      <div class="footer__cta">
        <h4 class="footer__cta-label">{{ $t('footer.sub') }}</h4>
        <p class="footer__cta-text">
          {{ $t('footer.sub-subtitle') }}
        </p>
        <UiNewsletterSignup />
      </div>
      <nav class="footer__nav">
        <ClientOnly>
          <ul class="footer__list">
            <li v-for="(item, i) in navItems" :key="i" class="footer__list-item">
              <h5 class="footer__list-label">
                {{ $t(item.label) }}
              </h5>
              <div class="footer__list-links">
                <NuxtLink
                  v-for="link in item.links"
                  :key="link.to"
                  :to="$localePath(link.to)"
                  class="footer__list-link"
                >
                  {{ $t(link.label) }}
                </NuxtLink>
              </div>
            </li>
          </ul>
        </ClientOnly>
      </nav>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom-left">
        <div class="footer__bottom-logo">
          <SvgLogoFooter />
          <span>Indian Trade</span>
        </div>
        <p>
          {{ $t('footer.text') }}
        </p>
      </div>
      <ClientOnly>
        <nav class="footer__bottom-legals">
          <NuxtLink
            v-for="link in legals"
            :key="link.label"
            :to="$localePath(link.to)"
            class="footer__bottom-legal"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </ClientOnly>
    </div>
    <div class="footer__copyright">
      <span> © {{ new Date().getFullYear() }} {{ $t('footer.dev-by') }}</span>
      <a href="https://spacelabs.studio" target="_blank" rel="noopener noreferrer"> Spacelabs</a>
    </div>
    <div class="footer__bg"></div>
    <svg width="0" height="0" aria-hidden="true" class="footer__path">
      <defs>
        <clipPath id="footerPath" clipPathUnits="objectBoundingBox">
          <path
            d="M 0.83023 0.04119
C 0.83023 0.06394 0.84029 0.08239 0.85271 0.08239
L 0.94713 0.08239
C 0.96691 0.08239 0.97682 0.08239 0.98378 0.08893
C 0.98990 0.09461 0.99488 0.10373 0.99800 0.11498
C 1.00000 0.12772 1.00000 0.14443 1.00000 0.17784
L 1.00000 0.90454
C 1.00000 0.93795 1.00000 0.95466 0.99800 0.96741
C 0.99488 0.97865 0.98990 0.98777 0.98378 0.99346
C 0.97682 1.00000 0.96691 1.00000 0.94713 1.00000
L 0.31008 1.00000
C 0.29844 1.00000 0.28837 0.98127 0.28837 0.95852
C 0.28837 0.93577 0.27831 0.91704 0.26666 0.91704
L 0.05209 0.91704
C 0.03386 0.91704 0.02473 0.91704 0.01777 0.91050
C 0.01165 0.90482 0.00667 0.89570 0.00355 0.88445
C 0.00000 0.87171 0.00000 0.85500 0.00000 0.82216
L 0.00000 0.09545
C 0.00000 0.06205 0.00000 0.04534 0.00355 0.03258
C 0.00667 0.02135 0.01165 0.01222 0.01777 0.00651
C 0.02473 0.00000 0.03386 0.00000 0.05209 0.00000
L 0.80775 0.00000
C 0.82017 0.00000 0.83023 0.01843 0.83023 0.04119
Z
"
          />
        </clipPath>
      </defs>
    </svg>
  </footer>
</template>

<script setup>
import { IconsDribble, IconsFacebook, IconsInstagram, IconsTwitter } from '#components';

const socials = [
  {
    link: 'dribbble.com',
    icon: IconsDribble
  },
  {
    link: 'facebook.com',
    icon: IconsFacebook
  },
  {
    link: 'x.com',
    icon: IconsTwitter
  },
  {
    link: 'instagram.com',
    icon: IconsInstagram
  }
];
const navItems = [
  {
    label: 'company',
    links: [
      { label: 'about-self', to: '/about' },
      { label: 'products-self', to: '/products' },
      { label: 'membership-self', to: '/membership' },
      { label: 'services-self', to: '/services' }
    ]
  },
  {
    label: 'products-self',
    links: Array(4).fill({
      label: 'product',
      to: '/product'
    })
  },
  {
    label: 'customer',
    links: [
      { label: 'client-sup', to: '/client' },
      { label: 'help-center', to: '/help' },
      { label: 'sys-status', to: '/system' },
      { label: 'feedback', to: '/feedback' }
    ]
  }
];

const legals = computed(() =>
  useMapRt('footer.legals')?.map(el => ({
    label: el,
    to: `/${el.trim().toLowerCase().split(' ').join('-')}`
  }))
);
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
  color: #fff;
  position: relative;
  padding-block: 3.2rem;
  padding-inline: 7.5rem;
  & > *:not(.footer__bg):not(.footer__socials):not(.footer__copyright) {
    margin-inline: 7.5rem;
  }
  & > *:not(.footer__bg) {
    z-index: 2;
  }
  &__path {
    position: absolute;
  }
  &__middle {
    margin-bottom: calc(3.7rem - 2.5rem);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  &__bg {
    position: absolute;
    top: 3.2rem;
    bottom: 4.2rem;
    inset-inline: 7.5rem;
    clip-path: url('#footerPath');
    --hot: #e08d0c;
    --mid: #9e2509;
    --dark: #450d06;

    background:
      radial-gradient(
        circle at 8% 12%,
        var(--hot) 0%,
        rgba(224, 141, 12, 0.9) 18%,
        rgba(224, 141, 12, 0.4) 32%,
        transparent 48%
      ),
      linear-gradient(135deg, var(--hot) 0%, var(--mid) 28%, var(--dark) 62%);

    // background-color: #713700;
    // &-banner {
    //   position: absolute;
    //   inset: 0;
    // }
  }
  &__copyright {
    margin-top: calc(6rem - 2.5rem);
    align-self: flex-start;
    color: #5f3207;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1.6rem 2.4rem;
    border-radius: 6rem;
    background: #fffefd;
    box-shadow: 16px 20px 94px 0 rgba(29, 29, 29, 0.16);
    a {
      text-decoration: underline;
    }
  }
  &__bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    &-legal {
      font-size: 1.4rem;
      font-weight: 500;
      position: relative;
      &:not(:last-child)::after {
        content: '';
        position: absolute;
        inset-block: 0;
        right: -2.5rem;
        width: 1px;
        background-color: #5a5a59;
      }
      &:hover::before {
        scale: 1;
        transform-origin: left;
      }
      &::before {
        content: '';
        position: absolute;
        inset-inline: 0;
        top: calc(100% + 5px);
        background-color: #fbe5d0;
        height: 1px;
        scale: 0 1;
        transform-origin: right;
        transition: scale 0.4s;
      }
    }
    &-legals {
      display: flex;
      gap: 2.5rem * 2;
    }
    &-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      text-wrap: nowrap;
      svg {
        width: 41px;
      }
    }
    &-left {
      display: flex;
      align-items: center;
      gap: 3.2rem;
      p {
        max-width: 30ch;
      }
    }
  }
  &__list {
    display: flex;
    gap: 7.2rem;
    &-label {
      color: rgba(255, 255, 255, 0.5);
      font-weight: 500;
      font-size: 1.6rem;
    }
    &-item {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
    }
    &-links {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;
    }
    &-link {
      font-weight: 500;
      color: var(--orgn-100, #fbe5d0);
      position: relative;
      padding-left: 12px;
      position: relative;
      &:hover::after {
        scale: 1;
        transform-origin: left;
      }
      &::after {
        content: '';
        position: absolute;
        inset-inline: 0;
        top: calc(100% + 5px);
        background-color: #fbe5d0;
        height: 1px;
        scale: 0 1;
        transform-origin: right;
        transition: scale 0.4s;
      }
      &::before {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: currentColor;
        position: absolute;
        left: 0;
        top: 50%;
        translate: 0 -50%;
      }
    }
  }
  &__cta {
    display: flex;
    flex-direction: column;
    &-label {
      font-size: 2rem;
      font-weight: 500;
    }
    &-text {
      line-height: 130%;
      margin-top: 1.4rem;
      margin-bottom: 2.4rem;
      max-width: 33ch;
    }
  }
  &__socials {
    align-self: flex-end;
    display: flex;
    gap: 1.2rem;
    &-link {
      @include mix.flex-center;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: var(--orgn-900, #2f1904);
    }
  }
  &__header {
    margin-bottom: calc(8.7rem - 2.5rem);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.3rem;
    &-text {
      color: var(--orgn-50, #fdf2e7);
      font-size: 3.6rem;
      font-weight: 800;
    }
    &-title {
      font-size: 10rem;
      font-weight: 800;
      line-height: 84%;
      background: linear-gradient(92deg, #fdf2e7 39.76%, rgba(253, 242, 231, 0) 97.26%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
