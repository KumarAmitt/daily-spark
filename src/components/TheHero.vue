<template>
  <section :style="bgImageStyle" class="p-6 text-white">
    <h1 class="mt-40 w-1/2 font-heading text-4xl font-bold leading-tight tracking-wide">
      {{ article.title }}
    </h1>
    <p class="my-6 w-2/5 text-xl">{{ article.description }}</p>

    <div class="mb-6">
      <span>{{ publishedDate }}</span>
      <span class="mx-2 inline-block h-2 w-2 rounded rounded border-4"></span>
      <a :href="article.url" target="_blank">Read Full Article @ {{ article.source?.name }}</a>
    </div>
  </section>

  <!--  <pre>{{ article }}</pre>-->
</template>

<script setup>
import { computed } from 'vue'
import { useNewsStore } from '@/stores/news.js'

const newsStore = useNewsStore()
const article = computed(() => newsStore.featuredStory)

const bgImageStyle = computed(() => ({
  background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${article.value.urlToImage}) no-repeat center`,
  backgroundSize: 'cover'
}))

const publishedDate = computed(() => new Date(article.value.publishedAt).toDateString())
</script>
