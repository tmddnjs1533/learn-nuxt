<template>
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
</template>

<script lang="ts">
import Vue from 'vue'
import { FETCH_CART_ITEMS } from '~/store'

export default Vue.extend({
  name: 'CartList',
  // page component 만 쓸수 있기때문에 정상적으로 동작하지 않음.
  // async asyncData({ store }: Context) {
  //   await store.dispatch(FETCH_CART_ITEMS)
  // }
  /**
   * index -> /cart 일때(a)와
   * 다이렉트 url /cart 일때(b)에 fetch의 this가 다름
   * a - VueComponent
   * b - ssr VueComponent
   * 2.12 이후 버전에서는 fetch에 인수를 넘길 수 없음을 주의할 것.
   */
  async fetch() {
    await this.$store.dispatch(FETCH_CART_ITEMS)
  }
})
</script>

<style scoped></style>
