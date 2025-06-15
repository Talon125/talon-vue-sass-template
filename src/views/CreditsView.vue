<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue'
</script>

<template>
  <main class="container">
    <GlassCard class="text-center">
      <span class="copyleft">🄯</span> Oktalon Szórádi 2025
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
    <GlassCard title="Fonts">
      <h1 style="margin-top: 0;">Oxygen</h1>
      The name of the font used throughout this website
      <ul>
        <li>
          <a
            href="https://fonts.google.com/specimen/Oxygen/about"
            target="_blank"
          >
            https://fonts.google.com/specimen/Oxygen/about
          </a>
        </li>
        <li>
          <a href="/fonts/Oxygen/OFL.txt"> /fonts/Oxygen/OFL.txt </a>
        </li>
        <li>
          <a href="/fonts/Oxygen/Oxygen-Regular.ttf">
            /fonts/Oxygen/Oxygen-Regular.ttf
          </a>
        </li>
        <li>
          <a href="/fonts/Oxygen/Oxygen-Light.ttf">
            /fonts/Oxygen/Oxygen-Light.ttf
          </a>
        </li>
        <li>
          <a href="/fonts/Oxygen/Oxygen-Bold.ttf">
            /fonts/Oxygen/Oxygen-Bold.ttf
          </a>
        </li>
      </ul>
      <h1>Source Sans 3</h1>
      The name of the font used for the copyleft symbol on this page
      <ul>
        <li>
          <a
            href="https://fonts.google.com/specimen/Source+Sans+3"
            target="_blank"
          >
            https://fonts.google.com/specimen/Source+Sans+3
          </a>
        </li>
        <li>
          <a href="/fonts/SourceSans3/OFL.txt"> /fonts/SourceSans3/OFL.txt </a>
        </li>
        <li>
          <a href="/fonts/SourceSans3/SourceSans3-VariableFont_wght.ttf">
            /fonts/SourceSans3/SourceSans3-VariableFont_wght.ttf
          </a>
        </li>
      </ul>
    </GlassCard>
    <GlassCard title="External Link Icon" nocenter>
      from Wikipedia<br />
      To indicate links with a target of "_blank" (open in new tab). Modified to
      have the color
      <code class="color-code-98a1e5">#98A1E5</code>.<br />
      <a
        href="https://en.wikipedia.org/w/skins/Vector/resources/skins.vector.styles/images/link-external-small-ltr-progressive.svg"
        target="_blank"
      >
        https://en.wikipedia.org/w/skins/Vector/resources/skins.vector.styles/images/link-external-small-ltr-progressive.svg
      </a>
    </GlassCard>
  </main>
</template>

<style lang="scss" scoped>
.color-code-98a1e5 {
  color: #98a1e5;
  font-size: 1rem;
}

@font-face {
  font-family: 'Source Sans 3';
  src: url('/fonts/SourceSans3/SourceSans3-VariableFont_wght.ttf');
}

.copyleft {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 1.15em;
}
</style>
