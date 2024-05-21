<template>
  <div class="flex py-4 mr-10 border-b last:border-none">
    <div class="w-1/4 rounded-xl min-h-40 relative bg-zinc-200">
      <img :src="article.urlToImage" alt="cover photo" class="absolute top-0 right-0 bottom-0 left-0 h-40 w-full object-cover rounded-xl">
    </div>
    <div class="w-3/4 ml-3">
      <a :href="article.url" target="_blank" class="text-lg font-bold font-heading">{{article.title}}</a>
      <p class="text-sm">{{article.description}}</p>
      <div class="text-xs mt-2 font-semibold">
        <span v-if="article.author" class="mr-2 bg-green-200 px-2 py-1 rounded-2xl">{{article.author}}</span>
        <span class="mr-2 text-green-700">{{article.source.name}}</span>
        <span>{{publishedDate }}</span>
      </div>
    </div>
  </div>

</template>


<script setup>
import {computed} from "vue";

const props = defineProps({
  article: {type: Object, required: true}
})

const publishedDate = computed(() => new Date(props.article.publishedAt).toDateString())

</script>
