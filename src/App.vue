<template>
  <Background />

  <NavBar
    logo="/src/assets/logo.svg"
    title="Talon's Vue + Sass Template"
    :links="links"
  />

  <main>
    <div id="page-name">{{ links.find(link => link.to === $route.path).text }}</div>
    <div id="page-container">
      <RouterView />
    </div>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Background from './components/Background.vue'

const links = [
  { to: '/', text: 'Home' },
  { to: '/components', text: 'Components' },
  { to: '/about', text: 'Credits' }
]
</script>

<style lang="scss">
@import url('./assets/base.scss');

main {
  #page-name {
    position: fixed;
    top: 0;
    left: -0.125em;
    opacity: 0.025;
    z-index: -1;
    font-size: 16em;
    user-select: none;
  }

  #page-container {
    display: flex;
    justify-content: center;
  }
}

.container {
  padding: 8em 0;
  width: 75vw;
}

a[target='_blank']::after {
  content: url('./assets/external\ link.svg');
}
</style>
