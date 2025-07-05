<template>
  <a
    v-if="href"
    :href="href"
    :target="stayHere ? '_self' : '_blank'"
    :class="`
      ${disabled ? 'disabled' : ''}
      ${defaultButton ? 'default' : ''}
      ${color ? color : ''}
    `"
  >
    <span class="bottom"></span>
    <span class="side"></span>
    <span class="face">
      <span>
        <slot></slot>
        <IconExternalLink v-if="!stayHere" fillColor="white" />
      </span>
    </span>
  </a>
  <button
    v-else
    :disabled="disabled"
    :class="`
      ${defaultButton ? 'default' : ''}
      ${color ? color : ''}
    `"
  >
    <span class="bottom"></span>
    <span class="side"></span>
    <span class="face">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import IconExternalLink from './icons/IconExternalLink.vue'

defineProps({
  defaultButton: { type: Boolean },
  color: { type: String },
  disabled: { type: Boolean },
  href: { type: String },
  stayHere: { type: Boolean }
})
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use '../assets/variables.scss' as vars;

$corner-roundness: 8px;

.bottom,
.side,
.face {
  padding: 0.5em 2em;
}

.bottom,
.side {
  box-sizing: border-box;
  position: absolute;
  top: -4px;
  left: -1px;
  transform: translateY(4px);
  transition-duration: vars.$transdur-mouseleave;
  border: none;
  border-radius: #{$corner-roundness + 1px};
  box-shadow: 0 1px hsla(0deg 0% 100% / 25%);
  background: linear-gradient(to bottom, transparent, hsl(0deg 0% 15% / 50%));
  width: calc(100% + 2px);
  height: calc(100% + 4px);
}

.bottom {
  opacity: 0;
  background: linear-gradient(to bottom, transparent, hsl(0deg 0% 100% / 50%));
}

.face {
  box-sizing: border-box;
  display: block;
  position: relative;
  transition-duration: vars.$transdur-mouseleave;
  border-radius: $corner-roundness;
  box-shadow: inset 0 0 0 1px hsl(0deg 0% 100% / 25%),
    0 0 0 1px hsla(0deg 0% 0% / 75%);
  background: vars.$reflection-soft, vars.$reflection-weak,
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
      hsl(0deg 0% 0% / 10%),
      hsl(0deg 0% 0% / 30%),
      hsl(0deg 0% 0% / 20%)
    );
  width: 100%;
  height: 100%;
  text-shadow: 0 2px 2px hsl(0deg 0% 0% / 25%);
  color: hsla(0deg 0% 100% / 90%);
  font-size: 1rem;
}

a .face {
  text-decoration: underline;
}

a,
button {
  display: inline-block;
  position: relative;
  transition-duration: 250ms;
  margin: 0.5em 0.5em 0;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
  will-change: transform;

  &::after {
    content: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    .face {
      color: hsla(0deg 0% 100% / 50%);
    }
  }

  &:not(:disabled):hover {
    .bottom {
      transition-duration: vars.$transdur-mouseenter;
      opacity: 1;
      box-shadow: 0 0 8px 4px hsla(0deg 0% 100% / 50%);
    }

    .face {
      transition-duration: vars.$transdur-mouseenter;
      filter: brightness(1.5);
    }
  }

/* stylelint-disable no-descending-specificity */
  &.green:not(:disabled):focus,
  &:not(:disabled):active {
    .bottom {
      transition-duration: vars.$transdur-press;
      opacity: 0;
      box-shadow: none;
    }

    .face {
      transform: translateY(3px);
      transition-duration: vars.$transdur-press;
      box-shadow: inset 0 0 0 1px hsl(0deg 0% 100% / 25%),
        0 0 0 1px hsla(0deg 0% 0% / 75%), inset 0 0 12px hsl(0deg 0% 0% / 75%);
      color: hsla(0deg 0% 100% / 50%);
      filter: brightness(0.75);

      span {
        opacity: 0.5;
        color: hsla(0deg 0% 100% / 90%);
        /* filter: brightness(0.75); */
      }
    }
  }
}

.green {
  &:not(:disabled):hover {
    .bottom {
      box-shadow: 0 0 8px 4px hsla(150deg 63% 50% / 50%);
    }
  }

  .bottom {
    background: linear-gradient(
      to bottom,
      hsla(150deg 63% 50% / 25%),
      hsla(150deg 63% 50% / 50%)
    );
  }

  .side {
    background: linear-gradient(
      to bottom,
      transparent,
      hsla(150deg 63% 25% / 50%)
    );
  }

  .face {
    box-shadow: inset 0 0 0 1px hsl(0deg 0% 100% / 25%),
    0 0 0 1px hsla(0deg 0% 0% / 50%);
    background: vars.$reflection-soft, vars.$reflection-weak,
      radial-gradient(
        ellipse 50% 33% at top,
        hsl(150deg 63% 100% / 25%),
        transparent
      ),
      radial-gradient(
        ellipse 50% 33% at bottom,
        hsl(150deg 63% 50% / 25%),
        transparent
      ),
      radial-gradient(
        ellipse at bottom left,
        transparent 75%,
        hsl(150deg 63% 90% / 15%)
      ),
      radial-gradient(
        ellipse at bottom right,
        transparent 75%,
        hsl(150deg 63% 90% / 15%)
      ),
      linear-gradient(
        to right,
        hsl(150deg 63% 0% / 25%),
        transparent,
        transparent,
        hsl(150deg 63% 0% / 25%)
      ),
      linear-gradient(
        to bottom,
        hsl(150deg 63% 35% / 70%),
        hsl(150deg 63% 20% / 90%),
        hsl(150deg 63% 30% / 80%)
      );
  }
}
</style>
