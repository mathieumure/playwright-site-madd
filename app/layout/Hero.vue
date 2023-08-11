<script setup lang="ts">
import HeroTitlePart from "~/app/layout/HeroTitlePart.vue";
import PrimaryButton from "~/app/layout/PrimaryButton.vue";
</script>

<template>
  <section class="hero">
    <h2 class="title">
      <HeroTitlePart
        text="Protect."
        start-color="var(--blue-1)"
        end-color="var(--blue-2)"
      />
      <HeroTitlePart
        text="Prevent."
        start-color="var(--purple-1)"
        end-color="var(--purple-2)"
      />
      <HeroTitlePart
        text="Predict."
        start-color="var(--red-1)"
        end-color="var(--yellow-1)"
      />
    </h2>
    <p class="subtitle">
      Microsoft's Advanced Defense Division (MADD) pushes the boundaries of
      technology to ensure a secure future.
    </p>
    <div class="actions-container">
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </section>
</template>

<style scoped>
.hero {
  --blue-1: oklch(59.59% 0.24 255.09156059071347);
  --blue-2: oklch(81.58% 0.189 190.74037768509325);

  --purple-1: oklch(49.07% 0.272 300.45);
  --purple-2: oklch(64.53% 0.292 2.47);

  --red-1: oklch(67.3% 0.266 25.039656026515278);
  --yellow-1: oklch(85.82% 0.201 91.19);
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(70vh - 64px);
  max-width: 1024px;
  margin: auto;
  justify-content: center;
}

.hero .title {
  font-size: 4.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.subtitle {
  color: var(--foreground-secondary-color);
  font-size: 1.25rem;
  line-height: 1.6em;
  text-align: center;
  margin-left: 2rem;
  margin-right: 2rem;
}

.actions-container {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

@media (min-width: 900px) {
  .hero {
    min-height: calc(70vh - 128px);
  }
  .hero .title {
    flex-direction: row;
    gap: 1rem;
  }
}
</style>
