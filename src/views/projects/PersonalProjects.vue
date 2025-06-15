<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue'
</script>

<template>
  <main class="container">
    <div class="mrow">
      <GlassCard class="text-center miau"> Coming soon... </GlassCard>
    </div>
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
