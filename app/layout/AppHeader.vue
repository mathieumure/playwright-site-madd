<script setup lang="ts">
import SearchIcon from "~/app/icons/SearchIcon.vue";
import SunIcon from "~/app/icons/SunIcon.vue";
import MoonIcon from "~/app/icons/MoonIcon.vue";

const theme = ref<'dark'|'light'>('dark');

onMounted(() => {
  theme.value = document.documentElement.getAttribute('data-theme') as 'dark'|'light';
})

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document?.documentElement.setAttribute('data-theme', theme.value)
}

</script>

<template>
  <header>
    <img src="/logo.png" alt="Logo of Microsoft's Advanced Defense Division" />
    <h1>Microsoft's Advanced Defense Division</h1>
    <button type="button" role="switch" :aria-checked="theme === 'dark'" aria-label="Dark theme" class="theme-button" @click="toggleTheme">
      <SunIcon v-if="theme === 'light'" />
      <MoonIcon v-else />
    </button>
    <button type="button" aria-label="Search" class="search-button">
      <SearchIcon class="search" />
      <span class="search-placeholder">Search</span>
    </button>
  </header>
</template>

<style scoped>
header {
  --background-color: var(--black-0);
  --foreground-color: var(--white-0);
  display: flex;
  max-width: 100%;
  align-items: center;
  gap: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: var(--background-color);
  color: var(--foreground-color);
}

h1 {
  flex: 1;
  margin: 0;
  font-size: 1.4rem;
  text-align: center;
  text-transform: uppercase;
  font-family: Arial, sans-serif;
}

img {
  width: auto;
  height: 64px;
}

.search {
  width: 24px;
  height: 24px;
}

.theme-button {
  display: flex;
  background-color: var(--background-color);
  color: var(--foreground-color);
  width: 40px;
  height: 40px;
  border: none;
  align-items: center;
}

.search-button {
  display: flex;
  background-color: var(--background-color);
  color: var(--foreground-color);
  border-radius: 40px;
  cursor: pointer;
  font-weight: 500;
  height: 40px;
  justify-content: space-between;
  -webkit-user-select: none;
  user-select: none;
  align-items: center;
  padding: 14px;
  gap: 7px;
  border: none;
}

.search-placeholder {
  display: none;
}

@media (min-width: 900px) {
  h1 {
    font-size: 2rem;
  }
  img {
    height: 128px;
  }
  .search-button {
    border: solid 1px var(--foreground-color);
  }
  .search-placeholder {
    display: inline-block;
  }
}
</style>
