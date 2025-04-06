// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss'
  ],

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'de',
    locales: [
      { code: 'de', name: 'Deutsch' },
      { code: 'fr', name: 'Français' }
    ],
    vueI18n: './i18n.config.ts'
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      meta: [
        { name: 'description', content: 'Nissy & Diego Hochzeit - 9. August 2025' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;500&display=swap' }
      ]
    }
  },

  compatibilityDate: '2025-04-06',
  runtimeConfig: {
    public: {
      weddingDate: '2025-08-09T14:00:00',
      rsvpDeadline: '2025-07-15',
      contact: {
        name: 'Weddingplanner Prisca Luwau Prinay Food',
        phones: ['+49 176 62911156', '+49 173 7254189']
      }
    }
  }
})