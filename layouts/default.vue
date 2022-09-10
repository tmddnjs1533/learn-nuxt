<template>
  <div>
    <h1>{{ $route.name }} 페이지</h1>
  <Nuxt />
  </div>
</template>

<script lang="ts">
export default {
  created() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>
