<template>
  <div>
    <div class="relative h-40 w-full rounded-md bg-zinc-200">
      <img
        :src="article.urlToImage"
        alt="Sports cover image"
        class="absolute bottom-0 left-0 right-0 top-0 h-40 w-full rounded-md object-cover"
      />
    </div>
    <a :href="article.url" target="_blank">
      <h3 class="my-3 font-heading text-sm font-semibold leading-tight">{{ article.title }}</h3>
    </a>
    <div class="mt-2 flex justify-between text-xs font-semibold">
      <span>{{ article.author }}</span>
      <span>{{ publishedDate }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  article: { type: Object, required: true }
})

const publishedDate = computed(() => new Date(props.article.publishedAt).toDateString())
</script>
