<template>
  <div>
    <h1
      class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
    >
      {{ $route.name }} 페이지
    </h1>
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="flex items-center justify-between bg-white">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>
        <div>
          <SearchInput />
        </div>
      </div>

      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <NuxtLink
          v-for="product in products"
          :key="product.id"
          :to="'/detail/' + product.id"
          class="group"
        >
          <div
            class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
          >
            <img
              :src="product.imageUrl"
              :alt="product.name"
              class="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">
            {{ product.price }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import SearchInput from '~/components/SearchInput.vue'
export default Vue.extend({
  name: 'IndexPage',
  components: { SearchInput },
  /**
   * 페이지 컴포넌트에만 제공되는 속성
   * data에 할당하는 것이 아니고 반환함.
   * VueRouter 의 beforeEnter() {} 와 동일(데이터 fetch 를 완료한 후에 사용자에게 페이지를 보여주는 속성)
   */
  async asyncData() {
    const response = await axios.get('http://localhost:8080/products')
    const products = response.data.map(
      (item: {
        id: number
        name: string
        price: string
        imageUrl: string
      }) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`
      })
    )
    return { products }
  }
})
</script>
