<template>
  <div class="mr-10 flex border-b py-4 last:border-none">
    <div class="relative min-h-40 w-1/4 rounded-xl bg-zinc-200">
      <img
        :src="article.urlToImage"
        alt="cover photo"
        class="absolute bottom-0 left-0 right-0 top-0 h-40 w-full rounded-xl object-cover"
      />
    </div>
    <div class="ml-3 w-3/4">
      <a :href="article.url" target="_blank" class="font-heading text-lg font-bold">{{
        article.title
      }}</a>
      <p class="text-sm">{{ article.description }}</p>
      <div class="mt-2 text-xs font-semibold">
        <span v-if="article.author" class="mr-2 rounded-2xl bg-green-200 px-2 py-1">{{
          article.author
        }}</span>
        <span class="mr-2 text-green-700">{{ article.source.name }}</span>
        <span>{{ publishedDate }}</span>
      </div>
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
