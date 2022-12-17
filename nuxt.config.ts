// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/supabase"],
  css: ["@/assets/main.scss"],
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Lato:wght@300&family=Manrope:wght@300;500&family=Poppins:wght@400;500;600&family=Rubik:wght@500&display=swap",
          rel: "stylesheet",
        },
      ],
      meta: [
        {
          name: "description",
          content: "Dashboard - Your life's front page",
        },
      ],
      title: "Dashboard",
    },
  },
});
