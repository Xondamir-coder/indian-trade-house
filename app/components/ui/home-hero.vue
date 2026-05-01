<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title hero-reveal-title heading-xl">
          <span v-for="text in $tm('home.hero.title')" :key="text">
            {{ $rt(text) }}
          </span>
        </h1>
        <p class="hero__subtitle hero-reveal-subtitle">
          {{ $t('home.hero.subtitle') }}
        </p>
        <div class="hero__buttons hero-reveal-extra">
          <NuxtLink :to="$localePath('/products')" class="button--orange">
            {{ $t('explore-opp') }}
          </NuxtLink>
          <button class="button--white">
            {{ $t('view-packages') }}
          </button>
        </div>
      </div>
      <div class="hero__box">
        <Transition name="pic">
          <UiPicture
            :key="activePic"
            :src="`spice-${activePic + 1}.png`"
            alt="spices banner"
            class="hero__pic"
            loading="eager"
            decoding="sync"
            fetchpriority="high"
          />
        </Transition>
      </div>
    </div>
    <div class="hero__things">
      <UiPicture
        v-for="index in 5"
        :key="index"
        ref="thingPicRefs"
        :src="`spice-${index}.png`"
        alt="spice 1"
        class="hero__things-pic"
        fetchpriority="low"
      />
      <div class="hero__things-box">
        <SvgGreenLightning class="hero__things-lightning" />
      </div>
      <svg class="hero__things-path" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260">
        <path
          id="circlePath"
          ref="pathRef"
          d="M130,0
       A130,130 0 1,1 129.999,0
       Z"
          fill="none"
          stroke="black"
        />
      </svg>
    </div>
  </section>
</template>

<script setup>
import MotionPathPlugin from 'gsap/MotionPathPlugin';

const { $gsap } = useNuxtApp();

const ORBIT_DURATION = 10;
const VOID_PROGRESS = 0.75;

const pathRef = ref(null);
const thingPicRefs = ref([]);
const activePic = ref(0);

const orbitTweens = [];
const activePicTimeouts = [];
const activePicIntervals = [];
let heroReveal;

onMounted(() => {
  const elements = thingPicRefs.value.map(item => item?.$el ?? item).filter(Boolean);
  const totalItems = elements.length;
  const orbitItems = elements.map((element, index) => ({
    element,
    index,
    start: 1 - (index + 1) / totalItems
  }));

  $gsap.registerPlugin(MotionPathPlugin);

  orbitItems.forEach(({ element, start }) => {
    orbitTweens.push(
      $gsap.to(element, {
        duration: ORBIT_DURATION,
        repeat: -1,
        ease: 'none',
        motionPath: {
          path: pathRef.value,
          align: pathRef.value,
          alignOrigin: [0.5, 0.5],
          start,
          end: start + 1,
          autoRotate: true
        }
      })
    );
  });

  orbitItems.forEach(({ index, start }) => {
    const delay = getTimeUntilVoid(start) * 1000;

    activePicTimeouts.push(
      window.setTimeout(() => {
        activePic.value = index;

        activePicIntervals.push(
          window.setInterval(() => {
            activePic.value = index;
          }, ORBIT_DURATION * 1000)
        );
      }, delay)
    );
  });

  heroReveal = useHeroReveal({
    extra: '.hero__buttons'
  });
});

onBeforeUnmount(() => {
  orbitTweens.forEach(tween => tween.kill());
  activePicTimeouts.forEach(timeoutId => window.clearTimeout(timeoutId));
  activePicIntervals.forEach(intervalId => window.clearInterval(intervalId));
  heroReveal?.revert();
});

const getTimeUntilVoid = start => {
  const distance = (VOID_PROGRESS - start + 1) % 1;

  return distance * ORBIT_DURATION;
};
</script>

<style lang="scss" scoped>
.hero {
  padding-inline: max(3.2rem, 16px);
  display: flex;
  flex-direction: column;
  &__things {
    margin-top: -15%;
    align-self: center;
    width: max(23%, 260px);
    aspect-ratio: 1;
    position: relative;
    @media screen and (max-width: 1020px) {
      margin-top: -180px;
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        166deg,
        rgba(247, 244, 240, 0.8) 51.46%,
        rgba(255, 219, 172, 0.8) 90.25%
      );
      backdrop-filter: blur(10px);
      border-radius: 50%;
      z-index: -1;
    }
    &-box {
      @include mix.flex-center;
      width: max(10rem, 80px);
      height: max(10rem, 80px);
      border-radius: 50%;
      background-color: #fff;
      box-shadow:
        0 -1px 1px 0 rgba(228, 228, 228, 0.25),
        0 2px 2px 0 rgba(175, 175, 175, 0.25),
        0 0 0 1px rgba(252, 252, 252, 0.17),
        0 2px 4px 0 rgba(252, 252, 252, 0.04);
      position: absolute;
      left: 50%;
      top: 50%;
      translate: -50%;
      z-index: 3;
    }
    &-pic {
      width: max(6.8rem, 55px);
      position: absolute;
      border-radius: 50%;
      border: 2px solid var(--Neutral-White-50, #fefefe);
    }
    &-path {
      pointer-events: none;
      opacity: 0;
    }
  }
  &__pic {
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
  }
  &__box {
    @keyframes rotate {
      to {
        rotate: 1turn;
      }
    }
    position: relative;
    width: 60%;
    aspect-ratio: 2 / 1;
    & > * {
      animation: rotate 70s infinite linear;
    }
    @media screen and (max-width: vars.$bp-lg) {
      width: 140%;
    }
    &::after {
      content: '';
      position: absolute;
      inset: min(-4rem, -30px);
      aspect-ratio: 1;
      border-radius: 50%;
      border: max(0.4rem, 2.5px) solid #fff;
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  }
  &__container {
    z-index: 2;
    border-radius: max(2.4rem, 14px);
    box-shadow: 0 0 0 1px #e5e3e0;
    margin-top: calc(max(4rem, 20px) + max(3.2rem, 16px));
    padding-top: calc(max(4rem, 25px) + max(4rem, 30px));
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background: conic-gradient(
      from 180deg at 50% 50%,
      var(--orgn-500, #ed7e17) 0deg,
      var(--orgn-50, #fdf2e7) 209.4230818748474deg,
      var(--orgn-100, #fbe5d0) 360deg
    );
    @media screen and (max-width: vars.$bp-md) {
      padding-top: 110px;
      aspect-ratio: 49/97;
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle, #f9d7b6 1.5px, transparent 1.5px);
      mix-blend-mode: multiply;
      pointer-events: none;
      background-size: 25px 25px;
      mask-image: radial-gradient(
        circle at 50% 0%,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.9) 25%,
        rgba(0, 0, 0, 0.4) 45%,
        rgba(0, 0, 0, 0.3) 60%,
        rgba(0, 0, 0, 0.2) 75%
      );
      @media screen and (max-width: vars.$bp-md) {
        mask-image: radial-gradient(circle at 50% 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 100%);
        mix-blend-mode: darken;
      }
    }
  }
  &__title {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  &__subtitle {
    font-size: max(2rem, 14px);
    font-family: vars.$font-inter;
    line-height: 152%;
    color: var(--Neutral-Grey-400, #515050);
    letter-spacing: -0.3px;
    text-align: center;
    max-width: 63ch;
  }
  &__content {
    padding-inline: 14px;
    z-index: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
  }
  &__buttons {
    margin-top: max(2.4rem, 4px);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: max(1.6rem, 10px);
  }
}
.pic-enter-active,
.pic-leave-active {
  transition: all 0.5s;
}
.pic-enter-from,
.pic-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
