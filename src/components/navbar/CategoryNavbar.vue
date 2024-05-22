<template>
  <ul class="mx-auto flex max-w-[1000px] justify-between py-1 text-sm font-bold">
    <li v-for="category in categories" :key="category">
      <RouterLink :to="{ name: 'category', params: { category } }">
        {{ category.toUpperCase() }}
      </RouterLink>
    </li>
  </ul>
</template>

<script setup>
import {ref} from 'vue'

const categories = ref([
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology'
])


</script>

<style scoped>
.router-link-active {
  @apply border-b-2 border-accent-primary text-accent-primary;
}
</style>
