<template>
  <div>
    <input
      type="text"
      :value="value"
      class="border-2 opacity-100 px-2 h-8 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
      @input="$emit('input', $event.target.value)"
      @keyup.enter.exact="$emit('search')"
    />
    <button
      class="rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      type="button"
      @click="$emit('search')"
    >
      SEARCH
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SearchInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped></style>
