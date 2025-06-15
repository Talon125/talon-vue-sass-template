<script setup lang="ts">
import CommandLink from '@/components/CommandLink.vue'
</script>

<template>
  <main class="container">
    <div class="command-link-area">
      <CommandLink title="School Projects" to="/projects/school">
        This is a description for the School Projects command link.
      </CommandLink>
      <CommandLink title="Personal Projects" to="/projects/personal">
        This is a description for the Personal Projects command link.
      </CommandLink>
    </div>
  </main>
</template>

<style scoped lang="scss">
.command-link-area {
  display: flex;
  flex-direction: column;

  > * {
    margin: 2em 0 0;
  }

  @media (width <= 576px) {
    > * {
      margin: 2em 1em 0;
    }
  }
}
</style>
