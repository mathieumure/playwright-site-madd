<script lang="ts" setup=""></script>

<template>
  <ContentDoc class="nuxt-content" />
</template>

<style>
@font-face {
  font-family: "Source Sans 3";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts/SourceSans3.woff2) format("woff2");
}

.nuxt-content {
  padding: 3rem;
  font-family: "Source Sans 3", sans-serif;
  font-size: 20px;
}

.nuxt-content p {
  line-height: 32px;
}

.nuxt-content h2 {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, var(--red-1), var(--yellow-1));
  box-shadow: var(--background-color) 0px 6px 9px -5px;
  font-size: 2em;
  margin: 0.67em 0;
}

.nuxt-content h3 {
  text-decoration: none;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, var(--purple-1), var(--purple-2));
  box-shadow: var(--background-color) 0px 6px 9px -5px;
  font-size: 1.5em;
}

.nuxt-content a {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, var(--blue-1), var(--blue-2));
  box-shadow: var(--background-color) 0px 6px 9px -5px;
  transition: box-shadow 0.1s;
}

.nuxt-content pre {
  background-color: var(--content-code-background-color);
  padding: 1rem;
  border-right: 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
}
</style>
