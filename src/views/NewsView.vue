<template>
  <TheHero />
</template>

<script setup>
import { useNewsStore } from '@/stores/news.js'
import { onMounted } from 'vue'
import TheHero from '@/components/TheHero.vue'

const newsStore = useNewsStore()

onMounted(() => {
  newsStore.fetch_top_headlines()
})
</script>
