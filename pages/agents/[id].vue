<script lang="ts" setup="">
import { Agent } from "~/app/agents/types";
import ImageSquare from "~/app/images/ImageSquare.vue";

const route = useRoute();
const { data } = await useFetch<Agent>(() => `/api/agents/${route.params.id}`);
</script>

<template>
  <div class="container" v-if="data">
    <div class="bento" data-columns="6" style="grid-row-end: span 2">
      <h1 class="title">{{ data.codeName }}</h1>
      <div class="flipping-container">
        <div class="flipping-element">
          <ImageSquare
            class="agent-picture"
            :src="`/images/agents/${data.id}.png`"
            alt=""
          />
          <dl class="informations">
            <dt>Division id</dt>
            <dd>#{{ data.id }}</dd>
            <dt>Real name</dt>
            <dd>{{ data.name }}</dd>
            <dt>Birthdate</dt>
            <dd>{{ data.birthdate }}</dd>
            <dt>Place of birth</dt>
            <dd>{{ data.placeOfBirth }}</dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="bento" data-columns="6">
      <h2 class="title">Abilities</h2>
      <ul class="abilities">
        <li v-for="ability in data.abilities">{{ ability }}</li>
      </ul>
    </div>
    <div class="bento" data-columns="3">
      <p class="mission">Mission: {{ data.mission }}</p>
    </div>
    <div class="bento" data-columns="3">
      <p class="status">Status: {{ data.status }}</p>
    </div>
    <div class="bento" data-columns="8">
      <h2 class="title">Missions History</h2>
      <ul class="history">
        <li v-for="mission in data.missionsHistory">{{ mission }}</li>
      </ul>
    </div>
    <div class="bento" data-columns="4">
      <h2 class="title">Notes</h2>
      <ul class="notes">
        <li v-for="n in data.note">{{ n }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.bento {
  border-radius: 18px;
  box-shadow: 4px 3px 7px -1px var(--black-0);
  overflow: hidden;
  background-image: linear-gradient(90deg, var(--purple-1), var(--blue-1));
  color: var(--white-0);
}

.bento .agent-picture {
  padding: 0;
  border-radius: 0;
  box-shadow: none;
}

.container {
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 900px) {
  .container {
    grid-template-columns: repeat(12, 1fr);
  }
  .bento[data-columns="8"] {
    grid-column-end: span 8;
  }
  .bento[data-columns="6"] {
    grid-column-end: span 6;
  }
  .bento[data-columns="4"] {
    grid-column-end: span 4;
  }
  .bento[data-columns="3"] {
    grid-column-end: span 3;
  }
}

.title {
  text-transform: uppercase;
  text-align: center;
}

.informations {
  font-family: GameCube, sans-serif;
  text-transform: uppercase;
  position: absolute;
  inset: 0;
  background-color: var(--foreground-color);
  color: var(--background-color);
  margin: 0;
  backface-visibility: hidden;
  transform: rotate3d(0, 1, 0, 180deg);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  gap: 1rem;
  justify-content: center;
}

.informations dd {
  margin: 0;
  text-align: right;
  font-size: 1rem;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
}

.flipping-container {
  margin: auto;
  position: relative;
}

.flipping-element {
  transition: 600ms;
  transform-style: preserve-3d;
  display: flex;
}

.agent-picture {
  backface-visibility: hidden;
}

.flipping-container:hover .flipping-element {
  transform: rotate3d(0, 1, 0, 180deg);
}
</style>
