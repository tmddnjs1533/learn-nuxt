<template>
  <div>
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">장바구니</h2>
    <div class="mt-7 mb-5 border-y">
      <ul v-if="$store.state.cartItems.length > 0">
        <li
          v-for="cartItem in $store.state.cartItems"
          :key="cartItem.id"
          class="border border-gray-300 rounded-lg p-4 mb-4"
        >
          <div class="grid grid-cols-5 gap-4 items-center">
            <div class="overflow-hidden">
              <img :src="cartItem.imageUrl" :alt="cartItem.name" />
            </div>
            <p class="text-lg block col-span-3">{{ cartItem.name }}</p>
            <p class="text-lg font-semibold block">
              {{ cartItem.price }}
            </p>
          </div>
        </li>
      </ul>
      <div v-else class="h-48 flex items-center justify-center text-center">
        <p class="text-gray-300">장바구니가 비어있습니다.</p>
      </div>
    </div>

    <div class="text-right">
      <p class="font-bold text-lg">
        합계:
        {{
          $store.state.cartItems.reduce(
            (previousValue, currentValue) =>
              Math.round(previousValue + parseInt(currentValue.price)),
            0
          )
        }}
      </p>
    </div>
    <div class="text-right mt-4">
      <button
        type="button"
        class="rounded-md border bg-indigo-500 py-3 px-4 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        구매하기
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import { Context } from '@nuxt/types'
// import { FETCH_CART_ITEMS } from '~/store'

export default Vue.extend({
  name: 'Cart'
  // async asyncData({ store }: Context) {
  //   await store.dispatch(FETCH_CART_ITEMS)
  // }
})
</script>

<style scoped></style>
