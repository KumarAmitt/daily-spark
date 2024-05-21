<template>
  <h2>Sources</h2>
</template>

<script setup>
import { onMounted } from 'vue'
import { useNewsStore } from '@/stores/news.js'

const newsStore = useNewsStore()

onMounted(() => {
  newsStore.fetchNewsSources()
})
</script>
