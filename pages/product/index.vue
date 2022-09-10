<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  asyncData() {},
  data() {
    return {
      products: [],
    }
  },

  async created() {
    // // vue 라이프 사이클 방식 - Nuxt 에서는 권장하지 않음
    // const response = await axios.get('http://localhost:8080/products');
    // console.log(response);
    // this.products = response.data;
  },
})
</script>

<template>
  <ul>
    <li v-for="item in products" :key="item.id">
      {{ item.name }}
    </li>
    <li>상품 1</li>
    <li>상품 2</li>
    <li>상품 3</li>
  </ul>
</template>

<style scoped></style>
