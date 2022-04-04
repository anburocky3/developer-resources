import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStore = defineStore('globalStore', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      author: {
        github: 'https://bit.ly/anburocky3'
      },
      app: {
        name: {
          short: 'DevRes',
          long: 'Developer Resources'
        },
        source: 'https://github.com/anburocky3/developer-resources',
        link: ''
      },
      technologies: ['HTML', 'CSS', 'Javascript', 'PHP', 'Python']
    }
  },
  actions: {},

  getters: {}
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
