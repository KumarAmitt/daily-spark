import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { API_KEY, BASE_URL } from '@/constants.js'

export const useNewsStore = defineStore('news', () => {
  const featuredStory = ref({})
  const featuredStories = ref([])

  const fetchTopHeadlines = async () => {
    const url = `${BASE_URL}/top-headlines?country=in&apiKey=${API_KEY}`
    try {
      const response = await axios.get(url)
      const featured = response.data.articles
      featuredStory.value = featured[0]
      featuredStories.value = featured.slice(1)
      // console.log(featuredStories)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchNewsByCategory = async (category) => {
    const url = `${BASE_URL}/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`
    try {
      const response = await axios.get(url)
      return response.data.articles;
    } catch (error) {
      console.log(error)
    }
  }

  return { featuredStory, featuredStories, fetchTopHeadlines, fetchNewsByCategory }
})
