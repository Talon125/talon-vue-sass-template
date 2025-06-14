<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue'
import LoadingCircle from '@/components/LoadingCircle.vue'
import PushButton from '@/components/PushButton.vue'
import { REPOSITORY_LINK, MY_BIRTHDAY } from '@/assets/constants'
import { getAge, isToday } from '@/assets/util'
import { ref, onMounted } from 'vue'
import { useBranchLastUpdatedStore } from '@/stores/talonStore'

const myAge = getAge(MY_BIRTHDAY)

const time = ref('')

const meow = useBranchLastUpdatedStore()
meow.fetchLastUpdated()

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

function updateTime(): void {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Europe/Vienna',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }
  time.value = new Date().toLocaleTimeString('de-AT', options)
}

onMounted(() => {
  updateTime()

  if (prefersReducedMotion) {
    setInterval(updateTime, 60000)
  } else {
    setInterval(updateTime, 1000)
  }
})
</script>

<template>
  <main class="container">
    <GlassCard
      v-if="isToday(MY_BIRTHDAY)"
      :title="`${myAge - 1} → ${myAge}`"
      birthday
      class="text-center"
    >
      <span class="emoji">🎂</span>
      Today is my birthday!
      <span class="emoji">🎂</span>
    </GlassCard>

    <GlassCard title="Hello, World!">
      <div class="text-center">Welcome to my homepage!</div>
      <p>
        On this website you can find out more about me, my projects, see where
        else I'm at, and anything else I felt like putting here&nbsp;&nbsp;:3
      </p>
      This website was made using the
      <a href="https://vuejs.org/" target="_blank">Vue.js</a>
      framework. All the styling is written by me in
      <a href="https://sass-lang.com/" target="_blank">Sass</a>. I'm also using
      <a href="https://ark-ui.com/" target="_blank">Ark UI</a>
      for some components.
      <div class="text-center">
        <PushButton :href="REPOSITORY_LINK" defaultButton>GitHub Repository</PushButton>
      </div>
    </GlassCard>

    <div class="flex intro-flex">
      <img src="/images/Coins_FrameAero_MLM_Large.png" />
      <GlassCard title="About Me" nocenter>
        Talon, {{ myAge }}, ♂ (he/him)
        <p>
          Born in Florida, but live in Austria<br />
          Time for me right now: <code class="time">{{ time }}</code>
          <span v-if="prefersReducedMotion" class="btw">
            (Only updated every minute to reduce motion)
          </span>
        </p>
        I know a bit
        <abbr title="Object-Oriented Programming">OOP</abbr>, fullstack
        development, and some
        <abbr title="Structured Query Language (for databases)">SQL</abbr>.
        <p>Some stuff I like:</p>
        <ul>
          <li>IT (Computers, OSes, programming)</li>
          <li>FOSS, Copyleft</li>
          <li>
            Companies like
            <a href="https://frame.work/" target="_blank"> Framework </a>
            and
            <a href="https://www.fairphone.com/" target="_blank">Fairphone</a>
          </li>
          <li>Skeuomorphism, "Frutiger Aero"</li>
          <li>
            MIDI-driven animation, like ANIMUSIC and
            <a
              href="https://www.youtube.com/@LasersLightsandMusic"
              target="_blank"
            >
              Lasers, Lights, and Music
            </a>
          </li>
          <li>Falling block puzzles, like Tetris (I'm pretty good at it)</li>
        </ul>
      </GlassCard>
    </div>

    <GlassCard title="Fun Facts">
      The profile picture I use basically everywhere is of three €0.50 coins
      stacked on top of each other. I shot it on my first phone, the Samsung
      Galaxy A5 (2017), on 17 April 2018 at 15:23. It took me quite a while to
      stack them, but it was well worth it&nbsp;&nbsp;:3
      <br /><br />
      Have you noticed the gradient in the background and my logo? I didn't
      choose those colors at random. If you know what they mean and are
      supportive, then you're cool~
    </GlassCard>

    <GlassCard clear class="text-center">
      Site last updated on:<br />
      <code class="time">
        {{ meow.lastUpdated?.split('T')[0] ?? '?' }}
      </code>
      <LoadingCircle v-if="meow.loading" :size="32" />
      <!-- {{ meow.lastUpdated?.split('T')[1] }} -->
    </GlassCard>
  </main>
</template>

<style lang="scss" scoped>
.emoji {
  /* text-shadow: none; */
  text-shadow: 0 2px 2px hsl(0deg 0% 0% / 15%);
  font-size: 2em;
}

.btw {
  font-size: 0.8em;
}

.intro-flex {
  align-items: start;
  justify-content: center;
  margin-top: 2em;

  img {
    margin-right: 2em;
    height: 205.8px;
  }

  div {
    margin: 0;
    /* width: 100%; */
  }

  @media (width <= 576px) {
    flex-direction: column;
    align-items: center;
    margin: 2em 1em 0;

    img {
      margin: 2em;
    }
  }
}

.time {
  font-size: 1rem;
}
</style>
