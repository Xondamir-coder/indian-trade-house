<template>
  <Teleport to="body">
    <Transition name="appear">
      <div
        v-if="model"
        class="modal-container"
        data-lenis-prevent
        @click.self="closeModal"
      >
        <div class="modal">
          <button class="modal__button" :aria-label="$t('accessibility.close-modal')" @click="closeModal">
            <IconsClose class="modal__button-icon" />
          </button>
          <slot />
          <div class="modal__bottom">
            <button class="modal__bottom-button button--orange" @click="$emit('action')">
              <span>{{ buttonText }}</span>
              <IconsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const { $pauseLenis, $resumeLenis } = useNuxtApp();

const model = defineModel({
  type: Boolean
});

defineEmits(['action']);
defineProps({
  buttonText: {
    type: String,
    required: true
  }
});

const closeModal = () => {
  model.value = false;
};

watch(model, (isOpen, wasOpen) => {
  if (isOpen && !wasOpen) {
    $pauseLenis?.();
  }

  if (!isOpen && wasOpen) {
    $resumeLenis?.();
  }
});

onBeforeUnmount(() => {
  if (model.value) {
    $resumeLenis?.();
  }
});
</script>

<style lang="scss" scoped>
.modal {
  margin-block: auto;
  border-radius: max(1.2rem, 12px);
  border: 2px solid #fff;
  background: #fff;
  padding-block: max(1.6rem, 16px);
  display: flex;
  flex-direction: column;
  gap: max(1.6rem, 16px);
  width: max(35%, 400px);
  position: relative;
  overflow: hidden;
  transition: all 0.5s;

  @media screen and (max-width: vars.$bp-sm) {
    width: 91.4%;
  }

  & > * {
    z-index: 1;
  }
  &::after {
    background: #fff4e8;
    content: '';
    position: absolute;
    inset-inline: 0;
    top: 0;
    height: max(21rem, 210px);
    pointer-events: none;

    /* GRID */
    background-image:
      linear-gradient(to right, #fcd9b8 1px, transparent 1px),
      linear-gradient(to bottom, #fcd9b8 1px, transparent 1px);

    background-size: 46px 46px;

    /* FADE FROM CENTER */
    mask-image:
      /* main vertical fade (THIS does 90% of the job) */
      linear-gradient(
        to top,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.2) 20%,
        rgba(0, 0, 0, 0.7) 45%,
        rgba(0, 0, 0, 1) 65%
      ),
      /* very soft side fade (barely noticeable) */
      radial-gradient(
          ellipse at top,
          rgba(0, 0, 0, 1) 40%,
          rgba(0, 0, 0, 0.4) 60%,
          rgba(0, 0, 0, 0.2) 75%,
          rgba(0, 0, 0, 0) 100%
        );

    mask-composite: intersect;
  }
  & > *:not(.modal__button) {
    padding-inline: max(1.6rem, 16px);
  }
  &__button {
    @include mix.flex-center;
    margin-right: max(1.6rem, 16px);
    align-self: flex-end;
    width: max(4rem, 40px);
    height: max(4rem, 40px);
    border-radius: max(0.8rem, 8px);
    border: 1px solid var(--Blue-50, #e8e9eb);
    background:
      linear-gradient(180deg, rgba(223, 225, 231, 0) 0%, rgba(223, 225, 231, 0.05) 100%), #fff;

    /* Button/Secondary */
    box-shadow: 0 1px 1.5px 0.1px rgba(22, 25, 36, 0.03);
    stroke: #192034;
    fill: none;
    transition:
      stroke 0.3s,
      background 0.3s;

    &:hover {
      background: #192034;
      stroke: #fff;
    }

    &-icon {
      width: 50%;
    }
  }
  &__bottom {
    border-top: 1px solid var(--Blue-50, #e8e9eb);
    padding-top: max(1.6rem, 16px);
    display: flex;
    &-button {
      font-size: max(1.4rem, 14px);
      flex: 1;
      font-family: vars.$font-base;
    }
  }
  &-container {
    display: flex;
    justify-content: center;
    position: fixed;
    inset: 0;
    background: rgba(47, 25, 4, 0.8);
    z-index: 50;
    overflow-y: auto;
    padding-block: 20px;
  }
}

.appear-enter-active,
.appear-leave-active {
  transition: background 0.5s;
}

.appear-enter-from > *,
.appear-leave-to > * {
  opacity: 0;
  transform: translateY(25px);
}

.appear-enter-from,
.appear-leave-to {
  background: transparent;
}
</style>
