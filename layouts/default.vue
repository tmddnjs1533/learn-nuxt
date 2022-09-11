<template>
  <div>
    <header class="mx-auto max-w-7xl px-4 sm:px-6">
      <div
        class="w-full grid grid-cols-2 items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="flex items-center justify-items-start">
          <NuxtLink
            to="/"
            class="text-base font-medium text-indigo-500 hover:text-indigo-900 mr-4"
            >Nuxt Shopping</NuxtLink
          >
          <NuxtLink
            to="/product"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            >상품 페이지</NuxtLink
          >
        </div>
        <div class="flex justify-end">
          <button
            type="button"
            class="flex hover: items-center rounded-md border-0 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            @click="moveToCartPage"
          >
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
            <span class="sr-only">장바구니 바로가기</span>
          </button>
        </div>
      </div>
    </header>
    <main
      class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
    >
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    moveToCartPage() {
      this.$router.push('/cart')
    }
  }
})
</script>

<style scoped></style>
