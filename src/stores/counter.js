import {defineStore} from 'pinia'
export const useCounterStore = defineStore('counterStore', {
  state: () => ({
    counter: 5,
    firstName1: 'Quang Anh',
    lastName1: 'Ha',
    firstName2: 'Van Minh',
    lastName2: 'Truong'
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    tripleCount: (state) => state.counter * 3,
    fullName1: (state) => state.lastName1 + " " + state.firstName1,
  }, 
  actions: {
    increment() {
      this.counter++
    },
    tangDonVi(){
      this.counter += 5
    },
    fullName2() {
      return fullName2 = this.lastName2 + " " + this.firstName2
    }
  }
})