<template>
  <h2
    class="my-4 border-l-4 border-accent-primary px-2 font-heading text-lg font-bold tracking-wide"
  >
    {{ text }}
  </h2>
</template>

<script setup>
defineProps({
  text: { type: String, required: true }
})
</script>
