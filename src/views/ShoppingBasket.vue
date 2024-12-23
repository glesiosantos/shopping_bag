<template>
    <div class="basket">
      <div class="items" v-if="store.state.cards.lenght < 1">
        <div class="item" v-for="card of store.state.cards" :key="card">
          <div class="remove" @click="removeToBag(card)">Remove item</div>
          <div class="photo"><img :src="card.image" alt=""></div>
          <div class="description">Mens Casual Premium Slim Fit T-Shirts </div>
          <div class="price">
            <span class="quantity-area">
              <button @click="card.quantity--" :disabled="card.quantity < 2">-</button>
              <span class="quantity">{{ card.quantity }}</span>
              <button @click="card.quantity++">+</button>
            </span>
            <span class="amount">US$ {{(card.quantity * card.price).toFixed(2) }}</span>
          </div>
        </div>
        <div class="grand-total"> Grand Total: US$ {{total()}}</div>
      </div>
      <div v-else>
        <p>Carrinho vazio</p>
      </div>
    </div>
  </template>
  
<script setup>
import { useStore } from 'vuex'
const store = useStore()

function removeToBag (card) {
  store.dispatch('removeToCard',card.id)
}

function total() {
  let total = 0
  store.state.cards.forEach(item => total += item.quantity * item.price)
  return total.toFixed(2)
}

</script>
  
  <style lang="scss">
  
  .basket {
    padding: 60px 0;  
    .items {
      max-width: 800px;
      margin: auto;
      .item {
        display: flex;
        justify-content: space-between;
        padding: 40px 0;
        border-bottom: 1px solid lightgrey;
        position: relative;
  
        .remove {
          position: absolute;
          top: 8px;
          right: 0;
          font-size: 11px;
          text-decoration: underline;
          cursor: pointer;
        }
  
        .quantity-area {
          margin: 8px auto;
          height: 14px;
  
          button {
            width: 16px;
            height: 16px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
  
          .quantity {
  
              margin: 0 4px;
          }
        }
  
        .photo {
          img {
            max-width: 80px;
          }
        }
  
        .description {
          padding-left: 30px;
          box-sizing: border-box;
          max-width: 50%;
  
        }
  
        .price {
          .amount {
            font-size: 16px;
            margin-left: 8px;
            vertical-align: middle;
  
          }
        }
      }
        .grand-total {
            font-size: 24px;
            font-weight: bold;
            text-align: right;
            margin-top: 8px;
        }
  
    }
  
  }
  
  </style>
  