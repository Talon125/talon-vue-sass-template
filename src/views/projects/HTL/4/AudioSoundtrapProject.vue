<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
// import PushButton from '@/components/PushButton.vue'
import GlassCard from '@/components/GlassCard.vue'
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'HTL-4' }" />
    <GlassCard title="Audio Soundtrap" :noCenter="true">
      <h1 class="year-marker">
        HTL 4th Grade (Cumulative: 12) | School year 2022/2023
      </h1>
      Coming soon...
    </GlassCard>
  </main>
</template>

<style scoped lang="scss">
.mrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
}

.miau {
  min-width: 50vw;
}
</style>
