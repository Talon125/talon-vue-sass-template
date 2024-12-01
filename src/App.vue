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

.container {
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  @media (width >= 576px) {
    max-width: 540px;
  }

  @media (width >= 768px) {
    max-width: 720px;
  }

  @media (width >= 992px) {
    max-width: 960px;
  }

  @media (width >= 1200px) {
    max-width: 1140px;
  }

  @media (width >= 1400px) {
    max-width: 1320px;
  }
}
</style>
