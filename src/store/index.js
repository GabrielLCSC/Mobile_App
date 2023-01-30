import { createStore } from 'vuex'

export default createStore({
  state: {
    calls: [

    ],
    numeros:'',

    contacts: [
      {
        nom: 'John' ,
        numero: '0606060606'
      },
      {
        nom: 'Alban' ,
        numero: '0707070707'
      },
      {
        nom: 'Thibaut' ,
        numero: '0808080808'
      },

    ]
  },
  getters: {
  },
  mutations: {
    ajoutContact(state, contact) {
      state.contacts.push(contact)
    },
    ajoutNum(state, number) {
      state.numeros += number
    },
    deleteValue(state) {
      state.numeros = state.numeros.slice(0, -1)
    },
    ADD_TO_ARRAY: (state, contactElem) => {
      state.calls.push(contactElem)
    }
  },
  actions: {
  },
  modules: {
  }
})
