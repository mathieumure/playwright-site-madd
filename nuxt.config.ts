// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "micromark/lib/preprocess.js": "micromark",
    "micromark/lib/postprocess.js": "micromark",
  },
  modules: [
    '@nuxt/content'
  ],
  content: {
    markdown: {
      anchorLinks: false,
    }
  },
  devtools: { enabled: true },
});
