<script setup lang="ts">
import NavigationButton1 from '@/components/NavigationButton1.vue'
import PushButton from '@/components/PushButton.vue'
import GlassCard from '@/components/GlassCard.vue'
</script>

<template>
  <main class="container">
    <NavigationButton1 to="/projects">
      &leftarrow;&ensp;Back to Projects
    </NavigationButton1>
    <GlassCard class="info-card">
      Coming soon...
    </GlassCard>
  </main>
</template>

<style scoped lang="scss">
.inception {
  padding: 0 0.5em 1px;
}

.content {
  padding: 0.5em;
}

.amber {
  color: orange;
}

.opening-p {
  margin-top: 0;
}

.info-card {
  margin: 1em 0;
}

.ref-list {
  padding-left: 1em;
  list-style: none;
}

.indent {
  margin-left: 1em;
}

@media (width <= 576px) {
  .flex {
    flex-direction: column;
  }

  .info-card {
    margin: 1em;
  }
}
</style>
