<template>
  <form class="signup" @submit.prevent="submitForm">
    <IconsMail class="signup__icon" />
    <input
      id="mail"
      v-model="mail"
      type="email"
      name="mail"
      class="signup__input"
      :placeholder="$t('enter-email')"
    />
    <button class="signup__button">
      {{ $t('subscribe') }}
    </button>
  </form>
</template>

<script setup>
const mail = ref('');

const submitForm = () => {
  console.log(mail.value);
};
</script>

<style lang="scss" scoped>
.signup {
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 42px;
  background: var(--orgn-800, #5f3207);
  display: flex;
  padding: 8px 8px 8px 24px;
  justify-content: center;
  align-items: center;
  &__input {
    color: #f4b071;
    width: max(15.2rem, 118px);
    &::placeholder {
      color: rgba(#f4b071, 0.78);
      text-transform: lowercase;
    }
  }
  &__icon {
    width: 20px;
    fill: none;
    flex-shrink: 0;
  }
  &__button {
    display: flex;
    height: 40px;
    padding: 8px 16px;
    align-items: center;
    gap: 12px;
    border-radius: 90px;
    background: var(--orgn-500, #ed7e17);
    font-weight: 500;
  }
}
</style>
