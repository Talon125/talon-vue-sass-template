<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue'
import { Accordion } from '@ark-ui/vue/accordion'
</script>

<template>
  <main class="container">
    <GlassCard title="meow">
      Check out me lol hehe meow
      <Accordion.Root collapsible multiple>
        <Accordion.Item value="Gaming">
          <Accordion.ItemTrigger>
            Gaming
            <Accordion.ItemIndicator> v </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <div class="content">meow...</div>
          </Accordion.ItemContent>
        </Accordion.Item>
        <Accordion.Item value="Other">
          <Accordion.ItemTrigger>
            Other
            <Accordion.ItemIndicator> v </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <div class="content">Meow!!</div>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </GlassCard>

    <!-- <GlassCard title="Steam" class="text-center"> Meow </GlassCard>
    <GlassCard title="TETR.IO" class="text-center"> Meow </GlassCard>
    <GlassCard title="speedrun.com" class="text-center"> Meow </GlassCard>
    <GlassCard title="Notris Foes" class="text-center"> Meow </GlassCard>
    <GlassCard title="Nuketris" class="text-center"> Meow </GlassCard>
    <GlassCard title="Roblox" class="text-center"> Meow </GlassCard>
    <GlassCard title="GitHub" class="text-center"> Meow </GlassCard>
    <GlassCard title="YouTube" class="text-center"> Meow </GlassCard>
    <GlassCard title="Reddit" class="text-center"> Meow </GlassCard>
    <GlassCard title="Discord" class="text-center"> Meow </GlassCard>
    <GlassCard title="E-Mail" class="text-center"> Meow </GlassCard>
    <GlassCard title="VirusTotal" class="text-center"> Meow </GlassCard>
    <GlassCard title="TrevorSpace" class="text-center"> Meow </GlassCard>
    <GlassCard title="WinClassic" class="text-center"> Meow </GlassCard> -->
  </main>
</template>

<style lang="scss" scoped>
.content {
  padding: 1em;
}
</style>
