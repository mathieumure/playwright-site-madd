<script lang="ts" setup="">
import {NuxtLink} from "#components";
import PrimaryButton from "~/app/layout/PrimaryButton.vue";
import SearchIcon from "~/app/icons/SearchIcon.vue";

const route = useRoute();
const {data} = await useFetch(() => `/api/auth?token=${route.query.token}`);
</script>

<template>
  <section v-if="data?.hasValidToken">
    <h1>You're in Microsoft deep secrets page</h1>
    <p>The passphrase is: E2E testing can be hard but not with the right tool.</p>
    <p>The key code is: 1 5 2+5 3 1+11</p>
  </section>
  <section v-else>
    <h1>Agency backdoor</h1>
    <form method="POST" action="https://accounts.google.com/ServiceLogin/webreauth">
      <label>
        Login
        <div class="input-container">
          <input type="text" />
        </div>
      </label>
      <label>
        Password
        <div class="input-container">
          <input type="password" />
        </div>
      </label>
      <div class="actions-container">
      <PrimaryButton class="button" type="submit" to="/getting-started">Connect</PrimaryButton>
      </div>
    </form>
  </section>
</template>

<style scoped>
section {
  padding: 3rem;
  font-family: "Source Sans 3", sans-serif;
}

label {
  color: var(--modal-foreground-color);
  font-weight: bold;
  font-family: "Inter V", sans-serif;
}

form {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.input-container {
  align-items: center;
  background-color: var(--background-color);
  display: flex;
  height: 56px;
  margin: 0.5rem 0 0 0;
  padding: 0 12px;
  position: relative;
}

.input-container:before {
  content: "";
  position: absolute;
  inset: -1px;
  background-image: linear-gradient(to right, var(--blue-1), var(--blue-2));
  z-index: 0;
  border-radius: 4px;
}

.input-container:after {
  content: "";
  position: absolute;
  inset: 1px;
  background-color: var(--background-color);
  z-index: 0;
  border-radius: 4px;
}

input {
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
  z-index: 1;
}

h1 {
  font-size: 3rem;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, var(--red-1), var(--yellow-1));
  box-shadow: var(--background-color) 0px 6px 9px -5px;
}

.actions-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  font-family: "Inter V", sans-serif;
}
</style>
