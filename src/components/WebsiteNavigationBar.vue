<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <div class="container">
        <a href="/" id="brand">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
          <span>Vue</span>
        </a>
        <div class="separator"></div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/page2">Page 2</RouterLink>
        <a class="submenu">Will-be Sub-Menu... maybe</a>
        <RouterLink to="/about">About</RouterLink>
        <!--
        active-class="nav-link-active"
        class="nav-link"
        -->
      </div>
    </nav>
    <!-- <div class="websitewide-message">Website-wide Banner Message</div> -->
    <!-- <div class="websitewide-message severe">!!! Something is broken !!!</div> -->
    <!-- <div class="websitewide-message major">!!! Under Construction !!!</div> -->
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
      @include mixins.glossy-color-gradient(45deg, vars.$reflection-minor, vars.$stripes);
    }

    &.major {
      @include mixins.glossy-color-gradient(25deg, vars.$reflection-minor, vars.$stripes);
    }

    &.severe {
      @include mixins.glossy-color-gradient(0deg, vars.$reflection-minor, vars.$stripes);
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

  .container {
    display: flex;
    /* justify-content: center; */
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

  @media (width <= 992px) {
    /* background: vars.$reflection-weak,
      linear-gradient(
        to right,
        hsla(0deg 100% 50% / 25%),
        hsla(0deg 100% 50% / 0%),
        hsla(0deg 100% 50% / 25%)
      ),
      linear-gradient(
        to bottom,
        hsla(0deg 100% 95% / 90%),
        hsla(0deg 100% 80% / 90%),
        hsla(0deg 100% 90% / 90%)
      ); */
  }
}

#brand {
  justify-content: start;
  padding: 0 32px 0 0;
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
