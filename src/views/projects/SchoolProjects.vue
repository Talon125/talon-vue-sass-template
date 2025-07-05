<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import NavigationButton1 from '@/components/NavigationButton1.vue'
import AccordionSingle from '@/components/AccordionSingle.vue'
import ProjectLink from '@/components/ProjectLink.vue'
import PushButton from '@/components/PushButton.vue'
import GlassCard from '@/components/GlassCard.vue'

const SCHOOL_GRADES = [
  'Very Good',
  'Good',
  'Satisfactory',
  'Enough',
  'Not Enough'
]

const SCHOOLS = [
  // 'Pre-School*',
  'Kindergarten',
  'Elementary School 1st grade',
  'Elementary School 2nd grade',
  'Elementary School 3rd grade',
  'Elementary School 4th grade',
  'Middle School 1st grade',
  'Middle School 2nd grade',
  'Middle School 3rd grade',
  'Middle School 4th grade',
  'Höhere Technische Lehranstalt 1st grade',
  'Höhere Technische Lehranstalt 2nd grade',
  'Höhere Technische Lehranstalt 3rd grade',
  'Höhere Technische Lehranstalt 4th grade',
  'Höhere Technische Lehranstalt 5th grade'
  // "Fachhochschule (Bachelor's Study) Year 1",
  // "Fachhochschule (Bachelor's Study) Year 2",
  // "Fachhochschule (Bachelor's Study) Year 3",
]

const route = useRoute()

function scrollToTarget() {
  const scrollToId = route.query.scrollTo as string | undefined
  if (scrollToId) {
    setTimeout(() => {
      const element = document.getElementById(scrollToId)
      if (element) {
        // Optional: adjust for sticky navbar
        const navbar = document.querySelector('header') as HTMLElement | null
        const navbarHeight = navbar?.offsetHeight ?? 0
        const y =
          element.getBoundingClientRect().top + window.scrollY - navbarHeight
        window.scrollTo({ top: y, behavior: 'smooth' })
        // window.scrollTo({ top: y })
      }
    }, 0)
  }
}

onMounted(scrollToTarget)

watch(
  () => route.fullPath,
  () => {
    scrollToTarget()
  }
)
</script>

<template>
  <div class="container flex">
    <aside class="sticky flex">
      <div class="main-aside">
        <NavigationButton1 to="/projects">
          &leftarrow;&ensp;Back to Projects
        </NavigationButton1>
        <GlassCard class="aside-card navigation">
          <h1>Navigation</h1>
          <a :href="`/#${$route.path}?scrollTo=HTL`"><b>HTL Wien West</b></a>
          <ul class="nav-list">
            <li>
              <a :href="`/#${$route.path}?scrollTo=HTL-3`">
                3rd Grade (Cumulative: 11)
              </a>
            </li>
            <li>
              <a :href="`/#${$route.path}?scrollTo=HTL-4`">
                4th Grade (Cumulative: 12)
              </a>
            </li>
            <!--
              <li>
                <a :href="`/#${$route.path}?scrollTo=HTL-5`">
                  5th Grade (Cumulative: 13)
                </a>
              </li>
              -->
          </ul>
          <!--
            <a :href="`/#${$route.path}?scrollTo=FH`"><b>FH Campus Wien</b></a>
            <ul class="nav-list">
              <li>
                <a :href="`/#${$route.path}?scrollTo=FH-1`"> Year 1 </a>
              </li>
              <li>
                <a :href="`/#${$route.path}?scrollTo=FH-2`"> Year 2 </a>
              </li>
              <li>
                <a :href="`/#${$route.path}?scrollTo=FH-3`"> Year 3 </a>
              </li>
            </ul>
            -->
        </GlassCard>
        <GlassCard class="reference-card aside-card">
          <h1>Reference</h1>
          <AccordionSingle title="Austrian grading system:" :open="true">
            <table class="indent small-text">
              <tbody>
                <tr v-for="(name, i) of SCHOOL_GRADES" :key="i">
                  <td class="text-center">{{ i + 1 }}</td>
                  <td>=</td>
                  <td>{{ name }}</td>
                </tr>
              </tbody>
            </table>
          </AccordionSingle>
          <hr />
          <AccordionSingle title="Cumulative grade:">
            <table class="indent small-text">
              <tbody>
                <tr v-for="(name, i) of SCHOOLS" :key="i">
                  <td>Grade</td>
                  <td class="text-center">{{ i }}:</td>
                  <td>{{ name }}</td>
                </tr>
              </tbody>
            </table>
          </AccordionSingle>
        </GlassCard>
      </div>
      <div class="separator"></div>
    </aside>
    <main>
      <GlassCard class="main-card">
        <h1 id="HTL" class="first-heading">HTL Wien West</h1>
        <h2 id="HTL-3">3rd Grade (Cumulative: 11)</h2>
        <p class="opening-p text-justify">
          We started learning a bit of JavaScript and were tasked with
          programming a match-the-pairs memory game and a
          <i>Cookie Clicker</i>-like game. My JavaScript and overall web
          development skills at the time were quite... not good. Nevertheless,
          I'll keep them here as an exhibit.
        </p>
        <p>
          <img class="inline-icon" src="/icons/dialog-warning.svg" />
          <b class="amber">Caution:</b> Memory Game and Cookie Clicker Pro were
          only tested to work on 1080p desktop screens (and at 100% scaling. No
          mobile support).
        </p>
        <div class="flex">
          <ProjectLink
            title="Memory Game"
            icon_src="/images/thumbnails/Thumbnail_MemoryGame-1080p.png"
          >
            <p class="text-justify">
              Match the pairs of numbers by flipping over the right cards. There
              are 3 levels, each with increasingly more cards.
            </p>
            <div class="text-center">
              <PushButton
                color="green"
                :stay-here="true"
                href="/non-vue/memory-game/index.html"
              >
                Play
              </PushButton>
            </div>
          </ProjectLink>
          <ProjectLink
            title="Cookie Clicker Pro"
            icon_src="/images/thumbnails/Thumbnail_CookieClickerPro-1080p.png"
          >
            <p class="text-justify">
              Click the cookie as many times as you can within 15 seconds. Each
              click moves the cookie to a new random position.
            </p>
            <div class="text-center">
              <PushButton
                color="green"
                :stayHere="true"
                href="/non-vue/cookie-clicker-pro/index.html"
              >
                Play
              </PushButton>
            </div>
          </ProjectLink>
        </div>
        <h2 id="HTL-4">4th Grade (Cumulative: 12)</h2>
        <p>Meow...</p>
        <p>Meow...</p>
        <p>Meow...</p>
        <p>Meow...</p>
        <p>Meow...</p>
        <p>Meow...</p>
        <p>Meow...</p>
        <p>Meow...</p>
        <p>Meow...</p>
        <p>Meow...</p>
        <!--
        <h2 id="HTL-5">5th Grade (Cumulative: 13)</h2>

        <hr />

        <h1 id="FH">FH Campus Wien</h1>
        <h2 id="FH-1">Year 1</h2>
        <h2 id="FH-2">Year 2</h2>
        <h2 id="FH-3">Year 3</h2>
        -->
      </GlassCard>
    </main>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables.scss' as vars;
@use '@/assets/mixins.scss' as mixins;

.flex {
  gap: 1em;

  aside {
    flex-basis: 33.333em;

    .main-aside {
      flex: 1;
    }
  }

  main {
    width: 100%;
  }
}

.sticky {
  position: sticky;
  top: calc(64px + 24px);
  align-self: start;
}

.navigation {
  a {
    text-decoration: none;
    text-decoration-color: hsla(0deg 0% 100% / 45%);
    color: hsla(0deg 0% 100% / 90%);

    &:hover {
      text-decoration: underline;
    }
  }
}

.inception {
  padding: 0 0.5em 1px;
}

.content {
  padding: 0.5em;
}

.amber {
  color: orange;
}

.first-heading,
.opening-p {
  margin-top: 0;
}

.aside-card {
  margin: 1em 0;
}

.navigation,
.reference-card {
  h1 {
    margin: -0.67em 0 0;
    text-align: center;
    text-shadow: none;
    color: hsla(0deg 0% 100% / 25%);
    font-size: 2.5em;
    font-weight: lighter;
  }
}

.main-card,
.info-card {
  margin: 1em 0;

  h1 {
    border-radius: 2px;
    box-shadow: inset 0 0 0 1px hsl(0deg 0% 100% / 25%),
      0 0 0 1px hsl(0deg 0% 0% / 50%);
    background: vars.$reflection-soft,
      radial-gradient(
        ellipse 100% 33% at bottom,
        hsl(0deg 0% 100% / 10%),
        transparent
      ),
      radial-gradient(
        ellipse at bottom left,
        transparent 75%,
        hsl(0deg 0% 100% / 15%)
      ),
      radial-gradient(
        ellipse at bottom right,
        transparent 75%,
        hsl(0deg 0% 100% / 15%)
      ),
      linear-gradient(
        to bottom,
        hsl(0deg 0% 100% / 2.5%),
        hsl(0deg 0% 100% / 5%) 49%,
        transparent 51%
      ),
      linear-gradient(
        to bottom,
        hsl(0deg 0% 0% / 20%),
        hsl(0deg 0% 0% / 40%),
        hsl(0deg 0% 0% / 30%)
      );
    text-align: center;
    color: hsla(0deg 0% 100% / 50%);
    scroll-margin-top: calc(64px + 24px);
  }

  h2,
  h3 {
    scroll-margin-top: calc(64px + 24px);
    margin: 1em 0 0.5em;
    color: hsla(0deg 0% 100% / 75%);

    &::after {
      display: block;
      margin-top: 0.1em;
      box-shadow: 0 0 2px hsla(0deg 0% 0% / 75%);
      background: linear-gradient(
        to right,
        hsla(0deg 0% 100% / 50%),
        hsla(0deg 0% 100% / 5%)
      );
      width: 100%;
      height: 1px;
      content: '';
    }
  }
}

.nav-list,
.ref-list {
  margin: 0.5em 0 1em;
  padding-left: 1em;
  list-style: none;

  li {
    margin: 0.25em 0;
  }
}

.indent {
  margin-left: 0.333em;
}

.small-text {
  font-size: 0.75rem;
}

.separator {
  background: linear-gradient(
    to bottom,
    transparent,
    hsla(0deg 0% 100% / 50%),
    hsla(0deg 0% 100% / 50%),
    transparent
  );
  width: 1px;
  white-space: nowrap;

  &::before,
  &::after {
    display: inline-block;
    position: relative;
    top: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      hsla(0deg 0% 0% / 25%),
      hsla(0deg 0% 0% / 25%),
      transparent
    );
    width: 1px;
    height: 100%;
    content: '';
  }

  &::before {
    left: -1px;
  }
}

@media (width <= 576px) {
  .flex {
    flex-direction: column;

    aside {
      display: block;
      flex-basis: auto;
      width: 100%;

      a {
        margin-left: 0;
      }
    }
  }

  .sticky {
    position: static;
  }

  .main-aside {
    display: block;
    padding: 0 1em;
  }

  .separator {
    display: none;
  }

  .main-card {
    margin: 0 1em;
  }
}
</style>
