<script setup>
import "normalize.css";
import AppHeader from "./app/layout/AppHeader.vue";
import { provideModal } from "~/app/modal/useModal";
import AppModal from "~/app/modal/AppModal.vue";

provideModal();
</script>
<template>
  <AppHeader />
  <main>
    <NuxtPage />
  </main>
  <footer />
  <AppModal />
</template>

<style>
:root {
  --black-0: oklch(0% 0 255.09156059071347);
  --black-1: #2b3137;
  --black-2: #15172a;
  --white-0: oklch(100% 0 255.09156059071347);
  --white-1: #f9f9f9;
  --grey-0: #666666;
  --grey-1: #efefef;
  --grey-2: oklch(0.68 0 0);
  --grey-3: oklch(0.78 0 0);
  --grey-4: oklch(0.47 0 0);
  --blue-1: oklch(59.59% 0.24 255.09156059071347);
  --blue-2: oklch(81.58% 0.189 190.74037768509325);
  --blue-3: oklch(0.3 0.04 278.18);
  --purple-1: oklch(49.07% 0.272 300.45);
  --purple-2: oklch(64.53% 0.292 2.47);
  --red-1: oklch(67.3% 0.266 25.039656026515278);
  --yellow-1: oklch(85.82% 0.201 91.19);
}

:root[data-theme="dark"] {
  --background-color: var(--black-0);
  --background-secondary-color: var(--black-1);
  --foreground-color: var(--white-0);
  --foreground-secondary-color: var(--grey-1);
  --modal-background-color: var(--black-2);
  --modal-secondary-color: var(--blue-3);
  --modal-foreground-color: var(--white-0);
  --modal-result-shadow-color: var(--grey-4);
  --content-code-background-color: var(--black-2)
}

:root {
  --background-color: var(--white-0);
  --background-secondary-color: var(--grey-1);
  --foreground-color: var(--black-0);
  --foreground-secondary-color: var(--black-1);
  --modal-background-color: var(--white-1);
  --modal-secondary-color: var(--grey-2);
  --modal-foreground-color: var(--blue-1);
  --modal-result-shadow-color: var(--grey-3);
  --content-code-background-color: var(--white-1)
}

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

main,
header {
  max-width: 1200px;
  margin: auto;
}

body.modal-opened {
  overflow: hidden;
}

a.link {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, var(--blue-1), var(--blue-2));
  box-shadow: var(--background-color) 0px 6px 9px -5px;
}

</style>
