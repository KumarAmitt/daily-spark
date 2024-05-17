<template>
  <section class="bg-cover bg-center p-6 text-white" :style="bgImageStyle">
    <h1 class="w-1/2 mt-40 font-heading text-4xl font-bold leading-tight tracking-wide">{{ article.title }}</h1>
    <p class="my-6 text-xl w-2/5">{{ article.description }}</p>

    <div>
      <div>{{ publishedDate }}</div>
      <RouterLink to="">Read Full Article @ {{ article.source?.name }}</RouterLink>
    </div>
  </section>

  <pre>{{ article }}</pre>
</template>

<script setup>
import {computed} from 'vue'
import {useNewsStore} from '@/stores/news.js'
import {useFormatDate} from "@/composables/formatDate.js";

const newsStore = useNewsStore()
const article = computed(() => newsStore.featured_story)

const bgImageStyle = computed(() => ({
  backgroundImage: `url(${article.value.urlToImage})`
}))

const publishedDate = computed(() => {
  const dateString = new Date(article.value.publishedAt)
  return new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(dateString)
})

</script>
