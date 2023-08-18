<script setup lang="ts">
import SearchIcon from "~/app/icons/SearchIcon.vue";
import SunIcon from "~/app/icons/SunIcon.vue";
import MoonIcon from "~/app/icons/MoonIcon.vue";
import PrimaryButton from "~/app/layout/PrimaryButton.vue";

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
      <SunIcon data-light />
      <MoonIcon data-dark />
    </button>
    <PrimaryButton type="button" aria-label="Search" class="search-button">
      <SearchIcon class="search" />
      <span class="search-placeholder">Search</span>
    </PrimaryButton>
  </header>
</template>

<style>
html[data-theme="light"] .theme-button svg[data-light] {
  display: block;
}
html[data-theme="dark"] .theme-button svg[data-dark] {
  display: block;
}
</style>

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

.theme-button svg {
  display: none;
}

.search-button {
  padding: 14px !important;
  font-weight: 500;
  height: 40px;
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
  .search-placeholder {
    display: inline-block;
  }
}
</style>
