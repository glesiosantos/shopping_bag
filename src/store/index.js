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

    addCard(state, product) {
      state.cards.push(product)
      console.log(state.cards)
    },

    removeToCard(state, id) {
      let updateBag = state.cards.filter(item => item.id !== id)
      state.cards = updateBag
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products')
        .then(response => commit('loadProducts', response.data))
        .catch(console.error)
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
