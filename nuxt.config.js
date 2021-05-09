export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Loruki',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;1,300&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/apollo/provide', '@/plugins/http/include-credentials'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // GraphQl Apollo Client
    '@nuxtjs/apollo',
    '@nuxtjs/composition-api/module'
  ],
  apollo: {
    clientConfigs: {
      default: '@/plugins/apollo/config'
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/http',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['faServer', 'faUpload', 'faProjectDiagram']
          }
        ]
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]]
    },
    transpile: ['@vue/apollo-composable']
  }
}
