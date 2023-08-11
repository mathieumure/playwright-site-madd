<script setup lang="ts">
defineProps<{
  text: string;
  startColor: string;
  endColor: string;
}>();
</script>

<template>
  <span>{{ text }}</span>
</template>

<style scoped>
span {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    90deg,
    v-bind(startColor),
    v-bind(endColor)
  );
}
</style>
