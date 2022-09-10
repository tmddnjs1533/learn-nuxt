<template>
  <div>
    <header class="mx-auto max-w-7xl px-4 sm:px-6">
      <div
        class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <NuxtLink
          to="/"
          class="text-base font-medium text-gray-500 hover:text-gray-900"
          >홈페이지</NuxtLink
        >
        <NuxtLink
          to="/product"
          class="text-base font-medium text-gray-500 hover:text-gray-900"
          >상품 페이지</NuxtLink
        >
      </div>
    </header>
    <main
      class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
    >
      <h1
        class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
      >
        {{ $route.name }} 페이지
      </h1>

      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  created() {
    // console.log(this.$route)
  }
})
</script>

<style scoped></style>
