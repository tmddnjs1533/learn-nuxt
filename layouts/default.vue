<template>
  <div>
    <header>
      <h1>{{ $route.name }} 페이지</h1>
      <NuxtLink to="/">홈페이지</NuxtLink>
      <NuxtLink to="/product">상품 페이지</NuxtLink>
    </header>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  created() {
    // console.log(this.$route)
  },
})
</script>

<style scoped></style>
