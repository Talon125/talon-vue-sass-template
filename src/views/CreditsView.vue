<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import GlassCard from '@/components/GlassCard.vue'

const FONT_LOCATIONS_OXYGEN = [
  '/fonts/Oxygen/OFL.txt',
  '/fonts/Oxygen/Oxygen-Regular.ttf',
  '/fonts/Oxygen/Oxygen-Light.ttf',
  '/fonts/Oxygen/Oxygen-Bold.ttf'
]
const FONT_LOCATIONS_FIRACODE = [
  '/fonts/FiraCode/ttf/FiraCode-Retina.ttf',
  '/fonts/FiraCode/ttf/FiraCode-Regular.ttf',
  '/fonts/FiraCode/ttf/FiraCode-Light.ttf',
  '/fonts/FiraCode/ttf/FiraCode-Medium.ttf',
  '/fonts/FiraCode/ttf/FiraCode-SemiBold.ttf',
  '/fonts/FiraCode/ttf/FiraCode-Bold.ttf',
  '/fonts/FiraCode/variable_ttf/FiraCode-VF.ttf',
  '/fonts/FiraCode/woff/FiraCode-VF.woff',
  '/fonts/FiraCode/woff/FiraCode-Regular.woff',
  '/fonts/FiraCode/woff/FiraCode-Light.woff',
  '/fonts/FiraCode/woff/FiraCode-Medium.woff',
  '/fonts/FiraCode/woff/FiraCode-SemiBold.woff',
  '/fonts/FiraCode/woff/FiraCode-Bold.woff',
  '/fonts/FiraCode/woff2/FiraCode-VF.woff2',
  '/fonts/FiraCode/woff2/FiraCode-Regular.woff2',
  '/fonts/FiraCode/woff2/FiraCode-Light.woff2',
  '/fonts/FiraCode/woff2/FiraCode-Medium.woff2',
  '/fonts/FiraCode/woff2/FiraCode-SemiBold.woff2',
  '/fonts/FiraCode/woff2/FiraCode-Bold.woff2',
  '/fonts/FiraCode/fira_code.css',
  '/fonts/FiraCode/README.txt',
  '/fonts/FiraCode/specimen.html'
]
const FONT_LOCATIONS_SOURCESANS3 = [
  '/fonts/SourceSans3/OFL.txt',
  '/fonts/SourceSans3/SourceSans3-VariableFont_wght.ttf '
]

const route = useRoute()

function scrollToTarget(timeout: number = 0) {
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
    }, timeout)
  }
}

onMounted(() => {
  scrollToTarget(100)
})

watch(
  () => route.fullPath,
  () => {
    scrollToTarget()
  }
)
</script>

<template>
  <div class="container">
    <GlassCard class="text-center author-box">
      <span class="symbol">🄯</span> Oktalon Szórádi 2025
      <br />
      Copyleft, except my logo. Please do not use my logo without permission.
      <br />
      Other media are
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank"
        rel="license noopener noreferrer"
        >CC BY-NC-SA 4.0<img
          style="
            margin-left: 3px;
            height: 22px !important;
            vertical-align: text-bottom;
          "
          src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
          alt="Creative Commons" /><img
          style="
            margin-left: 3px;
            height: 22px !important;
            vertical-align: text-bottom;
          "
          src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
          alt="Attribution required" /><img
          style="
            margin-left: 3px;
            height: 22px !important;
            vertical-align: text-bottom;
          "
          src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
          alt="Commercial use forbidden" /><img
          style="
            margin-left: 3px;
            height: 22px !important;
            vertical-align: text-bottom;
          "
          src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
          alt=" ShareAlike (copyleft)"
      /></a>
    </GlassCard>
    <div class="flex area-with-side-nav">
      <aside class="sticky flex">
        <div class="main-aside">
          <GlassCard class="aside-card navigation">
            <h1>Navigation</h1>
            <a
              :href="`/#${$route.path}?scrollTo=Fonts`"
              class="no-top-margin"
              @click="scrollToTarget()"
              ><b>Fonts</b></a
            >
            <ul class="nav-list">
              <li>
                <a
                  :href="`/#${$route.path}?scrollTo=Fonts-Oxygen`"
                  @click="scrollToTarget()"
                >
                  Oxygen
                </a>
              </li>
              <li>
                <a
                  :href="`/#${$route.path}?scrollTo=Fonts-SourceSans3`"
                  @click="scrollToTarget()"
                >
                  Source Sans 3
                </a>
              </li>
              <li>
                <a
                  :href="`/#${$route.path}?scrollTo=Fonts-FiraCode`"
                  @click="scrollToTarget()"
                >
                  Fira Code
                </a>
              </li>
            </ul>
            <a
              :href="`/#${$route.path}?scrollTo=ExternalLinkIcon`"
              @click="scrollToTarget()"
              ><b>External Link Icon</b></a
            >
            <a
              :href="`/#${$route.path}?scrollTo=OxygenIcons`"
              @click="scrollToTarget()"
              ><b>Oxygen Icons</b></a
            >
          </GlassCard>
        </div>
        <div class="separator"></div>
      </aside>
      <main>
        <GlassCard id="Fonts" title="Fonts">
          <h1 id="Fonts-Oxygen" class="no-top-margin">Oxygen</h1>
          <p>The main font used throughout this website</p>
          <ul>
            <li>
              <a
                href="https://fonts.google.com/specimen/Oxygen"
                target="_blank"
              >
                https://fonts.google.com/specimen/Oxygen
              </a>
            </li>
            <li v-for="(str, i) of FONT_LOCATIONS_OXYGEN" :key="i">
              <a :href="str"> {{ str }} </a>
            </li>
          </ul>
          <h1 id="Fonts-SourceSans3">Source Sans 3</h1>
          <p>Used for some symbols, like</p>
          <table>
            <tbody>
              <tr class="divider-row">
                <td colspan="100%"><hr /></td>
              </tr>
              <tr>
                <td><span class="symbol">🄯</span></td>
                <td><code>COPYLEFT SYMBOL</code></td>
                <td><code>U+1F12F</code></td>
              </tr>
              <tr class="divider-row">
                <td colspan="100%"><hr /></td>
              </tr>
              <tr>
                <td><span class="symbol">♂</span></td>
                <td>
                  <code>MALE SIGN {Mars; alchemical symbol for iron}</code>
                </td>
                <td>
                  <code>U+2642</code>
                </td>
              </tr>
              <tr class="divider-row">
                <td colspan="100%"><hr /></td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              <a
                href="https://fonts.google.com/specimen/Source+Sans+3"
                target="_blank"
              >
                https://fonts.google.com/specimen/Source+Sans+3
              </a>
            </li>
            <li v-for="(str, i) of FONT_LOCATIONS_SOURCESANS3" :key="i">
              <a :href="str"> {{ str }} </a>
            </li>
          </ul>
          <h1 id="Fonts-FiraCode">Fira Code</h1>
          <p>
            Monospace font used in some places, like for clipboard elements in
            Connections or date/time in Home
          </p>
          <ul>
            <li>
              <a href="https://github.com/tonsky/FiraCode" target="_blank">
                https://github.com/tonsky/FiraCode
              </a>
            </li>
            <li>
              License from the GitHub repository:
              <a href="/fonts/FiraCode/LICENSE.txt">
                /fonts/FiraCode/LICENSE.txt
              </a>
            </li>
            <li v-for="(str, i) of FONT_LOCATIONS_FIRACODE" :key="i">
              <a :href="str"> {{ str }} </a>
            </li>
          </ul>
        </GlassCard>
        <GlassCard id="ExternalLinkIcon" title="External Link Icon" noCenter>
          from Wikipedia<br />
          To indicate links with a target of "_blank" (open in new tab).
          Modified to have the color
          <code class="color-code-98a1e5">#98A1E5</code>.<br />
          <a
            href="https://en.wikipedia.org/w/skins/Vector/resources/skins.vector.styles/images/link-external-small-ltr-progressive.svg"
            target="_blank"
          >
            https://en.wikipedia.org/w/skins/Vector/resources/skins.vector.styles/images/link-external-small-ltr-progressive.svg
          </a>
        </GlassCard>
        <GlassCard id="OxygenIcons" title="Oxygen Icons" noCenter>
          Some of the icons I use are from here:<br />
          <a href="https://github.com/KDE/oxygen-icons" target="_blank">
            https://github.com/KDE/oxygen-icons
          </a>
        </GlassCard>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color-code-98a1e5 {
  color: #98a1e5;
  font-size: 1rem;
}

.top-margin {
  margin-top: 2em;
}

.flex {
  gap: 1em;
}

.area-with-side-nav {
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

h1 {
  margin: 1em 0 0.5em;
  color: hsl(0deg 0% 100% / 75%);

  &::after {
    display: block;
    margin-top: 0.1em;
    box-shadow: 0 0 2px hsl(0deg 0% 0% / 75%);
    background: linear-gradient(
      to right,
      hsl(0deg 0% 100% / 50%),
      hsl(0deg 0% 100% / 5%)
    );
    width: 100%;
    height: 1px;
    content: '';
  }
}

.navigation {
  display: flex;
  flex-direction: column;

  h1 {
    margin: -0.67em 0 0;
    text-align: center;
    text-shadow: none;
    color: hsl(0deg 0% 100% / 25%);
    font-size: 2.5em;
    font-weight: lighter;

    &::after {
      display: none;
    }
  }

  a {
    margin-top: 0.5em;
    text-decoration: none;
    text-decoration-color: hsl(0deg 0% 100% / 45%);
    color: hsl(0deg 0% 100% / 90%);

    &:hover {
      text-decoration: underline;
    }
  }

  .nav-list {
    /* margin: 0 0 0.5em; */
    margin: 0;
    padding-left: 1em;
    list-style: none;

    li {
      margin: 0.25em 0;
    }
  }
}

td {
  padding: 0 0.5em;
  vertical-align: top;
}

.divider-row {
  hr {
    opacity: 0.25;
    margin: 0 0 0.333em;
  }
}

.separator {
  margin-top: 2em;
  background: linear-gradient(
    to bottom,
    transparent,
    hsl(0deg 0% 100% / 50%),
    hsl(0deg 0% 100% / 50%),
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
      hsl(0deg 0% 0% / 25%),
      hsl(0deg 0% 0% / 25%),
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

@media (width <= 768px) {
  .flex {
    gap: 0;
  }
  
  .area-with-side-nav {
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

  .separator {
    display: none;
  }
}
</style>
