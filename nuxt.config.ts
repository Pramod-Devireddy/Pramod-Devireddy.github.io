// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/content', '@nuxt/image', '@nuxtjs/tailwindcss', '@vite-pwa/nuxt'],

  app: {
    head: {
      title: 'Pramod Devireddy - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Scientist/Engineer @ ISRO || Spacecraft Mission Software Engineer || Full Stack Developer'
        },
        { property: 'og:site_name', content: 'PramodDevireddy' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:site', content: '@PramodDevireddy' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'og:image', content: 'https://Pramod-Devireddy.github.io/icon.png' },
        { property: 'og:image:secure_url', content: 'https://Pramod-Devireddy.github.io/icon.png' },
        { property: 'og:image:alt', content: 'Pramod Devireddy' },
        { name: 'twitter:image', content: 'https://Pramod-Devireddy.github.io/icon.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
      ]
    }
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Pramod Devireddy - Portfolio',
      short_name: 'Pramod D',
      description: 'Scientist/Engineer @ ISRO || Spacecraft Mission Software Engineer || Full Stack Developer',
      theme_color: '#4C8BF4',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      icons: [
        {
          src: '/icon.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icon.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: '/icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,jpg,svg,ico,woff2}']
    },
    client: {
      installPrompt: true
    },
    devOptions: {
      enabled: false
    }
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'dark-plus',
          langs: ['md', 'javascript', 'typescript', 'vue', 'css', 'html', 'bash', 'json', 'python', 'go', 'cpp', 'c', 'shell']
        }
      }
    }
  },

  css: ['@mdi/font/css/materialdesignicons.css']
})