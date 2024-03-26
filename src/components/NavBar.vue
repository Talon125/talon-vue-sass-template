<template>
  <header>
    <div id="site-identifier">
      <img :src="logo" />
      <div id="title" v-if="title">
        {{ title }}
      </div>
    </div>
    <nav>
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        :class="{ 'nav-active': $route.path === link.to }"
      >
        <span>{{ link.text }}</span>
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  logo: { type: String },
  title: { type: String },
  links: { type: Array }
})
</script>

<style lang="scss" scoped>
@use '../assets/variables.scss' as vars;
@use '../assets/mixins.scss' as mixins;

header {
  display: flex;
  position: sticky;
  top: 0;
  transition-duration: 250ms;
  z-index: 1000;
  box-shadow: inset 0 -1px 0 hsl(0deg 0% 100% / 40%), 0 1px 0 hsl(0deg 0% 0% / 25%),
    vars.$outer-shadow;
  background: linear-gradient(
      to bottom,
      hsl(0deg 0% 100% / 10%),
      hsl(0deg 0% 100% / 25%) 50%,
      transparent 50%
    ),
    linear-gradient(to bottom, hsla(0deg 0% 100% / 75%), hsla(0deg 0% 75% / 75%));
  backdrop-filter: blur(8px);

  #site-identifier {
    display: flex;
    gap: 0.5em;
    align-items: center;
    padding: 8px 2em;

    img {
      height: 32px;
    }

    #title {
      display: flex;
      align-items: center;
      white-space: nowrap;
      font-weight: bold;

      &::after {
        display: block;
        margin-left: 2em;
        box-shadow: -1px 0 0 hsl(0deg 0% 100% / 40%);
        background: hsl(0deg 0% 0% / 10%);
        width: 1px;
        height: 2em;
        content: '';
      }
    }
  }
}

nav {
  display: flex;

  a {
    display: flex;
    align-items: center;
    transition-duration: 100ms;
    padding: 0 2em;
    height: calc(100% - 1px);
    height: 100%;
    text-decoration: none;
    text-shadow: 0 1px 0 white;
    color: black;

    &:hover {
      @include mixins.strong-text-glow(white);

      color: hsl(0deg 0% 10%);
    }

    &:active {
      opacity: 0.5;

      * {
        transform: translateY(1px);
      }
    }

    &.nav-active {
      box-shadow: inset 0 2px 16px hsl(0deg 0% 0% / 50%);
      background: hsl(0deg 0% 0% / 2.5%);
    }
  }
}
</style>
