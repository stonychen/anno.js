import Vue from 'vue'
export const state = Vue.observable({ foo: '', })

export const mutations = {
  setFoo(value: string) {
    state.foo = value
  },
}
