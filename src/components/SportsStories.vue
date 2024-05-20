<template>
  <Section class="pl-6">
    <SectionTitle text="Sports"/>
    <ul class="grid grid-cols-2 gap-4">
      <SportStory v-for="article in topFiveArticles" :key="article.title" :article="article" />
    </ul>
  </Section>
</template>

<script setup>
import {onMounted, ref, computed} from 'vue';
import SectionTitle from "@/components/utility/SectionTitle.vue";
import {useNewsStore} from "@/stores/news.js";
import SportStory from "@/components/SportStory.vue";

const newsStore = useNewsStore();
const category = 'sports'
const allArticles = ref([])
const topFiveArticles = computed(() => allArticles.value.slice(0, 6))


onMounted(async () => {
  allArticles.value = await newsStore.fetchNewsByCategory(category)
})


</script>
