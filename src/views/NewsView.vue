<template>
  <TheHero/>
  <div class="p-10">
    <FeaturedStories/>
    <CategoryNews/>
  </div>
</template>

<script setup>
import {useNewsStore} from '@/stores/news.js'
import {onBeforeMount} from 'vue'
import TheHero from '@/components/TheHero.vue'
import FeaturedStories from "@/components/FeaturedStories.vue";
import CategoryNews from "@/components/CategoryNews.vue";


const newsStore = useNewsStore()

onBeforeMount(() => {
  newsStore.fetchTopHeadlines()
})
</script>
