<template>
  <button :class="['button', buttonClass]">
    <slot></slot>
    {{ text }}
  </button>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  text: { type: String, default: '' },
  outlined: { type: Boolean, default: false }
})

const buttonClass = computed(() => (props.outlined ? 'button-outlined' : 'button-fill'))
</script>

<style>
.button {
  @apply rounded-full border-2 border-accent-primary px-3 py-1 font-semibold transition duration-300;
}

.button-fill {
  @apply bg-accent-primary text-white hover:bg-transparent hover:text-accent-primary;
}
.button-outlined {
  @apply text-accent-primary hover:bg-accent-primary hover:text-white;
}
</style>
