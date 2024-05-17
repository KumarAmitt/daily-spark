<template>
  <div>
    <RouterLink
      :to="{ name: logoLink }"
      :class="['flex', 'items-center', 'font-heading', 'border-0', colorClass]"
    >
      <font-awesome-icon :icon="['fas', 'compass']" :class="[iconClass]" />
      <span :class="['ml-2', 'font-bold', textClass]">Daily Spark</span>
    </RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  size: { type: String, default: 'medium' },
  accent: { type: Boolean, default: false },
  isLink: { type: Boolean, default: false }
})

const colorClass = computed(() => (props.accent ? 'text-accent-primary' : 'text-white'))
const iconClass = computed(() =>
  props.size === 'small' ? 'text-2xl' : props.size === 'medium' ? 'text-3xl' : 'text-4xl'
)
const textClass = computed(() =>
  props.size === 'small' ? 'text-lg' : props.size === 'medium' ? 'text-xl' : 'text-2xl'
)
const logoLink = computed(() => (props.isLink ? 'home' : ''))
</script>
