<template>
  <div>
    {{ products }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProductList'
  // page 컴포넌트가 아니면 사용할 수 없다.
  // async asyncData() {
  //   const response = await axios.get('http://localhost:8080/products')
  //   const products = response.data
  //   return { products }
  // }
})
</script>

<style scoped></style>
