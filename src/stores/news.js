import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { API_KEY, BASE_URL } from '@/constants.js'

export const useNewsStore = defineStore('news', () => {
  const featured_story = ref({})
  const featured_stories = ref([])

  const fetch_top_headlines = async () => {
    const url = `${BASE_URL}/top-headlines?country=in&apiKey=${API_KEY}`
    try {
      const response = await axios.get(url)
      const featured = response.data.articles
      featured_story.value = featured[10]
      featured_stories.value = featured.slice(1)
      console.log(featured_stories)
    } catch (error) {
      console.log(error)
    }
  }

  return { featured_story, featured_stories, fetch_top_headlines }
})
