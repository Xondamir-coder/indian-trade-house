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
    <svg width="0" height="0" aria-hidden="true" class="footer__path">
      <defs>
        <clipPath id="tallPanel" clipPathUnits="objectBoundingBox">
          <path
            d="M 0.48185 0
C 0.51983 0 0.55056 0.01268 0.55056 0.02833
C 0.55056 0.04398 0.58129 0.05666 0.61927 0.05666
H 0.80466
C 0.87353 0.05666 0.90776 0.05666 0.93404 0.06216
C 0.95707 0.06700 0.97667 0.07609 0.98811 0.08800
C 1.00146 0.10100 1.00000 0.11563 1.00000 0.13743
V 0.92788
C 1.00000 0.94817 1.00000 0.95833 0.99299 0.96626
C 0.98068 0.98166 0.95318 0.99416 0.91793 0.99717
C 0.89837 1.00000 0.87353 1.00000 0.82507 1.00000
H 0.73907
C 0.69054 1.00000 0.65015 0.98358 0.65015 0.96334
C 0.65015 0.94309 0.60977 0.92668 0.56123 0.92668
H 0.19592
C 0.12705 0.92668 0.09283 0.92668 0.06655 0.92118
C 0.04352 0.91634 0.02392 0.90725 0.01248 0.89534
C -0.00087 0.88234 0.00000 0.86771 0.00000 0.84591
V 0.08077
C 0.00000 0.05666 0.00000 0.04462 0.01248 0.03161
C 0.02392 0.01970 0.04352 0.01061 0.06655 0.00577
C 0.09283 0.00027 0.12705 0.00000 0.19592 0.00000
H 0.48185
Z"
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
    label: 'customer',
    links: [
      { label: 'client-sup', to: '/client' },
      { label: 'help-center', to: '/help' },
      { label: 'sys-status', to: '/system' },
      { label: 'feedback', to: '/feedback' }
    ]
  }
];

const paths = ['/privacy-policy', '/terms-and-conditions', '/copyright'];

const legals = computed(() =>
  useMapRt('footer.legals')?.map((el, i) => ({
    label: el,
    to: paths[i]
  }))
);
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: max(2.5rem, 25px);
  color: #fff;
  position: relative;
  padding-top: 3.2rem;
  padding-bottom: max(3.2rem, 20px);
  padding-inline: max(7.5rem, 16px);
  & > *:not(.footer__bg):not(.footer__socials):not(.footer__copyright) {
    margin-left: max(7.5rem, 24px);
    margin-right: max(7.5rem, 10px);
    @media screen and (max-width: vars.$bp-sm) {
      margin-right: max(3rem, 10px);
    }
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
    flex-wrap: wrap;
    gap: 34px;
    @media screen and (max-width: vars.$bp-md) {
      margin-bottom: 0;
    }
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

    @media screen and (max-width: vars.$bp-lg) {
      clip-path: url('#tallPanel');
      background: linear-gradient(to bottom, #a72f0e 0%, #4c0c02 50%, #8f1702 100%);
    }
  }
  &__copyright {
    margin-top: calc(6rem - 2.5rem);
    align-self: flex-start;
    color: #5f3207;
    font-size: 14px;
    font-weight: 500;
    padding: max(1.6rem, 10px) max(2.4rem, 10px);
    border-radius: 60px;
    background: #fffefd;
    box-shadow: 16px 20px 94px 0 rgba(29, 29, 29, 0.16);
    @media screen and (max-width: vars.$bp-sm) {
      max-width: 62%;
      translate: 0 30%;
    }
    a {
      text-decoration: underline;
    }
  }
  &__bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 34px;
    &-legal {
      font-size: max(1.4rem, 12px);
      font-weight: 500;
      position: relative;
      &:not(:last-child)::after {
        content: '';
        position: absolute;
        inset-block: 0;
        right: min(-2.5rem, -10px);
        width: 1px;
        background-color: #5a5a59;
        @media screen and (max-width: vars.$bp-lg) {
          background: rgba(255, 255, 255, 0.5);
        }
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
      gap: calc(max(2.5rem, 10px) * 2);
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
      gap: max(3.2rem, 10px);
      flex-wrap: wrap;
      p {
        max-width: 30ch;
      }
    }
  }
  &__nav {
    @media screen and (max-width: vars.$bp-lg) {
      order: -1;
    }
    @media screen and (max-width: vars.$bp-sm) {
      flex: 1;
    }
  }
  &__list {
    display: flex;
    gap: max(7.2rem, 32px);
    @media screen and (max-width: vars.$bp-sm) {
      justify-content: space-between;
    }
    &-label {
      color: rgba(255, 255, 255, 0.5);
      font-weight: 500;
      font-size: max(1.6rem, 16px);
    }
    &-item {
      display: flex;
      flex-direction: column;
      gap: max(3.2rem, 25px);
    }
    &-links {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: max(2rem, 14px);
    }
    &-link {
      font-weight: 500;
      color: var(--orgn-100, #fbe5d0);
      position: relative;
      padding-left: 12px;
      position: relative;
      font-size: max(1.6rem, 16px);
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
      font-size: 20px;
      font-weight: 500;
    }
    &-text {
      line-height: 130%;
      margin-top: 14px;
      margin-bottom: 24px;
      max-width: 33ch;
    }
  }
  &__socials {
    align-self: flex-end;
    display: flex;
    gap: max(1.2rem, 4px);
    &-link {
      @include mix.flex-center;
      width: max(1.2rem, 32px);
      height: max(1.2rem, 32px);
      border-radius: 50%;
      background: var(--orgn-900, #2f1904);
    }
  }
  &__header {
    margin-bottom: calc(8.7rem - 2.5rem);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: max(2.3rem, 16px);
    @media screen and (max-width: vars.$bp-md) {
      margin-bottom: 0;
    }
    &-text {
      color: var(--orgn-50, #fdf2e7);
      font-size: max(3.6rem, 18px);
      font-weight: 800;
      @media screen and (max-width: vars.$bp-md) {
        font-weight: 500;
      }
    }
    &-title {
      font-size: max(10rem, 50px);
      font-weight: 800;
      line-height: 84%;
      background: linear-gradient(92deg, #fdf2e7 39.76%, rgba(253, 242, 231, 0) 97.26%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media screen and (max-width: vars.$bp-md) {
        font-weight: 700;
      }
    }
  }
}
</style>
