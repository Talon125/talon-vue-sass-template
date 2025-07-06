<script setup lang="ts">
import NavigationButtons from '@/components/NavigationButtons.vue'
// import PushButton from '@/components/PushButton.vue'
import GlassCard from '@/components/GlassCard.vue'

const PHOTO_NAMES = [
  'Becken',
  'BeckenLinks',
  'BeckenRechts',
  'Ente',
  'Enten',
  'FontaeneBaeume',
  'FontaeneBaeumeDunkel',
  'FontaeneBaeumeLang',
  'FontaeneBaeumeLinsenreflexion',
  'FontaeneGras',
  'FontaenePlatscherBlume',
  'FontaenePlatscherEnte',
  'FontaenePlatscherLang',
  'FontaenePlatscherLangEnte',
  'FontaenePlatscherZiegel',
  'FontaenenEingang',
  'FontaenenUebersicht',
  'Papagenobrunnen',
  'PapagenobrunnenLang',
  'PapagenobrunnenMuschelschaleChaos',
  'PapagenobrunnenMuschelschaleFluss',
  'PapagenobrunnenMuschelschaleKurve',
  'SteinFlussKurz',
  'SteinFlussLang',
  'WasserEingefrohren',
  'WasserEingefrohrenKlar',
  'WasserEingefrohrenKuehl',
  'WasserEingefrohrenNiedrig',
  'WasserEingefrohrenWiese',
  'WasserNebel'
]

function replaceGermanChars(s: string): string {
  return s.replace(/ae/gi, 'ä').replace(/oe/gi, 'ö').replace(/ue/gi, 'ü')
}

function breakIntoWords(s: string): string {
  const words = replaceGermanChars(s).split(/(?=[A-Z])/)
  return words.join(' ')
}
</script>

<template>
  <main class="container">
    <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'HTL-4' }" />
    <GlassCard title="Kurpark Oberlaa" :noCenter="true">
      <b>Teacher's grade: 1.2 </b>
      <p>
        I actually took a total of 108 photos! But here are the best 30 (edited,
        not raw) With a borrowed <b>Nikon D300S</b>, I was at this park for
        around 4 hours.
      </p>
      <b>By the way:</b> The names of the photos are in German.
    </GlassCard>
    <GlassCard> Images coming soon... </GlassCard>
  </main>
</template>

<style scoped lang="scss"></style>
