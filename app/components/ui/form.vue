<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="form__container">
      <div v-for="field in fields" :key="field.name" class="form__row">
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
          class="form__input"
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
          class="form__textbox"
        ></textarea>
      </div>
    </div>
    <button class="form__button button--orange" :disabled="isDisabled">
      <span v-if="!isLoading">{{ $t('send') }}</span>
      <UiSpinner v-else />
    </button>
    <UiBaseModal
      v-model="success"
      :button-text="$t('explore-catalog')"
      @action="$router.push('/products')"
    >
      <div class="success">
        <div class="success__icontainer">
          <div class="success__box">
            <svg
              class="success__icon"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.3296 5.72852C17.5336 5.39271 6.06443 16.3169 5.72862 30.1128C5.39282 43.9087 16.317 55.3779 30.1129 55.7137C43.9088 56.0495 55.378 45.1254 55.7138 31.3294C56.0496 17.5335 45.1255 6.06432 31.3296 5.72852ZM25.4185 43.0957L13.2264 30.2953L16.8361 26.8571L25.5907 36.0228L45.0218 17.5152L48.4594 21.1499L25.4185 43.0957Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <h3 class="success__title">
          {{ $t('contact.success.title') }}
        </h3>
        <p class="success__text">
          {{ $t('contact.success.text') }}
        </p>
      </div>
    </UiBaseModal>
  </form>
</template>

<script setup>
onMounted(() => {
  document.querySelectorAll('.form__row').forEach(el => {
    useAnimate(el, {
      animProps: {
        y: 25
      }
    });
  });
  document.querySelectorAll('.help__box').forEach(el => {
    useAnimate(el, {
      animProps: {
        y: 25
      }
    });
  });
});

const name = ref('');
const company = ref('');
const email = ref('');
const country = ref('');
const phone = ref('');
const partnership = ref('');
const message = ref('');

const isLoading = ref(false);
const success = ref(null);

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
    !partnership.value ||
    isLoading.value
);

const cleanPhone = () => {
  phone.value = phone.value.replace(/[^+\s\d]/g, '');
};
const submitForm = async () => {
  isLoading.value = true;
  try {
    await new Promise(resolve => {
      setTimeout(() => resolve(), 500);
    });
    success.value = true;
  } catch (error) {
    console.log(error);
    success.value = false;
  } finally {
    isLoading.value = false;
    name.value = '';
    company.value = '';
    email.value = '';
    country.value = '';
    phone.value = '';
    partnership.value = '';
    message.value = '';
    setTimeout(() => {
      success.value = null;
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
.success {
  display: flex;
  flex-direction: column;
  gap: max(0.4rem, 4px);
  &__box {
    @include mix.flex-center;
    background: linear-gradient(180deg, var(--grn-200, #afe9bc) 0%, var(--grn-700, #217835) 100%);
    z-index: 1;
    flex: 1;
    border-radius: max(1.44rem, 14px);
  }
  &__icontainer {
    align-self: center;
    margin-bottom: calc(max(2rem, 20px) - max(0.4rem, 4px));
    display: flex;
    position: relative;
    width: max(10rem, 100px);
    height: max(10rem, 100px);
    border-radius: max(1.44rem, 14px);
    box-shadow:
      0 7.2px 7.2px 0 rgba(255, 255, 255, 0.45) inset,
      0 3.6px 10.8px 0 rgba(77, 200, 104, 0.5);
    &::after {
      content: '';
      position: absolute;
      inset: -2.7px;
      background-image: linear-gradient(to bottom, #2ca047 0%, #ffffff 100%);
      border-radius: max(1.6rem, 16px);
    }
  }
  &__icon {
    width: max(6rem, 50px);
  }
  &__title {
    color: var(--orgn-800, #5f3207);
    text-align: center;
    font-size: max(2rem, 20px);
    font-weight: 700;
    margin-bottom: max(0.4rem, 4px);
  }
  &__text {
    color: var(--Blue-400, #494f61);
    text-align: center;
    font-size: max(1.4rem, 12px);
    line-height: 150%;
  }
}
.form {
  display: flex;
  flex-direction: column;
  gap: max(6rem, 20px);
  &__button {
    display: grid;
    transition:
      background 0.4s,
      box-shadow 0.4s;
    & > * {
      grid-area: 1/1/2/2;
    }
    &:disabled {
      cursor: not-allowed;
      background: var(--Neutral-Blue-100, #b8bbc2);
      box-shadow:
        0 4.343px 10px 0 rgba(255, 255, 255, 0.5) inset,
        0 4.343px 12px 0 rgba(253, 242, 231, 0.3) inset;
    }
  }
  &__textbox {
    resize: none;
  }
  &__textbox,
  &__input {
    padding-inline: max(1.6rem, 16px);
    padding-block: max(1.35rem, 13px);
    border-radius: max(0.8rem, 8px);
    border: 1px solid var(--Neutral-Grey-50, #e9e9e9);
    background: var(--Neutral-White-50, #fefefe);
    transition: border 0.3s;
    font-size: max(1.6rem, 16px);
    color: #5f3207;
    &:focus {
      border-color: #ed7e175b;
    }
    &::placeholder {
      color: var(--Neutral-Grey-200, #9b9a9a);
    }
  }
  &__row {
    display: flex;
    flex-direction: column;
    font-family: vars.$font-inter;
    gap: max(0.8rem, 8px);
    @media screen and (min-width: vars.$bp-md) {
      &:has(textarea) {
        grid-column: span 2;
      }
    }
    label {
      color: var(--Neutral-Grey-800, #141414);
      font-size: max(1.6rem, 16px);
      font-weight: 500;
      line-height: 130%;
    }
  }
  &__container {
    display: grid;
    gap: max(2rem, 20px);
  }
}
</style>
