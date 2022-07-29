export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SENSE - music release club',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'SENSE is an international music release club-providing support for independent artists, labels and music initiatives.' },
      { name: 'keywords', content: 'sense,artists,music,release,club,labels,services' },
      { name: 'robots', content: 'index, follow' },
      { name: 'category', content: 'music' },
      { name: 'theme-color', content: '#1d1d1d' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#1d1d1d' },
      { name: 'msapplication-TileImage', content: '/favicon.png' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-title', content: 'SENSE' },
      { name: 'og:title', content: 'SENSE: music release club' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://senseartists.club' },
      { name: 'og:image', content: 'https://senseartists.club/favicon.png' },
      { name: 'og:description', content: 'SENSE is an international music release club-providing support for independent artists, labels and music initiatives.' },
      { name: 'og:site_name', content: 'SENSE' },
      { name: 'og:locale', content: 'en_US' },
      { name: 'og:locale:alternate', content: 'en_US' },
      { name: 'twitter:creator', content: '@senseartists' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@senseartists' },
      { name: 'twitter:title', content: 'SENSE: music release club' },
      { name: 'twitter:description', content: 'SENSE is an international music release club providing-support for independent artists, labels and music initiatives.' },
      { name: 'twitter:image', content: 'https://senseartists.club/favicon.png' },
      { name: 'twitter:image:alt', content: 'SENSE website' },
      { name: 'application:name', content: 'SENSE' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'canonical', href: 'https://senseartists.club' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/less/main'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap'
  ],

  // Configuration du module sitemap
  sitemap: {
    hostname: 'https://senseartists.club',
    gzip: true,
    routes : ['/']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
