<template>
  <header>
    <a href="/" id="brand">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
      <span>Vue</span>
    </a>
    <div class="separator"></div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
header {
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  box-shadow:
    inset 0 -1px hsl(0deg 0% 100% / 40%),
    0 1px hsl(0deg 0% 0% / 25%);
  background: linear-gradient(
      to bottom,
      hsl(0deg 0% 100% / 10%),
      hsl(0deg 0% 100% / 25%) 50%,
      transparent 50%
    ),
    linear-gradient(to bottom, hsla(0deg 0% 100% / 75%), hsla(0deg 0% 75% / 75%));
  width: 100%;
  height: 48px;
  backdrop-filter: blur(4px);

  #brand {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    img {
      padding: 8px;
      height: 32px;
    }
  }

  .separator {
    display: block;
    margin: 0 16px;
    box-shadow:
      -1px 0 hsla(0deg 0% 100% / 20%),
      1px 0 hsla(0deg 0% 100% / 20%);
    background-color: hsla(0deg 0% 0% / 10%);
    width: 1px;
    height: 80%;
  }
}
</style>
