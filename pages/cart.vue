<template>
  <div>
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">장바구니</h2>
    <CartList />

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
import CartList from '~/components/CartList.vue'

export default Vue.extend({
  name: 'Cart',
  components: { CartList }
})
</script>

<style scoped></style>
