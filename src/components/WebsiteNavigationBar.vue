<template>
  <header>
    <nav>
      <div class="container">
        <a href="/" id="brand">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
          <span>Vue</span>
          <!-- <span>Vue Website (Title goes here!)</span> -->
        </a>
        <div class="separator"></div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/page2">Page 2</RouterLink>
        <!-- <a class="submenu">Sub-Menu</a> -->
        <RouterLink to="/about">About</RouterLink>
      </div>
    </nav>
    <div class="websitewide-message">!!! Under Construction !!!</div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
@use '@/assets/variables.scss' as vars;

$navbar-height: 48px;

header {
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: column-reverse;
  align-items: center;
  box-shadow: 0 1px 8px hsla(0deg 0% 0% / 50%);
  background: vars.$reflection-weak, vars.$gradient-nav;
  backdrop-filter: blur(8px);
  width: 100%;
  height: $navbar-height;

  .websitewide-message {
    display: flex;
    align-items: center;
    height: 100%;
    color: hsla(0deg 100% 50% / 75%);
    font-family: monospace;
    font-size: 0.8rem;
    font-weight: bold;
  }
}

nav {
  box-shadow: 0 1px hsla(0deg 0% 50% / 100%), 0 -1px hsla(0deg 0% 50% / 100%),
    inset 0 1px hsla(0deg 0% 100% / 50%), inset 0 -1px hsla(0deg 0% 100% / 25%);
  background: vars.$reflection-weak, vars.$gradient-nav;
  width: 100%;

  .container {
    display: flex;
    /* justify-content: center; */
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    min-width: 128px;
    min-height: calc($navbar-height / 2);
    text-decoration: none;
    text-shadow: vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 15%);
    color: hsl(0deg 0% 15%);

    &:hover {
      background: linear-gradient(
        to right,
        hsla(0deg 0% 100% / 15%),
        hsla(0deg 0% 100% / 25%),
        hsla(0deg 0% 100% / 15%)
      );
      text-shadow: 0 0 4px hsl(0deg 0% 100% / 100%);
    }

    &:active {
      background: linear-gradient(
        to right,
        hsla(0deg 0% 0% / 50%),
        hsla(0deg 0% 0% / 15%),
        hsla(0deg 0% 0% / 15%),
        hsla(0deg 0% 0% / 50%)
      );
      text-shadow: vars.$textshadow-dimensions-nav hsla(0deg 0% 100% / 25%);
      color: hsla(0deg 0% 15% / 50%);
    }

    &.router-link-active {
      background: linear-gradient(
        to right,
        hsla(0deg 0% 0% / 33%),
        hsla(0deg 0% 0% / 10%),
        hsla(0deg 0% 0% / 10%),
        hsla(0deg 0% 0% / 33%)
      );
      text-shadow: 0 1px 2px hsla(0deg 0% 0% / 50%),
        vars.$textshadow-dimensions-nav hsla(0deg 0% 0% / 50%);
      color: hsl(0deg 0% 95%);
      font-weight: bold;

      &:hover {
        background: linear-gradient(
          to right,
          hsla(0deg 0% 0% / 25%),
          hsla(0deg 0% 0% / 5%) 25%,
          hsla(0deg 0% 0% / 5%) 75%,
          hsla(0deg 0% 0% / 25%)
        );
        text-shadow: 0 1px 2px hsla(0deg 0% 0% / 100%),
          vars.$textshadow-dimensions-nav hsla(0deg 0% 0% / 25%),
          0 1px 2px hsla(0deg 0% 100% / 100%),
          0 1px 4px hsla(0deg 0% 100% / 100%),
          0 1px 6px hsla(0deg 0% 100% / 100%),
          0 1px 8px hsla(0deg 0% 100% / 100%);
      }

      &:active {
        background: linear-gradient(
          to right,
          hsla(0deg 0% 0% / 50%),
          hsla(0deg 0% 0% / 15%),
          hsla(0deg 0% 0% / 15%),
          hsla(0deg 0% 0% / 50%)
        );
        text-shadow: vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 25%);
        color: hsla(0deg 0% 95% / 75%);
      }
    }
  }
}

#brand {
  justify-content: start;
  padding-right: 32px;
  min-width: 0;

  &:hover {
    background: none;
    text-shadow: 0 0 4px hsl(0deg 0% 100% / 100%);
  }

  &:active {
    background: none;
    text-shadow: vars.$textshadow-dimensions-nav hsl(0deg 0% 100% / 25%);
    color: hsla(0deg 0% 15% / 50%);
  }

  img {
    /* padding: 8px 8px 8px 0; */
    padding-right: 8px;
    height: 22px;
  }
}

.separator {
  box-shadow: -1px 0 hsla(0deg 0% 100% / 33%), 1px 0 hsla(0deg 0% 100% / 33%);
  background: hsla(0deg 0% 50% / 100%);
  width: 1px;
}
</style>
