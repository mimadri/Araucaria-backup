import { defineNuxtConfig } from 'nuxt/config'
import { createResolver } from '@nuxt/kit'
import vuetify from 'vite-plugin-vuetify'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins?.push(
        vuetify({
          styles: { configFile: resolve('./settings.scss') },
        })
      )
    }
  },
  
})
