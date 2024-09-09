import { defineStore } from 'pinia'

export const useAppBarStore = defineStore('app-bar', {
  state: () => ({
    drawer: false,
  }),
})
