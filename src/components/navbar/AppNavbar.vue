<template>
  <div class="flex items-center justify-between border-b px-10 py-4">
    <Logo accent size="large" />
    <nav class="w-1/2">
      <ul class="flex">
        <li v-for="navItem in navItems" :key="navItem.text" class="ml-10 first:ml-0">
          <RouterLink
            :to="{ name: navItem.component }"
            class="px-2 font-heading text-xl font-semibold transition duration-300 hover:border-b-2 hover:border-accent-primary hover:text-accent-primary"
          >
            {{ navItem.text }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import Logo from '@/components/utility/AppLogo.vue'
import { ref } from 'vue'

const navItems = ref([
  { text: 'News', component: 'news' },
  { text: 'News', component: 'news' },
  { text: 'News', component: 'news' },
  { text: 'News', component: 'news' },
  { text: 'About', component: 'about' }
])
</script>

<style scoped>
.router-link-active {
  @apply border-b-2 border-accent-primary text-accent-primary;
}
</style>
