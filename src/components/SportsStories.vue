<template>
  <section class="ml-4">
    <div class="flex items-center justify-between">
      <SectionTitle text="Sports" />
      <BaseButton outlined>
        <RouterLink :to="{ name: 'category', params: { category: category } }"
          >Read More</RouterLink
        >
      </BaseButton>
    </div>
    <ul class="grid grid-cols-2 gap-4">
      <SportStory v-for="article in topFiveArticles" :key="article.title" :article="article" />
    </ul>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import SectionTitle from '@/components/utility/SectionTitle.vue'
import { useNewsStore } from '@/stores/news.js'
import SportStory from '@/components/SportStory.vue'
import BaseButton from '@/components/utility/BaseButton.vue'

const newsStore = useNewsStore()
const category = 'sports'
const allArticles = ref([])
const topFiveArticles = computed(() => allArticles.value.slice(0, 6))

onMounted(async () => {
  allArticles.value = await newsStore.fetchNewsByCategory(category)
})
</script>
