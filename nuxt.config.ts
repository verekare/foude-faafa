// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr:false
  // modules: ["@nuxt/eslint",  "@nuxtjs/stylelint-module",]
})

// import stylelintPlugin from 'vite-plugin-stylelint';

// export default defineNuxtConfig({
//   plugins: [
//       // eslintPlugin(),
//       stylelintPlugin(),
//   ],
// });