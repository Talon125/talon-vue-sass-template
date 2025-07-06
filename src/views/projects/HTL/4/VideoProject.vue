<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
// import PushButton from '@/components/PushButton.vue'
import GlassCard from '@/components/GlassCard.vue'
</script>

<template>
  <main class="container">
    <NavigationButtons />
    <GlassCard title="Video"> Coming soon... </GlassCard>
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
