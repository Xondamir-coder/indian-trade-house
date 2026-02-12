<template>
  <main class="contact">
    <section class="hero">
      <UiPicture src="contacts-hero.png" class="hero__bg" alt="bg" />
      <h1 class="heading-xl">
        {{ $t('contact.hero.title') }}
      </h1>
      <p class="hero__subtitle">
        {{ $t('contact.hero.subtitle') }}
      </p>
      <button class="button--orange">
        {{ $t('apply-membership') }}
      </button>
    </section>
    <UiSectionServices :items="useMapRt('contact.services')" />
    <section class="help">
      <div class="help__container">
        <UiSectionHeader
          class="help__header"
          :label="$t('contact.help.label')"
          :title="$t('contact.help.title')"
          :subtitle="$t('contact.help.subtitle')"
        />
        <form class="help__form" @submit.prevent="submitForm">
          <div class="help__form-container">
            <div v-for="field in fields" :key="field.name" class="help__form-row">
              <label :for="field.name">
                {{ $t(`form.${field.name}`) }}
              </label>
              <input
                v-if="field.type !== 'message'"
                :id="field.name"
                v-model="field.model.value"
                :name="field.name"
                :type="field.type"
                :placeholder="
                  $t('form.enter-your', {
                    label: $t(`form.${field.name}`).toLowerCase()
                  })
                "
                required
                class="help__form-input"
                @input="cleanPhone"
              />
              <textarea
                v-else
                :id="field.name"
                v-model="field.model.value"
                :name="field.name"
                :placeholder="$t('form.message-placeholder')"
                required
                rows="4"
                class="help__form-textbox"
              ></textarea>
            </div>
          </div>
          <button class="help__form-button button--orange" :disabled="isDisabled">Send</button>
        </form>
      </div>
      <div class="help__box">
        <h3 class="help__box-label">
          {{ $t('contact.help.next') }}
        </h3>
        <ul class="help__box-steps">
          <li v-for="(step, i) in useMapRt('contact.help.steps')" :key="i" class="help__box-step">
            <span>{{ (i + 1).toString().padStart(2, '0') }}</span>
            <span>{{ step }}</span>
          </li>
        </ul>
      </div>
      <div class="help__box">
        <h3 class="help__box-label">
          {{ $t('contact.help.urgent.title') }}
        </h3>
        <p class="help__box-subtitle">
          {{ $t('contact.help.urgent.subtitle') }}
        </p>
        <a href="tel:+998 90 900 90 09" class="help__box-cta">
          <div class="help__box-cta-iconbox">
            <IconsPhone class="help__box-cta-icon" />
          </div>
          <span>+998 90 900 90 09</span>
        </a>
        <a href="mailto:support@ithu.uz" class="help__box-cta">
          <div class="help__box-cta-iconbox">
            <IconsMailOpened class="help__box-cta-icon" />
          </div>
          <span>support@ithu.uz</span>
        </a>
      </div>
    </section>
    <section class="map">
      <UiPicture src="sitting-at-table.jpg" alt="banner" class="map__bg" />
      <div class="map__container">
        <div class="map__list">
          <button
            v-for="(item, i) in useMapRt('contact.map.items')"
            :key="i"
            class="map__item"
            :class="{ active: i === activeLocation }"
            @click="activeLocation = i"
          >
            <div class="map__item-iconbox">
              <IconsPin class="map__item-icon" />
            </div>
            <div class="map__item-content">
              <span class="map__item-content-name">
                {{ item.name }}
              </span>
              <ul class="map__item-content-list">
                <li
                  v-for="location in item.locations"
                  :key="location"
                  class="map__item-content-item"
                >
                  {{ location }}
                </li>
              </ul>
            </div>
          </button>
        </div>
        <div class="map__box">
          <UiPicture src="tashkent-map.jpg" alt="map" class="map__box-banner" />
          <div class="map__box-container">
            <div class="map__box-item">
              <button class="map__box-button">
                <span>{{ $t('contact.map.view') }}</span>
                <IconsArrowRight class="map__box-arrow" />
              </button>
              <div class="map__box-content">
                <span>{{ $t('tashkent') }}</span>
                <span>{{ $t('contact.map.address') }}</span>
              </div>
            </div>
            <div class="map__box-dot"></div>
            <svg width="0" height="0" aria-hidden="true" class="map__svg">
              <defs>
                <clipPath id="bubbleClip" clipPathUnits="objectBoundingBox">
                  <path
                    d="M 1.00000 0.11765
C 1.00000 0.05268 0.96288 0.00000 0.91549 0.00000
L 0.08451 0.00000
C 0.03712 0.00000 0.00000 0.05268 0.00000 0.11765
L 0.00000 0.78431
C 0.00000 0.84929 0.03712 0.90196 0.08451 0.90196
L 0.37303 0.90196
C 0.39559 0.90196 0.41743 0.91443 0.43366 0.93612
L 0.46506 0.98055
C 0.48438 1.00750 0.51570 1.00750 0.53502 0.98055
L 0.56642 0.93612
C 0.58265 0.91443 0.60449 0.90196 0.62705 0.90196
L 0.91549 0.90196
C 0.96288 0.90196 1.00000 0.84929 1.00000 0.78431
L 1.00000 0.11765
Z
"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const name = ref('');
const company = ref('');
const email = ref('');
const country = ref('');
const phone = ref('');
const partnership = ref('');
const message = ref('');

const activeLocation = ref(1);

const fields = computed(() => [
  {
    name: 'full-name',
    type: 'text',
    model: name
  },
  {
    name: 'company',
    type: 'text',
    model: company
  },
  {
    name: 'email',
    type: 'email',
    model: email
  },
  {
    name: 'country',
    type: 'text',
    model: country
  },
  {
    name: 'phone',
    type: 'tel',
    model: phone
  },
  {
    name: 'partnership',
    type: 'text',
    model: partnership
  },
  {
    name: 'message',
    type: 'message',
    model: message
  }
]);
const isDisabled = computed(
  () =>
    !name.value ||
    !email.value ||
    !company.value ||
    !country.value ||
    !phone.value ||
    !message.value ||
    !partnership.value
);

const cleanPhone = () => {
  phone.value = phone.value.replace(/[^+\s\d]/g, '');
};
const submitForm = () => {
  console.log(
    name.value,
    company.value,
    email.value,
    country.value,
    phone.value,
    partnership.value,
    message.value
  );
};
</script>

<style lang="scss" scoped>
.map {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 14rem;
  margin-bottom: calc(9rem - 3.2rem);
  &__bg {
    aspect-ratio: 144/66.5;
    position: absolute;
    top: 0;
    inset-inline: 0;
  }
  &__list {
    display: flex;
    gap: 2rem;
    &:has(> *:hover) > *:not(:hover) {
      opacity: 0.5;
    }
  }
  &__item {
    display: flex;
    padding: 2.2rem;
    gap: 1.6rem;
    border-radius: 1.2rem;
    background: #fff;
    box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
    transition: all 0.4s;

    &.active {
      background: var(--orgn-500, #ed7e17);
      box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
      .map__item-iconbox {
        background-color: #bd630f;
      }
      .map__item-icon {
        stroke: #fff;
      }
      .map__item-content-item:first-child::after {
        background-color: #f8cba0;
      }
      .map__item-content {
        &-name {
          color: #fff;
        }
        &-item {
          color: #fbe5d0;
        }
      }
    }
    &-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      &-list {
        display: flex;
        gap: 1.2rem;
      }
      &-name {
        transition: color 0.4s;
        color: var(--orgn-800, var(--orgn-800, #5f3207));
        font-weight: 800;
        line-height: 130%;
      }
      &-item {
        transition: color 0.4s;
        color: var(--Blue-300, var(--Neutral-Blue-300, #666c7a));
        font-size: 1.2rem;
        font-weight: 500;
        position: relative;
        &:first-child::after {
          $gap: 6;
          $dimensions: 4;
          content: '';
          position: absolute;
          right: calc(($gap + ($dimensions / 2)) * -1px);
          top: 50%;
          translate: 0 -50%;
          width: #{$dimensions}px;
          height: #{$dimensions}px;
          border-radius: 50%;
          background-color: #b9becc;
          transition: background 0.4s;
        }
      }
    }
    &-iconbox {
      @include mix.flex-center;
      width: 4.2rem;
      height: 4.2rem;
      border-radius: 50%;
      background: var(--orgn-50, #fdf2e7);
      transition: background 0.4s;
    }
    &-icon {
      fill: none;
      width: 52.3%;
      stroke: #bd630f;
      transition: stroke 0.4s;
    }
  }
  &__container {
    display: flex;
    flex-direction: column;
    padding-inline: var(--spacing-inline);
    gap: 2rem;
    z-index: 2;
  }
  &__svg {
    position: absolute;
  }
  &__box {
    z-index: 2;
    display: grid;
    border-radius: 2.4rem;
    background: var(--Primary-warmth, #fffefd);
    box-shadow: 0 21px 100px -7px rgba(124, 62, 12, 0.3);
    overflow: hidden;
    &-dot {
      width: 2.8rem;
      height: 2.8rem;
      background-color: #8e4a0b;
      border-radius: 50%;
      align-self: center;
      position: relative;
      &::before,
      &::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        background-color: #8e4a0b;
      }
      &::before {
        inset: -71.5%;
        opacity: 0.2;
      }
      &::after {
        inset: -475%;
        opacity: 0.1;
      }
    }
    &-container {
      margin-bottom: 4%;
      min-width: 28.4rem;
      place-self: center;
      display: flex;
      flex-direction: column;
      gap: 2.2rem;
    }
    &-button {
      display: flex;
      padding: 1.2rem 1.6rem 1.2rem 2.387rem;
      justify-content: space-between;
      align-items: center;
      gap: 0.7957rem;
      border-radius: 6.1rem;
      background: var(--orgn-50, #fdf2e7);
      transition: background 0.4s;
      &:hover {
        background: var(--orgn-100, #fbe5d0);
      }
      span {
        color: var(--orgn-700, var(--orgn-700, #8e4a0b));
        font-weight: 600;
        line-height: 100%;
      }
    }
    &-content {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1.2rem;
      text-align: center;
      span {
        &:first-child {
          color: var(--orgn-900, var(--orgn-900, #2f1904));
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          line-height: 120%;
        }
        &:last-child {
          color: var(--Blue-400, var(--Neutral-Blue-400, #494f61));
          font-size: 1.6rem;
          font-weight: 500;
          line-height: 130%;
          max-width: 20ch;
        }
      }
    }
    &-item {
      z-index: 1;
      border-radius: 2rem;
      padding: 1.6rem;
      padding-bottom: 4.82rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      background: var(--Primary-warmth, #fffefd);
      box-shadow: 16px 22px 140px rgba(35, 35, 35, 0.1);
      clip-path: url('#bubbleClip');
    }
    &-arrow {
      width: 2.4rem;
      fill: #8e4a0b;
    }
    &-banner {
      aspect-ratio: 125.6/64.7;
    }
    & > * {
      grid-area: 1/1/2/2;
    }
  }
}
.help {
  display: grid;
  grid-template-columns: 1.92fr 1fr;
  gap: 3rem;
  padding-inline: var(--spacing-inline);
  &__header {
    align-self: flex-start;
    max-width: 80%;
    text-align: start;
    align-items: flex-start;
  }
  &__container {
    grid-row: span 3;
    padding: 6rem;
    display: flex;
    gap: 6rem;
    flex-direction: column;
    border-radius: 2.4rem;
    border: 1px solid var(--orgn-100, #fbe5d0);
    background: #fff;

    /* Drop Shadow */
    box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    &-button {
      transition: opacity 0.4s;
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
    &-textbox {
      resize: none;
    }
    &-textbox,
    &-input {
      padding-inline: 1.6rem;
      padding-block: 1.35rem;
      border-radius: 0.8rem;
      border: 1px solid var(--Neutral-Grey-50, #e9e9e9);
      background: var(--Neutral-White-50, #fefefe);
      transition: border 0.3s;
      &:focus {
        border-color: #ed7e17;
      }
      &::placeholder {
        color: var(--Neutral-Grey-200, #9b9a9a);
      }
    }
    &-row {
      display: flex;
      flex-direction: column;
      font-family: vars.$font-inter;
      gap: 0.8rem;
      &:has(textarea) {
        grid-column: span 2;
      }
      label {
        color: var(--Neutral-Grey-800, #141414);
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 130%;
      }
    }
    &-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
  }
  &__box {
    display: flex;
    padding: 1.6rem;
    flex-direction: column;
    gap: 1.6rem;
    border-radius: 2.4rem;
    border: 1px solid var(--orgn-200, #f8cba0);
    background: var(--orgn-100, #fbe5d0);

    /* Drop Shadow */
    box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
    &-label {
      color: var(--orgn-800, var(--orgn-800, #5f3207));
      font-family: vars.$font-radio;
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 133%;
      letter-spacing: -0.24px;
    }
    &-step {
      color: var(--orgn-900, #2f1904);
      line-height: 130%;
      display: flex;
      align-items: center;
      gap: 1.6rem;
      z-index: 1;

      & > *:first-child {
        @include mix.flex-center;
        width: 3.2rem;
        height: 3.2rem;
        color: #fff;
        font-size: 1.4rem;
        font-weight: 800;
        border-radius: 50%;
        background: var(--orgn-400, #f09642);
        flex-shrink: 0;
      }
      & > *:last-child {
        font-family: vars.$font-inter;
        font-size: 2.4rem;
        font-weight: 600;
      }
    }
    &-steps {
      display: flex;
      padding: 3.2rem;
      flex-direction: column;
      gap: 2rem;
      border-radius: 3.2rem;
      border: 1px solid var(--orgn-200, #f8cba0);
      background: #fff;

      /* Drop Shadow */
      box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 60%;
        background: var(--orgn-200, #f8cba0);
        left: calc(3.2rem + (3.2 / 2) * 1rem);
        top: 3.2rem;
      }
    }
    &-subtitle {
      color: var(--orgn-800, var(--orgn-800, #5f3207));
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 130%;
    }
    &-cta {
      display: flex;
      padding: 1.6rem;
      align-items: center;
      gap: 1rem;
      border-radius: 3.2rem;
      border: 1px solid var(--orgn-200, #f8cba0);
      background: #fff;
      color: var(--orgn-900, #2f1904);

      /* Drop Shadow */
      box-shadow: 0 21px 60px -1px rgba(124, 62, 12, 0.1);
      transition: all 0.4s;
      &:hover {
        background: #bd630fa4;
        color: #fff;
      }
      span {
        font-family: vars.$font-inter;
        font-size: 2.4rem;
        font-weight: 600;
        line-height: 130%;
      }
      &-iconbox {
        @include mix.flex-center;
        width: 5.2rem;
        height: 5.2rem;
        border-radius: 50%;
        border-radius: 99.8rem;
        border: 0.833px solid var(--orgn-100, #fbe5d0);
        background: var(--orgn-100, #fbe5d0);
      }
      &-icon {
        fill: none;
        width: 47%;
      }
    }
  }
}
.hero {
  @include mix.flex-center;
  padding-block: 25rem;
  flex-direction: column;
  gap: 1.6rem;
  border-radius: 0 0 2.4rem 2.4rem;
  position: relative;
  background: linear-gradient(180deg, var(--orgn-50, #fdf2e7) 72.27%, #fed4ac 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, #f09642 1.5px, transparent 1.5px);
    mix-blend-mode: darken;
    pointer-events: none;
    background-size: 25px 25px;

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
      rgba(0, 0, 0, 0.5) 45%,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0) 75%
    );
  }
  & > *:not(.hero__bg) {
    z-index: 1;
  }
  &__bg {
    position: absolute;
    inset: 0;
  }
  &__subtitle {
    color: var(--orgn-950, var(--orgn-950, #180c02));
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    line-height: 150%;
    max-width: 45ch;
  }
}
.contact {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}
</style>
