<script setup lang="ts">
withDefaults(
  defineProps<{
    is?: string | object;
  }>(),
  {
    is: "button",
  },
);
</script>

<template>
  <component :is="is" class="primary-button" type="button"><slot /></component>
</template>

<style scoped>
@keyframes rotate {
  to {
    rotate: 1turn;
  }
}

.primary-button {
  --color-1: var(--blue-1);
  --color-2: var(--blue-2);
  --border-size: 2px;
  text-decoration: none;
  position: relative;
  z-index: 0;
  overflow: hidden;
  display: flex;
  background-color: var(--background-color);
  color: var(--foreground-color);
  border-radius: 9999px;
  cursor: pointer;
  font-weight: 500;
  justify-content: space-between;
  -webkit-user-select: none;
  user-select: none;
  align-items: center;
  padding: 1rem 3rem;
  gap: 7px;
  border: none;
}

.primary-button {
  box-shadow: var(--foreground-color) 0 0 0 var(--border-size);
  transition: box-shadow 0.3s;
}

.primary-button:focus-visible,
.primary-button:hover {
  box-shadow: var(--blue-1) 0px 0px 20px -4px;
}

.primary-button:hover:before,
.primary-button:focus:before {
  background-color: transparent;
  background-image: conic-gradient(
    from -45deg,
    transparent 90deg,
    var(--color-1),
    var(--color-2),
    transparent
  );
  animation: rotate 4s linear infinite;
}

.primary-button:before {
  content: "";
  position: absolute;
  z-index: -2;
  inset: -300% -100%;
}

.primary-button:after {
  content: "";
  position: absolute;
  z-index: -1;
  left: var(--border-size);
  top: var(--border-size);
  width: calc(100% - 2 * var(--border-size));
  height: calc(100% - 2 * var(--border-size));
  background: var(--background-color);
  border-radius: 9999px;
}
</style>
