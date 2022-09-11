<template>
  <div>
    <NuxtLink to="/" class="block w-7 hover:border-b-2 border-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
    </NuxtLink>
    <h2 class="mt-7 text-2xl font-bold tracking-tight text-gray-900">Detail</h2>

    <div class="overflow-hidden border-gray-500 bg-white shadow sm:rounded-lg">
      <div class="px-4 py-5 grid grid-cols-10 gap-4">
        <div class="col-span-4 overflow-hidden rounded-sm">
          <img :src="product.imageUrl" :alt="product.name" />
        </div>
        <div class="grid grid-cols-1 grid-rows-4 col-span-6">
          <h3 class="text-6xl font-black mb-4 row-span-2">
            {{ product.name }}
          </h3>
          <p class="text-base font-semibold text-gray-900">
            $ {{ product.price }}
          </p>
          <div>
            <button
              type="button"
              class="flex hover: items-center rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              @click="addToCart"
            >
              <span class="mr-2">Add to Cart</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createCartItem, fetchProductById } from '~/api'
import { IProduct } from '~/api/model'
import { ADD_CART_ITEM } from '~/store'

export default Vue.extend({
  name: 'Id',
  async asyncData({ params }): Promise<{ product: IProduct }> {
    // const id = this.$route.params.id;
    const response = await fetchProductById(params.id)
    const product = response.data
    return { product }
  },
  /**
   * asyncData 의 파라미터 context : Context { app, store, route, params, query, env, isDev, isHMR, redirect, error, $config }
   * if (process.server) const { req, res, beforeNuxtRender } = context
   * if (process.client) const { from, nuxtState } = context
   */
  methods: {
    async addToCart() {
      await createCartItem(this.product)
      this.$store.commit(ADD_CART_ITEM, this.product)
      await this.$router.push('/cart') /* .catch(error=>{}) */
    }
  }
})
</script>

<style scoped></style>
