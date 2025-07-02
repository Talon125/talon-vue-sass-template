<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue'
import { Accordion } from '@ark-ui/vue/accordion'
</script>

<template>
  <main class="container">
    <div class="mrow">
      <GlassCard class="text-center miau"> Coming soon... </GlassCard>
    </div>
    <Accordion.Root collapsible multiple>
      <Accordion.Item value="Gaming">
        <Accordion.ItemTrigger>
          Gaming
          <Accordion.ItemIndicator> ʌ </Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <div class="content">meow...</div>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="Other">
        <Accordion.ItemTrigger>
          Other
          <Accordion.ItemIndicator> ʌ </Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <div class="content">Meow!!</div>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
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

.content {
  padding: 1em;
}
</style>
