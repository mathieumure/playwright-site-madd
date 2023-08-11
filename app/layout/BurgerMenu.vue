<script setup lang="ts">
const open = ref(false);
const emit = defineEmits<{
  click: [];
}>();

const handleClick = () => {
  open.value = !open.value;
  emit("click");
};
</script>

<template>
  <button
    type="button"
    :aria-label="open ? 'Close navigation' : 'Open navigation'"
    aria-controls="mobile-navigation"
    :aria-expanded="open"
    @click="handleClick"
  >
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 9H45"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
      ></path>
      <path
        d="M3 24H45"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
      ></path>
      <path
        d="M3 39H45"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
      ></path>
    </svg>
  </button>
</template>

<style scoped>
button {
  width: 4rem;
  height: 4rem;
  background: none;
  border: none;
  color: var(--foreground-color);
  padding: 1rem;
}

svg,
path {
  transition:
    transform 0.3s,
    opacity 0.3s;
}

button[aria-expanded="true"] svg {
  transform: rotate(180deg);
}

path:nth-child(1) {
  transform-origin: 13% 17%;
}

button[aria-expanded="true"] path:nth-child(1) {
  transform: rotate(45deg) scaleX(1.35);
}

button[aria-expanded="true"] path:nth-child(2) {
  opacity: 0;
}

path:nth-child(3) {
  transform-origin: 21% 82%;
}

button[aria-expanded="true"] path:nth-child(3) {
  transform: rotate(-45deg) scaleX(1.35);
}
</style>
