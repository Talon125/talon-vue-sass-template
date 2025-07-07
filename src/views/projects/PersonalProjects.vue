<script setup lang="ts">
import NavigationButton from '@/components/NavigationButton.vue'
import PushButton from '@/components/PushButton.vue'
import GlassCard from '@/components/GlassCard.vue'
</script>

<template>
  <main class="container">
    <NavigationButton to="/projects">
      &leftarrow;&ensp;Back to Projects
    </NavigationButton>
    <GlassCard class="info-card"> Coming soon... </GlassCard>
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
