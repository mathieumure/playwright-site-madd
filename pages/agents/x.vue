<script lang="ts" setup="">
import { Agent } from "~/app/agents/types";
import ImageSquare from "~/app/images/ImageSquare.vue";

const { data } = await useFetch<Agent>(() => `/api/agents/-1`);
const discovered = ref(false);
const imageSrc = computed(() => `/images/agents/${discovered.value ? 'x' : '-1'}.webp`);
const toggleHidden = () => {
  discovered.value = !discovered.value;
}
</script>

<template>
  <div class="container" v-if="data">
    <div class="bento agent-info" data-columns="6" style="grid-row-end: span 2">
      <h1 class="title">Agent <button class="hidden-btn" type="button" @click="toggleHidden">X</button></h1>
      <div class="flipping-container">
        <div class="flipping-element">
          <img class="flip-icon" src="/images/flip.webp" alt="" />
          <ImageSquare
            class="agent-picture"
            :src="imageSrc"
            alt=""
          />
          <dl class="informations">
            <dt>Division id</dt>
            <dd>#{{ data.id }}</dd>
            <dt>Real name</dt>
            <dd>{{ discovered ? 'Mathieu Mure' : data.name }}</dd>
            <dt>Birthdate</dt>
            <dd>{{ discovered ? '25/04/1989' : data.birthdate }}</dd>
            <dt>Place of birth</dt>
            <dd>{{ discovered ? 'Lyon, France' : data.placeOfBirth }}</dd>
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
      <h2 class="title">Current mission</h2>
      <p class="mission">{{ data.mission }}</p>
    </div>
    <div class="bento" data-columns="3">
      <h2 class="title-2">Current status</h2>
      <p class="status">{{ data.status }}</p>
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
  font-family: Ubuntu, sans-serif;
  letter-spacing: 0.1rem;
  font-size: 20px;

  border-radius: 18px;
  box-shadow: 4px 3px 7px -1px var(--grey-4);
  overflow: hidden;
  background-image: linear-gradient(90deg, var(--purple-1), var(--blue-1));
  color: var(--white-0);
}

.bento.agent-info {
  display: flex;
  flex-direction: column;
}

.bento .agent-picture {
  padding: 0;
  border-radius: 0 0 18px 18px;
  box-shadow: none;
}

.container {
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.flip-icon {
  position: absolute;
  z-index: 1;
  top: 1rem;
  right: 1rem;
  height: 2.5rem;
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

.bento ul {
  list-style: circle;
  letter-spacing: 0.1rem;
  margin: 0;
  padding: 0 1rem 1rem 3rem;
}

.bento li {
  margin-bottom: 1rem;
}

.title,
.title-2 {
  font-family: GameCube, sans-serif;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.5rem;
}

.informations {
  font-family: GameCube, sans-serif;
  text-transform: uppercase;
  position: absolute;
  inset: 0;
  background-color: var(--black-0);
  color: var(--white-0);
  margin: 0;
  backface-visibility: hidden;
  transform: rotate3d(0, 1, 0, 180deg);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  gap: 1rem;
  justify-content: center;
  border-radius: 0 0 18px 18px;
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
  perspective: 1000px;
  flex-grow: 1;
}

.flipping-element {
  transition: 600ms;
  transform-style: preserve-3d;
  display: flex;
  height: 100%;
}

.agent-picture {
  backface-visibility: hidden;
  border-radius: 0 0 18px 18px;
  object-fit: cover;
}

.flipping-container:hover .flipping-element {
  transform: rotate3d(0, 1, 0, 180deg);
}

.status,
.mission {
  padding: 1rem;
}

.hidden-btn {
  background-color: transparent;
  border: none;
  cursor: text;
  color: var(--white-0);
}
</style>
