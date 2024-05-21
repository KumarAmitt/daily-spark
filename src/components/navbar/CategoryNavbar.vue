<template>
  <ul class="flex justify-between font-bold text-sm max-w-[1000px] mx-auto">
    <li v-for="category in categories" :key="category">{{category.toUpperCase()}}</li>
  </ul>
</template>

<script setup>
import {ref} from "vue";

const categories = ref(['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'])
</script>
