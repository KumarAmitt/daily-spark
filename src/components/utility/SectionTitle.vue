<template>
  <h2 class="border-l-8 border-accent-primary px-2 py-1 text-lg font-heading font-bold tracking-wide">{{text}}</h2>
</template>

<script setup>

defineProps({
  text: {type: String, required: true}
})

</script>
