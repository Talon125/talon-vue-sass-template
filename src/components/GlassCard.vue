<template>
  <div class="card">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card {
  margin: 24px 0;
  border-radius: 4px;
  box-shadow: 0 0 0 1px hsl(0deg 0% 100% / 90%),
    0 0 0 2px hsl(0deg 0% 0% / 50%), 0 0 8px black;
  background-image: radial-gradient(
      ellipse 100% 33% at bottom,
      hsl(0deg 0% 0% / 15%),
      transparent
    ),
    radial-gradient(
      ellipse at bottom left,
      transparent 75%,
      hsl(0deg 0% 100% / 75%)
    ),
    radial-gradient(
      ellipse at bottom right,
      transparent 75%,
      hsl(0deg 0% 100% / 75%)
    ),
    linear-gradient(
      to bottom,
      hsl(0deg 0% 100% / 55%),
      hsl(0deg 0% 100% / 60%) 49%,
      hsl(0deg 0% 100% / 50%) 51%
    );
  padding: 1em;
}
</style>
