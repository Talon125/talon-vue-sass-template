<template>
  <div :class="color">
    <b>{{ topic }}:</b> {{ content }}
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

@mixin banner($hue) {
  margin: 1em;
  border-radius: 4px;
  box-shadow: 0 0 0 1px hsl($hue, 100%, 90%, 100%), 0 0 0 2px hsl($hue, 100%, 10%, 50%),
    0 0 8px black;
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
    linear-gradient(to bottom, hsl($hue, 100%, 60%), hsl($hue, 100%, 30%), hsl($hue, 100%, 50%));
  padding: 8px;
  text-align: center;
  text-shadow: 0.5px 0.5px 4px black;
  line-height: 1.25em;
  color: white;
  backdrop-filter: blur(4px);
}

.red {
  @include banner(vars.$red);
}

.orange {
  @include banner(vars.$orange);
}

.yellow {
  @include banner(vars.$yellow);
}

.green {
  @include banner(vars.$green);
}

.blue {
  @include banner(vars.$blue);
}

.purple {
  @include banner(vars.$purple);
}
</style>
