<template>
  <div :class="`banner ${color}`">
    <b>{{ topic }}<span v-if="topic && content">:</span></b> {{ content }}
    <p>
      <slot />
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  topic: { type: String },
  content: { type: String },
  color: { type: String }
})
</script>

<style lang="scss" scoped>
@use '../assets/variables.scss' as vars;

.banner {
  margin: 1em 0;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px hsl(0deg 0% 90% / 67%), 0 0 0 1px hsl(0deg 0% 10% / 50%),
    vars.$outer-shadow;
  background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 2px,
      hsl(0deg 0% 100% / 17.5%) 4px,
      hsl(0deg 0% 100% / 17.5%) 6px
    ),
    radial-gradient(ellipse 100% 33% at bottom, hsl(0deg 0% 0% / 15%), transparent),
    radial-gradient(ellipse at bottom left, transparent 75%, hsl(0deg 0% 100% / 25%)),
    radial-gradient(ellipse at bottom right, transparent 75%, hsl(0deg 0% 100% / 25%)),
    vars.$reflection-weak,
    linear-gradient(to bottom, hsl(0deg 0% 100%), hsl(0deg 0% 70%), hsl(0deg 0% 90%));
  padding: 8px;
  text-align: center;
  text-shadow: 0.5px 0.5px 4px white;
  line-height: 1.25em;
  color: hsl(0deg 0% 13%);
  backdrop-filter: blur(4px);
}

@mixin colored-banner($hue) {
  box-shadow: inset 0 0 0 1px hsla($hue, 100%, 90%, 67%),
    0 0 0 1px hsla($hue, 100%, 10%, 50%), vars.$outer-shadow;
  background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 2px,
      hsl(0deg 0% 100% / 17.5%) 4px,
      hsl(0deg 0% 100% / 17.5%) 6px
    ),
    radial-gradient(ellipse 100% 33% at bottom, hsl(0deg 0% 0% / 15%), transparent),
    radial-gradient(ellipse at bottom left, transparent 75%, hsl(0deg 0% 100% / 25%)),
    radial-gradient(ellipse at bottom right, transparent 75%, hsl(0deg 0% 100% / 25%)),
    vars.$reflection-weak,
    linear-gradient(
      to bottom,
      hsl($hue, 100%, 60%),
      hsl($hue, 100%, 30%),
      hsl($hue, 100%, 50%)
    );
  text-shadow: 0.5px 0.5px 4px black;
  color: white;
}

.red {
  @include colored-banner(vars.$red);
}

.orange {
  @include colored-banner(vars.$orange);
}

.yellow {
  @include colored-banner(vars.$yellow);
}

.green {
  @include colored-banner(vars.$green);
}

.blue {
  @include colored-banner(vars.$blue);
}

.purple {
  @include colored-banner(vars.$purple);
}
</style>
