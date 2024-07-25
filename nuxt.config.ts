export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  future: {
    compatibilityVersion: 4
  },
  modules: [
    'nuxt-auth-utils',
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxt/ui'
  ],
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  },
  hub: {
    database: true
  },
  ui: {
    icons: [
      'heroicons',
      'simple-icons'
    ]
  }
})
