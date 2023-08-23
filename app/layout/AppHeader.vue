<script setup lang="ts">
import SearchIcon from "~/app/icons/SearchIcon.vue";
import SunIcon from "~/app/icons/SunIcon.vue";
import MoonIcon from "~/app/icons/MoonIcon.vue";
import PrimaryButton from "~/app/layout/PrimaryButton.vue";
import { useModal } from "~/app/modal/useModal";

const theme = ref<"dark" | "light">("dark");

onMounted(() => {
  theme.value = document.documentElement.getAttribute("data-theme") as
    | "dark"
    | "light";
});

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  document?.documentElement.setAttribute("data-theme", theme.value);
};

const { openModal } = useModal();
</script>

<template>
  <header>
    <div class="wrapper">
      <img
        src="/logo.png"
        alt="Logo of Microsoft's Advanced Defense Division"
      />
      <h1>Microsoft's Advanced Defense Division</h1>
      <button
        type="button"
        role="switch"
        :aria-checked="theme === 'dark'"
        aria-label="Dark theme"
        class="theme-button"
        @click="toggleTheme"
      >
        <SunIcon data-light />
        <MoonIcon data-dark />
      </button>
      <PrimaryButton
        type="button"
        aria-label="Search"
        class="search-button"
        @click="openModal"
      >
        <SearchIcon class="search" />
        <span class="search-placeholder">Search</span>
      </PrimaryButton>
    </div>
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

  max-width: 100%;
  background-color: var(--background-color);
  color: var(--foreground-color);
  padding-left: 1rem;
  padding-right: 1rem;
}

.wrapper {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
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
