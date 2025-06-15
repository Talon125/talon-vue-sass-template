<template>
  <LoadingCircle v-if="!isLoaded" />
  <img
    v-show="isLoaded"
    :src="src"
    :alt="alt"
    @load="handleLoad"
    @error="handleLoad"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import LoadingCircle from './LoadingCircle.vue'
import { ref } from 'vue'

defineProps<{
  src: string
  alt?: string
}>()

const isLoaded = ref(false)

function handleLoad() {
  isLoaded.value = true
}
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use '../assets/variables.scss' as vars;

div {
  margin-right: 2em;
}
</style>
