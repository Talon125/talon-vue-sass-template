<template>
  <div>
    <h1>Hey there, {{ name }}! Look at these cool buttons:</h1>
  </div>
  <button class="btn-orange">I am some button</button>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String
  }
})
</script>

<style lang="scss" scoped>
@mixin button($hue) {
  display: inline-block;
  margin: 8px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 0 hsla($hue, 75%, 16%, 100%), 0 2px 4px black, inset 0 2px 4px white,
    inset 0 -2px 4px hsl(0deg 0% 0% / 50%);
  background-image: radial-gradient(
      ellipse 150% 75% at 50% 15%,
      hsl(0deg 0% 100% / 5%),
      hsl(0deg 0% 100% / 10%) 49%,
      transparent 51%
    ),
    linear-gradient(to bottom, hsl($hue, 100%, 45%), hsl($hue, 100%, 35%), hsl($hue, 100%, 50%));
  cursor: pointer;
  padding: 8px 32px;
  text-decoration: none;
  text-shadow: 0 1px 2px black;
  letter-spacing: 0.1em;
  color: white;
  font-weight: 700;
  user-select: none;
}

.btn-orange {
  @include button(200);
}
</style>
