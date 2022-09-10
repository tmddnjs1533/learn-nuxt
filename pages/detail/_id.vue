<template>
  <div>
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Detail</h2>

    <div>
      <div>
        <img :src="product.imageUrl" :alt="product.name" />
      </div>
      <div>
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
      </div>

      <p></p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { fetchProductById } from '~/api'

export default Vue.extend({
  name: 'Id',
  async asyncData({ params }) {
    // const id = this.$route.params.id;
    const response = await fetchProductById(params.id)
    const product = response.data
    return { product }
  }
})
</script>

<style scoped></style>
