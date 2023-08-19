<script lang="ts" setup>
  defineProps<{
    src: string,
    alt: string;
  }>()
</script>

<template>
  <div class="container">
    <img class="main" :src="src" :alt="alt" />
    <img class="background" :src="src" aria-hidden="true" />
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

.main {
  position: relative;
  width: 100%;
  height: auto;
}

.background {
  position: absolute;
  inset: 0;
  transform: scale(1.05);
  z-index: -1;
  filter: blur(12px);
  width: 100%;
  height: auto;
}
</style>
