<template>
  <TheHero />
  <div class="p-10">
   <FeaturedSection />
  </div>
</template>

<script setup>
import { useNewsStore } from '@/stores/news.js'
import {onBeforeMount} from 'vue'
import TheHero from '@/components/TheHero.vue'
import FeaturedSection from "@/components/FeaturedSection.vue";


const newsStore = useNewsStore()

onBeforeMount(() => {
  newsStore.fetchTopHeadlines()
})
</script>
