import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    cards: []
  },
  mutations: {
    loadProducts(state, products) {
      console.log(products)
      state.products = products
    },

    addCard(state, product) {
      state.cards.push(product)
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
    }
  },
  modules: {
  }
})
