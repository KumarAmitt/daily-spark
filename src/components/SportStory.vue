<template>
  <div>
    <div class="h-40 w-full relative bg-zinc-200 rounded-md">
      <img :src="article.urlToImage" alt="Sports cover image" class="absolute top-0 right-0 bottom-0 left-0  h-40 w-full object-cover rounded-md" />
    </div>
    <a :href="article.url" target="_blank">
      <h3 class="font-heading font-semibold text-sm leading-tight my-3">{{article.title}}</h3>
    </a>
    <div class="text-xs mt-2 font-semibold flex justify-between">
      <span>{{article.author}}</span>
      <span>{{publishedDate }}</span>
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



