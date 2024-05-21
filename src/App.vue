<template>
  <AppNavbar/>
  <RouterView/>
  <AppFooter/>
</template>

<script setup>
import AppFooter from "@/components/footer/AppFooter.vue";
import AppNavbar from "@/components/navbar/AppNavbar.vue";
</script>
