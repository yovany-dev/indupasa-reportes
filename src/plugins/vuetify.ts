/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { ThemeDefinition } from 'vuetify'

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    'black': '#222222',
    'white': '#FFFFFF',
    'gray': '#E9ECEF',
    'gray-secondary': '#CCCCCC',
    'v-green': '#0B5733',
    'v-dark-green': '#053321',
    'v-green-secondary': '#076B33',
    'v-light-green': '#0AA649',
    'v-light-green-secondary': '#0AB665',
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme,
    },
  },
})
