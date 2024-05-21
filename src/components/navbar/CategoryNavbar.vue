<template>
  <ul class="flex justify-between font-bold text-sm max-w-[1000px] mx-auto py-1">
    <li v-for="category in categories" :key="category">
      <RouterLink :to="{name: 'category', params: {category}}" >{{category.toUpperCase()}}</RouterLink>
    </li>
  </ul>
  <h1>{{route.params.category}}</h1>
 <pre>{{route}}</pre>
</template>

<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const categories = ref(['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'])



</script>

<style scoped>
.router-link-active {
  @apply border-b-2 border-accent-primary text-accent-primary;
}
</style>
