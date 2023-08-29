<script lang="ts" setup="">
import SharpIcon from "~/app/icons/SharpIcon.vue";

defineProps<{ href: string }>();
</script>

<template>
  <div class="search-results-item">
    <a href="/docs/other-locators">
      <SharpIcon class="search-results-item__icon" />
      <span class="search-results-item__text"><slot /></span>
    </a>
  </div>
</template>

<style scoped>
.search-results-item {
  height: 56px;
  background: var(--background-color);
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 var(--modal-result-shadow-color);
  color: var(--foreground-color);
  display: block;
}

.search-results-item a {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;
  text-decoration: none;
  color: inherit;
}

.search-results-item__icon {
  width: 20px;
  height: 20px;
  color: var(--modal-secondary-color);
}

.search-results-item:hover {
  color: var(--white-0);
  background: linear-gradient(to right, var(--blue-1), var(--blue-2));
}
.search-results-item:hover .search-results-item__icon {
  color: var(--white-0);
}
</style>
