<template>
  <CategoryNavbar/>
  <main>
    <ul class="grid grid-cols-2 gap-4">
      <SportStory v-for="article in articles" :key="article.title" :article="article"/>
    </ul>
  </main>
</template>

<script setup>
import CategoryNavbar from '@/components/navbar/CategoryNavbar.vue'
import {useRoute} from "vue-router";
import {onMounted, ref, watch} from "vue";
import {useNewsStore} from "@/stores/news.js";
import SportStory from "@/components/SportStory.vue";

const route = useRoute();
const newsStore = useNewsStore();
const articles = ref([]);

const fetchArticles = async () => {
  articles.value = await newsStore.fetchNewsByCategory(route.params.category)
}

onMounted(async () => {
  await fetchArticles()
})

watch(() => route.params.category, async () => {
  await fetchArticles()
})


</script>
