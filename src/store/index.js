import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    cards: []
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products
    },

    loadCardToStore(state, cards) {
      state.cards = cards
    },

    addCard(state, product) {
      state.cards.push(product)
      localStorage.setItem('cardStore', JSON.stringify(state.cards))
    },

    removeToCard(state, id) {
      let updateBag = state.cards.filter(item => item.id !== id)
      state.cards = updateBag
      localStorage.setItem('cardStore', JSON.stringify(state.cards))
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products')
        .then(response => commit('loadProducts', response.data))
        .catch(console.error)
    },
 
    loadCards({ commit }) {
      if(localStorage.getItem('cardStore')) {
        commit('loadCardToStore', JSON.parse(localStorage.getItem('cardStore')))
      }
    },

    addToCard({commit}, product) {
      commit('addCard', product)
    },

    removeToCard({commit}, id) {
      if(confirm('Are you sure you want to remove the item from card?')) {
        commit('removeToCard', id)
      }
    }
  },
  modules: {
  }
})
