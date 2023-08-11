<script setup>
import "normalize.css";
import AppHeader from "./app/layout/AppHeader.vue";
</script>
<template>
  <AppHeader />
  <main>
    <NuxtPage />
  </main>
  <footer />
</template>

<style>
:root {
  --black-0: #030014;
  --black-1: #2b3137;
  --white-0: #ffffff;
  --grey-0: #666666;
  --grey-1: #efefef;
}

:root {
  --background-color: var(--black-0);
  --background-secondary-color: var(--black-1);
  --foreground-color: var(--white-0);
  --foreground-secondary-color: var(--grey-1);
}

/*@media (prefers-color-scheme: light) {
  :root {
    --background-color: var(--white-0);
    --foreground-color: var(--black-0);
  }
}*/

@font-face {
  src: url(/fonts/AeonikPro/medium.woff2);
  font-display: swap;
  font-family: AeonikPro;
  font-weight: 500;
}

@font-face {
  src: url(/fonts/InterV/medium.woff2);
  font-display: swap;
  font-family: Inter V;
  font-weight: 500;
}

@font-face {
  src: url(/fonts/InterV/regular.woff2);
  font-display: swap;
  font-family: Inter V;
  font-weight: 400;
}

body {
  background-color: var(--background-color);
  color: var(--foreground-color);
  font-family:
    Inter V,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Open Sans,
    Helvetica Neue,
    sans-serif;
}
</style>
