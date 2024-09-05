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
    'green': '#077D3F',
    'green-2': '#1BA566',
    'green-3': '#1BA566',
    'green-4': '#2FC582',
    'green-5': '#115C34',
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
