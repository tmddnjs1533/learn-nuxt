<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  /**
   * 페이지 컴포넌트에만 제공되는 속성
   * data에 할당하는 것이 아니고 반환함.
   * VueRouter 의 beforeEnter() {} 와 동일(데이터 fetch 를 완료한 후에 사용자에게 페이지를 보여주는 속성)
   */
  async asyncData() {
    const response = await axios.get('http://localhost:8080/products')
    const products = response.data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }))
    return { products }
  }

  // data() {
  //   return {
  //     products: []
  //   }
  // },

  // async created() {
  // // vue 라이프 사이클 방식 - Nuxt 에서는 권장하지 않음
  // const response = await axios.get('http://localhost:8080/products');
  // console.log(response);
  // this.products = response.data;
  // }
})
</script>

<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      <img :src="product.imageUrl" :alt="product.name" />
      <p>{{ product.name }}</p>
      <p>{{ product.price }}</p>
    </li>
  </ul>
</template>

<style scoped></style>
