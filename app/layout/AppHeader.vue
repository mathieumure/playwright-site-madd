<script setup lang="ts">
import SearchIcon from "~/app/icons/SearchIcon.vue";
</script>

<template>
  <header>
    <img src="/logo.png" alt="Logo of Microsoft's Advanced Defense Division" />
    <h1>Microsoft's Advanced Defense Division</h1>
    <button type="button" aria-label="Search" class="search-button">
      <SearchIcon class="search" />
      <span class="search-placeholder">Search</span>
    </button>
  </header>
</template>

<style scoped>
header {
  display: flex;
  max-width: 100%;
  align-items: center;
  gap: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

h1 {
  flex: 1;
  margin: 0;
  font-size: 1.1rem;
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

@media (min-width: 600px) {
  h1 {
    font-size: 1.4rem;
  }
}

@media (min-width: 900px) {
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
