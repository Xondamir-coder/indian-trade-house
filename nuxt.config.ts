import { defineOrganization } from 'nuxt-schema-org/schema';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/hints', '@nuxtjs/i18n', '@nuxtjs/seo'],

  site: {
    url: process.env.NUXT_SITE_URL || 'https://indiatradehouse.uz',
    name: 'Indian Trade House',
    description: 'Export platform connecting Indian manufacturers with Uzbekistan and Afghanistan.',
    defaultLocale: 'en'
  },

  css: ['~/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/scss/abstracts/variables" as vars;
          @use "~/assets/scss/abstracts/mixins" as mix;
          `
        }
      }
    }
  },

  app: {
    head: {
      title: 'Indian Trade House',
      titleTemplate: '%s | Indian Trade House',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ]
    }
  },

  fonts: {
    families: [
      {
        name: 'Manrope',
        provider: 'google',
        weights: [400, 500, 600, 700, 800]
      },
      {
        name: 'Inter',
        provider: 'google',
        weights: [400, 500, 600, 700, 800, 900]
      },
      {
        name: 'Plus Jakarta Sans',
        provider: 'google',
        weights: [400, 500, 600, 700, 800]
      },
      {
        name: 'Radio Canada Big',
        provider: 'google',
        weights: [500, 600]
      }
    ]
  },

  i18n: {
    defaultLocale: 'en',
    baseUrl: process.env.NUXT_SITE_URL || 'https://indiatradehouse.uz',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'Eng',
        file: 'en.json'
      },
      {
        code: 'uz',
        language: 'uz-UZ',
        name: "O'zb",
        file: 'uz.json'
      }
    ]
  },

  schemaOrg: {
    identity: defineOrganization({
      name: 'Indian Trade House',
      url: process.env.NUXT_SITE_URL || 'https://indiatradehouse.uz',
      logo: '/favicon.ico'
    })
  }
});
