<script setup lang="ts">
import { RouterView } from 'vue-router'
import WebsiteNavigationBar from './components/WebsiteNavigationBar.vue'
</script>

<template>
  <WebsiteNavigationBar />

  <RouterView />
</template>

<style lang="scss">
html {
  background: linear-gradient(to top, hsl(206deg 50% 95%), hsl(206deg 100% 85%));
  background-attachment: fixed;
  background-clip: border-box;
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
</style>
