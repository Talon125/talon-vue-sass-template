<script setup lang="ts">
import { RouterView } from 'vue-router'
import WebsiteNavigationBar from '@/components/WebsiteNavigationBar.vue'
</script>

<template>
  <WebsiteNavigationBar />

  <!-- <div id="page-name">{{ String($route.name).toLowerCase() }}</div> -->
  <!-- <div id="page-name">{{ $route.name?.toString().toLowerCase() }}</div> -->
  <div id="page-name">{{ $route.name }}</div>

  <RouterView />
</template>

<style lang="scss">
@use '@/assets/util';

#page-name {
  position: fixed;
  top: 64px;
  left: -0.125em;
  opacity: 0.1;
  z-index: -1;
  line-height: 0.9em;
  font-size: 20vw;
  user-select: none;
  filter: blur(0.333vw);

  @media (width <= 992px) {
    display: none;
  }
}

#background-gradient {
  position: fixed;
  z-index: -1;
  /* background: linear-gradient(
    to right,
    hsla(0deg 0% 0% / 15%),
    hsla(0deg 0% 0% / 5%) 25%,
    hsla(0deg 0% 0% / 5%) 75%,
    hsla(0deg 0% 0% / 15%)
    );
    background: linear-gradient(
      to top,
      hsl(206deg 50% 95%),
      hsl(206deg 100% 85%)
      ); */
  /* background-attachment: fixed; */
  /* background-clip: border-box; */
  background-image:
    linear-gradient(
      190deg,
      rgb(7 142 112 / 50%),
      rgb(38 207 170 / 50%),
      rgb(153 232 193 / 50%),
      rgb(123 173 226 / 50%),
      rgb(79 72 203 / 50%),
      rgb(61 26 119 / 50%)
    ),
    linear-gradient(
      185deg,
      rgb(7 142 112 / 50%),
      rgb(38 207 170 / 50%),
      rgb(153 232 193 / 50%),
      rgb(123 173 226 / 50%),
      rgb(79 72 203 / 50%),
      rgb(61 26 119 / 50%)
    ),
    linear-gradient(
      to bottom,
      rgb(7 142 112),
      rgb(38 207 170),
      rgb(153 232 193),
      rgb(123 173 226),
      rgb(79 72 203),
      rgb(61 26 119)
    );
  /* background-origin: border-box; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  /* height: 100%; */
}

main {
  padding-bottom: 1em;
}

.container {
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  max-width: 1320px;

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
