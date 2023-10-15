// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["lord-icon"].includes(tag),
    },
  },
  supabase: {
    url: process.env.NUXT_APP_SUPABASE_URL,
    key: process.env.NUXT_APP_SUPABASE_KEY,
    redirect: false,
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts", "@nuxtjs/supabase"],
  css: ["/assets/styles/main.scss"],
});
