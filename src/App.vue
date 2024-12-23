<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <template v-if="store.state.cards != 0 ">
      - 
      <router-link to="/basket">Shopping Bag ({{totalItemCard()}})</router-link> 
    </template>
  </div>
  <router-view/>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex';

const store = useStore()

onMounted(() => store.dispatch('loadProducts'))
onMounted(() => store.dispatch('loadCards'))

function totalItemCard () {
  return store.state.cards.length
}

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  margin: 80px auto;
}

#nav {
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(37, 37, 37);
  color: white;


  a {
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #007bff;
    }
  }
}
</style>
