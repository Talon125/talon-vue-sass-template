<template>
  <div class="card" :class="[birthday ? 'birthday' : '', clear ? 'clear' : '']">
    <h1
      v-if="title"
      id="glasscard-title"
      :class="nocenter ? '' : 'text-center'"
    >
      {{ title }}
    </h1>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String },
  birthday: { type: Boolean },
  nocenter: { type: Boolean },
  clear: { type: Boolean }
})
</script>

<style scoped lang="scss">
@use '@/assets/variables.scss' as vars;
@use '@/assets/mixins.scss' as mixins;

#glasscard-title {
  margin: -0.55em 0 0;
  text-shadow: none;
  color: hsla(0deg 0% 100% / 25%);
  font-size: 4em;
  font-weight: lighter;
  /* font-style: italic; */

  @media (width <= 576px) {
    text-align: center;
  }
}

.card {
  margin: 2em 0 0;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px hsl(0deg 0% 100% / 50%), 0 0 0 1px hsl(0deg 0% 0% / 75%),
    0 0 8px black;
  background: radial-gradient(
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
      hsl(0deg 0% 100% / 2.5%),
      hsl(0deg 0% 100% / 5%) 49%,
      transparent 51%
    ),
    linear-gradient(
      to bottom,
      hsl(0deg 0% 0% / 50%),
      hsl(0deg 0% 0% / 70%),
      hsl(0deg 0% 0% / 60%)
    );
  padding: 1em;
  text-shadow: 0 2px 2px hsl(0deg 0% 0% / 25%);
  color: hsla(0deg 0% 100% / 90%);

  &.clear{
    background: radial-gradient(
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
      hsl(0deg 0% 100% / 2.5%),
      hsl(0deg 0% 100% / 5%) 49%,
      transparent 51%
    ),
    linear-gradient(
      to bottom,
      hsl(0deg 0% 0% / 20%),
      hsl(0deg 0% 0% / 40%),
      hsl(0deg 0% 0% / 30%)
    );
  }

  &.birthday {
    background: radial-gradient(
        ellipse 100% 33% at bottom,
        hsla(0deg 0% 100% / 25%),
        transparent
      ),
      radial-gradient(
        ellipse at bottom left,
        transparent 75%,
        hsla(0deg 0% 100% / 50%)
      ),
      radial-gradient(
        ellipse at bottom right,
        transparent 75%,
        hsla(0deg 0% 100% / 50%)
      ),
      linear-gradient(
        to bottom,
        hsla(0deg 0% 100% / 5%),
        hsla(0deg 0% 100% / 15%) 49%,
        transparent 51%
      ),
      linear-gradient(
        to bottom,
        hsla(0deg 0% 0% / 0%),
        hsla(0deg 0% 0% / 20%),
        hsla(0deg 0% 0% / 10%)
      ),
      linear-gradient(
        to right,
        hsla(167deg 91% 29% / 90%),
        hsla(167deg 69% 48% / 90%),
        hsla(150deg 63% 75% / 90%),
        hsla(211deg 64% 68% / 90%),
        hsla(243deg 56% 54% / 90%),
        hsla(263deg 64% 28% / 90%)
      );
    text-shadow: 0 2px 2px hsl(0deg 0% 100% / 75%);
    color: black;

    #glasscard-title {
      color: hsla(0deg 0% 0% / 15%);
    }
  }

  @media (width <= 576px) {
    margin: 2em 1em 0;
  }
}
</style>
