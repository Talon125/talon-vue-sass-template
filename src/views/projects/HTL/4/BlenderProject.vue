<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
import PushButton from '@/components/PushButton.vue'
import GlassCard from '@/components/GlassCard.vue'

const PHOTO_NAMES_19 = [
  'SuzanneCloseupDonut',
  'SuzanneCloseupPlanet',
  'SuzanneDonutKiwi',
  'SuzannePlanets'
]

const PHOTO_NAMES_20 = ['Overview1', 'Overview2', 'SuzanneDonutChocolate']

function breakIntoWords(s: string): string {
  const words = replaceGermanChars(s).split(/(?=[A-Z])/)
  return words.join(' ')
}

function getCorrectPath(index: number): string {
  if (index < PHOTO_NAMES_19.length) {
    return `/img/blender/Render_20230619-${PHOTO_NAMES_19[index]}.png`
  } else {
    return `/img/blender/Render_20230620-${
      PHOTO_NAMES_20[index - PHOTO_NAMES_19.length]
    }.png`
  }
}
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'HTL-4' }" />
    <GlassCard title="3D (Blender)" :noCenter="true">
      <b>Teacher's grade: 1-2 </b>
      <p>
        Ah, the 3D modeling software. The theme was space, but at the time I
        only had a donut, so I improvised:
      </p>
      <p>
        Suzanne is taking over the universe, I guess and it seems she's turning
        planets into donuts.
      </p>
      <div class="text-center">
        <PushButton
          color="purple"
          href="/other/BlenderProject.zip"
          :stayHere="true"
        >
          Download<code>&emsp;BlenderProject.zip</code>
        </PushButton>
      </div>
    </GlassCard>
    <GlassCard> Images coming soon... </GlassCard>
  </main>
</template>

<style scoped lang="scss"></style>
