<template>
  <section>
    <SectionTitle text="Business" />
    <ul class="flex flex-col justify-between">
      <BusinessStory v-for="article in topFiveArticles" :key="article.title" :article="article" />
    </ul>
    <div class="mt-2 text-center">
      <BaseButton outlined>
        <RouterLink :to="{ name: 'category', params: { category: category } }"
          >Read More</RouterLink
        >
      </BaseButton>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import SectionTitle from '@/components/utility/SectionTitle.vue'
import { useNewsStore } from '@/stores/news.js'
import BusinessStory from '@/components/BusinessStory.vue'
import BaseButton from '@/components/utility/BaseButton.vue'

const newsStore = useNewsStore()
const category = 'business'
const allArticles = ref([])
const topFiveArticles = computed(() => allArticles.value.slice(0, 5))

onMounted(async () => {
  allArticles.value = await newsStore.fetchNewsByCategory(category)
})
</script>
