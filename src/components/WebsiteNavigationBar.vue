<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onMounted, onBeforeUnmount, ref } from 'vue'

const showTouchMenu = ref(false)
// const currentWindowWidth = ref(0)

const resizeHandler = () => {
  // currentWindowWidth.value = window.innerWidth
  if (window.innerWidth >= 992) {
    showTouchMenu.value = false
  }
}

onMounted(() => {
  resizeHandler()
  window.addEventListener('resize', resizeHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
})
</script>

<template>
  <header>
    <nav :class="showTouchMenu ? 'nav-adjust' : ''">
      <div class="container">
        <div class="nav-other">
          <a
            href="/"
            class="brand"
            :class="showTouchMenu ? 'brand-adjust' : ''"
          ></a>
          <div class="separator"></div>
          <a class="menu-button" @click="showTouchMenu = !showTouchMenu">≡</a>
        </div>
        <div class="nav-links">
          <ul :class="showTouchMenu ? '' : 'touch-hidden'">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/projects">Projects</RouterLink></li>
            <li><RouterLink to="/connections">Connections</RouterLink></li>
            <li><RouterLink to="/legal">Legal</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <div class="websitewide-message">Website-wide Banner Message</div> -->
    <!-- <div class="websitewide-message severe">!!! Something is broken !!!</div> -->
    <div class="websitewide-message major">!!! Under Construction !!!</div>
    <!-- <div class="websitewide-message minor">!!! will undergo maintenance on !!!</div> -->
  </header>
</template>

<style scoped lang="scss">
@use '@/assets/variables.scss' as vars;
@use '@/assets/mixins.scss' as mixins;

$navbar-height: 64px;
$gradient-nav: linear-gradient(
    to right,
    hsla(0deg 0% 0% / 50%),
    hsla(0deg 0% 0% / 0%),
    hsla(0deg 0% 0% / 50%)
  ),
  linear-gradient(
    to bottom,
    hsla(0deg 0% 0% / 80%),
    hsla(0deg 0% 0% / 70%),
    hsla(0deg 0% 0% / 90%)
  );

header {
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 16px hsla(0deg 0% 0% / 50%);
  backdrop-filter: blur(8px);
  width: 100%;
  min-height: $navbar-height;

  .websitewide-message {
    box-shadow: 0 1px hsla(0deg 0% 0% / 75%),
      inset 0 -1px hsla(0deg 0% 100% / 50%), inset 0 1px hsla(0deg 0% 0% / 75%);
    background: vars.$reflection-minor,
      linear-gradient(
        to bottom,
        hsla(0deg 0% 55% / 75%),
        hsla(0deg 0% 20% / 75%),
        hsla(0deg 0% 30% / 75%)
      );
    padding: 4px 0;
    width: 100%;
    height: 100%;
    text-align: center;
    text-shadow: vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 50%);
    color: hsl(0deg 0% 85%);
    font-family: monospace;
    font-size: 0.8rem;
    font-weight: bold;

    &.minor {
      @include mixins.glossy-color-gradient(
        45deg,
        vars.$reflection-minor,
        vars.$stripes
      );
    }

    &.major {
      @include mixins.glossy-color-gradient(
        25deg,
        vars.$reflection-minor,
        vars.$stripes
      );
    }

    &.severe {
      @include mixins.glossy-color-gradient(
        0deg,
        vars.$reflection-minor,
        vars.$stripes
      );
    }
  }
}

nav {
  box-shadow: 0 1px hsla(0deg 0% 0% / 75%),
    inset 0 -1px hsla(0deg 0% 100% / 50%);
  background: vars.$reflection-weak,
    linear-gradient(
      to right,
      hsla(0deg 0% 0% / 50%),
      hsla(0deg 0% 0% / 0%),
      hsla(0deg 0% 0% / 50%)
    ),
    linear-gradient(
      to bottom,
      hsla(0deg 0% 0% / 80%),
      hsla(0deg 0% 0% / 70%),
      hsla(0deg 0% 0% / 90%)
    );
  width: 100%;

  .container,
  .nav-other {
    display: flex;
    /* justify-content: center; */
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0 32px;
    min-width: 64px;
    min-height: $navbar-height;
    text-decoration: none;
    text-shadow: vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 50%);
    white-space: nowrap;
    color: hsl(0deg 0% 75%);
    user-select: none;

    &:hover {
      text-shadow: vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 50%),
        0 0 8px hsl(0deg 0% 100% / 75%);
      color: hsl(0deg 0% 85%);
    }

    &:active {
      text-shadow: vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 50%),
        0 0 8px hsl(0deg 0% 0% / 10%);
      color: hsl(0deg 0% 45%);
    }

    &.router-link-active {
      background: linear-gradient(
          to right,
          transparent 40%,
          hsla(0deg 0% 100% / 7.5%),
          transparent 60%
        ),
        linear-gradient(
          to right,
          transparent 37.5%,
          hsla(0deg 0% 100% / 7.5%),
          transparent 62.5%
        ),
        radial-gradient(
          ellipse at top,
          hsl(0deg 0% 100% / 40%),
          transparent 7.5%
        ),
        radial-gradient(
          ellipse at bottom,
          hsl(0deg 0% 100% / 75%),
          transparent 7.5%
        );
      background-position: 50% 0%;
      background-size: 350% 100%;
      text-shadow: vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 50%),
        0 0 8px hsl(0deg 0% 100% / 75%);
      color: hsl(0deg 0% 85%);
    }
  }

  .menu-button {
    display: none;
    padding-right: 0;
    font-size: 2.6em;
  }

  @media (width <= 992px) {
    .touch-hidden {
      display: none;
    }

    .menu-button {
      display: flex;
      align-items: baseline;
    }

    .separator {
      display: none;
    }

    ul {
      flex-direction: column;
    }

    .container {
      display: block;
    }

    .nav-other {
      justify-content: space-between;
    }
  }
}

.nav-adjust {
  background: linear-gradient(
      to bottom,
      hsl(0deg 0% 100% / 2.5%),
      hsl(0deg 0% 100% / 5%) 9.5%,
      transparent 9.5%
    ),
    linear-gradient(
      to right,
      hsla(0deg 0% 0% / 50%),
      hsla(0deg 0% 0% / 0%),
      hsla(0deg 0% 0% / 50%)
    ),
    linear-gradient(
      to bottom,
      hsla(0deg 0% 0% / 80%),
      hsla(0deg 0% 0% / 70%),
      hsla(0deg 0% 0% / 90%)
    );
}

.brand {
  justify-content: start;
  background-image: url('@/assets/TalonLogo/TalonLogo.png');
  background-position: left -0.5px;
  background-repeat: no-repeat;
  background-size: 128px 171px;
  padding: 0 16px 0 0;
  width: 128px;

  &:hover {
    background-position: left -57.5px;
    text-shadow: vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 50%),
      0 0 8px hsl(0deg 0% 100% / 75%);
    color: hsl(0deg 0% 85%);
  }

  &:active {
    background-position: left -114.5px;
    text-shadow: vars.$textshadow-dimensions-nav hsl(0deg 0% 0% / 50%),
      0 0 8px hsl(0deg 0% 0% / 10%);
    color: hsl(0deg 0% 45%);
  }
}

.brand-adjust {
  background-position: left 4px;

  &:hover {
    background-position: left calc(-57px + 4px);
  }

  &:active {
    background-position: left calc(-114px + 4px);
  }
}

.separator {
  background: linear-gradient(
    to bottom,
    transparent,
    hsla(0deg 0% 100% / 25%),
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
      hsla(0deg 0% 0% / 50%),
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
</style>
