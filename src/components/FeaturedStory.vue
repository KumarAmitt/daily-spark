<template>
  <li class="feature-card" :style="bgImageStyle">
    <a :href="article.url" target="_blank" class="h-full flex flex-col justify-end">
      <h3 class="text-white mt-1 px-4 py-2 text-lg rounded-b-2xl">{{article.title}}</h3>
    </a>
  </li>
</template>

<script setup>

import {computed} from "vue";

const props = defineProps({
  article: {type: Object, required: true}
})

const bgImageStyle = computed(() => ({
  background: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), url(${props.article.urlToImage}) no-repeat center`,
  backgroundSize: 'cover'
}))

</script>


<style scoped>
.feature-card {
  @apply rounded-2xl mx-2 first:ms-0 last:me-0;
  height: 220px;
  min-width: 375px;
}

h3 {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5) );
}
</style>
