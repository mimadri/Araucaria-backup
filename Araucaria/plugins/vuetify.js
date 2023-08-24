// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { aliases, fa } from 'vuetify/iconsets/fa';
import { mdi } from 'vuetify/iconsets/mdi';

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    // ssr: true,
    // components,
    // directives,
    theme: {
      defaultTheme: 'dark',
    },
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
        mdi,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
