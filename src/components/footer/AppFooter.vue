<template>
  <section class="bg-slate-900">
    <div class="mx-auto flex max-w-[1080px] pb-16 pt-20 text-slate-300">
      <div class="basis-1/2">
        <AppLogo :is-link="true" />
        <p class="mt-4 font-heading text-lg text-slate-200">
          Bringing You the Latest Headlines, Local and Global.
        </p>
        <p class="mt-2 w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolor, eum incidunt,
          inventore, laboriosam laudantium minus non nulla odio pariatur quo repellat voluptate?
          Consequuntur eaque et harum, nam obcaecati vel.
        </p>
      </div>
      <div class="flex basis-1/2 justify-between">
        <FooterLinks title="Categories" :items="categories" />
        <FooterLinks title="Categories" :items="categories" />
        <FooterLinks title="Categories" :items="categories" />
      </div>
    </div>
    <div class="border-t border-slate-700 py-2 text-center text-slate-400">
      Copyright &copy; 2024 Daily Spark. All rights reserved
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import AppLogo from '@/components/utility/AppLogo.vue'
import FooterLinks from '@/components/footer/FooterLinks.vue'

const categories = ref([
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology'
])
</script>
