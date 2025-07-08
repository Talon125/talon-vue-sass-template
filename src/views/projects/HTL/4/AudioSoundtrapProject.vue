<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import AudioHandler from '@/components/AudioHandler.vue'
import GlassCard from '@/components/GlassCard.vue'
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'HTL-4' }" />
    <GlassCard title="Audio Soundtrap" :noCenter="true">
      <h1 class="year-marker">
        HTL 4th Grade (Cumulative: 12) | School year 2022/2023
      </h1>
      <p><b>Teacher's grade: 10/10</b></p>
      <p>
        We learned <i>some</i> music basics, like making simple chords. I think
        the others tried to recreate or transcribe some song, but I decided to
        make something original. My first music! I think they're okay, but not
        great.
      </p>
      <div class="audio-section">
        <AudioHandler
          src="/audio/Szoradi_MEDT_2023-05-05_Fight-Against-The-Catastrophe.wav"
        />
      </div>
    </GlassCard>
  </main>
</template>
