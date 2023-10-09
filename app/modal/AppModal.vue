<script lang="ts" setup="">
import { useModal } from "~/app/modal/useModal";
import SearchIcon from "~/app/icons/SearchIcon.vue";
import AppModalResult from "~/app/modal/AppModalResult.vue";
import { debounce } from "~/app/utils/debounce";
import { Agent } from "~/app/agents/types";

const { isModalOpen, closeModal } = useModal();

const searchInput = ref<HTMLInputElement | null>(null);

const results = ref<Array<Agent>>([]);
const currentSearch = ref<string>();
const debouncedSearch = debounce((search: string) => {
  currentActif.value = -1;
  $fetch<Page[]>(`/api/search?q=${search}`).then((response) => {
    results.value = response;
    if (results.value.length > 0) {
      currentActif.value = 0;
    }
  });
}, 300);

watch(currentSearch, () => {
  debouncedSearch(currentSearch.value);
});

onUpdated(() => {
  if (searchInput.value) {
    searchInput.value.focus();
  }
});

const currentActif = ref<number>(-1);
const incrementActif = () => {
  currentActif.value++;
  if (currentActif.value >= results.value.length) {
    currentActif.value = 0;
  }
};
const decrementActif = () => {
  currentActif.value--;
  if (currentActif.value < 0) {
    currentActif.value = results.value.length - 1;
  }
};

const selectActif = () => {
  const current = results.value[currentActif.value];
  navigateTo(`/agents/${current.id}`);
  closeModal();
};
</script>

<template>
  <div
    role="button"
    :aria-expanded="isModalOpen"
    aria-haspopup="listbox"
    tabindex="0"
    class="overlay"
    v-if="isModalOpen"
    @click="closeModal"
    @keydown.down="incrementActif"
    @keydown.up="decrementActif"
    @keydown.enter="selectActif"
  >
    <div class="search-container" @click.stop>
      <header>
        <form @submit.prevent>
          <label class="search-label">
            <SearchIcon />
            <input
              ref="searchInput"
              type="text"
              class="search-input"
              placeholder="Search agents"
              v-model="currentSearch"
            />
          </label>
        </form>
      </header>
      <div class="search-dropdown">
        <h4 class="search-title">Agents</h4>
        <ul class="search-results" v-if="results.length">
          <li v-for="(result, index) in results">
            <AppModalResult
              :href="`/agents/${result.id}`"
              :class="{ active: index === currentActif }"
              >{{ result.codeName }}</AppModalResult
            >
          </li>
        </ul>
        <p class="text" v-else>
          Aucun résultat
          <span v-if="currentSearch">pour {{ currentSearch }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  backdrop-filter: blur(3px);
  height: 100vh;
  width: 100vw;
  background-color: #0004;
}

.search-container {
  background: var(--modal-background-color);
  border-radius: 10px;
  box-shadow: var(--black-1) 1px 1px 7px;
  flex-direction: column;
  margin: 60px auto auto;
  position: relative;
  max-width: 95vw;
}

.search-input {
  appearance: none;
  background: 0 0;
  border: 0;
  color: var(--foreground-color);
  flex: 1;
  font-size: 1.2em;
  height: 100%;
  outline: 0;
  padding: 0 0 0 8px;
  width: 80%;
}

header {
  padding: 1rem;
}

form {
  align-items: center;
  background-color: var(--background-color);
  display: flex;
  height: 56px;
  margin: 0;
  padding: 0 12px;
  position: relative;
}

form:before {
  content: "";
  position: absolute;
  inset: -1px;
  background-image: linear-gradient(to right, var(--blue-1), var(--blue-2));
  z-index: 0;
  border-radius: 4px;
}

form:after {
  content: "";
  position: absolute;
  inset: 1px;
  background-color: var(--background-color);
  z-index: 0;
  border-radius: 4px;
}

.search-label {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
}

.search-label svg {
  color: var(--blue-1);
  width: 30px;
  height: 30px;
}

.search-dropdown {
  padding: 0 1rem 1rem 1rem;
  margin-top: 0;
}

.search-title {
  color: var(--modal-foreground-color);
}

.search-results {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.text {
  color: var(--foreground-color);
}

@media (min-width: 900px) {
  .search-container {
    max-width: 900px;
  }
}
</style>
