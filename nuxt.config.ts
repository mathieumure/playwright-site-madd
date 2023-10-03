// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    SECRET_PASSWORD: '<3WindowsVista<3',
  },
  alias: {
    "micromark/lib/preprocess.js": "micromark",
    "micromark/lib/postprocess.js": "micromark",
  },
  modules: ["@nuxt/content"],
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
  devtools: { enabled: true },
});
