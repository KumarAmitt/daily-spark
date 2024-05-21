<template>
  <section class="my-4">
    <SectionTitle text="Featured Stories" />
    <ul class="flex justify-between overflow-x-scroll">
      <FeaturedStory v-for="article in articles" :key="article.title" :article="article" />
    </ul>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useNewsStore } from '@/stores/news.js'
import SectionTitle from '@/components/utility/SectionTitle.vue'
import FeaturedStory from '@/components/FeaturedStory.vue'

const newsStore = useNewsStore()
const articles = computed(() => newsStore.featuredStories)
</script>

<style scoped>
ul::-webkit-scrollbar {
  display: none;
}

ul::-webkit-scrollbar-thumb {
  width: 0;
}
</style>
