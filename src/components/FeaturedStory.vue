<template>
  <li class="feature-card" :style="bgImageStyle">
    <a :href="article.url" target="_blank" class="flex h-full flex-col justify-end">
      <h3 class="mt-1 rounded-b-2xl px-4 py-2 text-lg text-white">{{ article.title }}</h3>
    </a>
  </li>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  article: { type: Object, required: true }
})

const bgImageStyle = computed(() => ({
  background: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), url(${props.article.urlToImage}) no-repeat center`,
  backgroundSize: 'cover'
}))
</script>

<style scoped>
.feature-card {
  @apply mx-2 rounded-2xl first:ms-0 last:me-0;
  height: 220px;
  min-width: 375px;
}

h3 {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5));
}
</style>
