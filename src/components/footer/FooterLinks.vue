<template>
  <div>
    <h3 class="mb-4 text-xl font-bold">{{ title }}</h3>
    <ul>
      <li v-for="item in items" :key="item">
        <RouterLink
          :to="{ name: 'category', params: { category: item } }"
          class="leading-loose transition-all duration-300 hover:text-slate-400 hover:underline"
        >
          {{ item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true }
})
</script>
