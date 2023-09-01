<script lang="ts" setup>
defineProps<{
  src: string;
  alt: string;
}>();
</script>

<template>
  <img :src="src" :alt="alt" />
</template>

<style scoped>
img {
  width: 100%;
  height: auto;
  border-radius: 18px;
  box-shadow: 4px 3px 7px -1px var(--black-0);
}
</style>
