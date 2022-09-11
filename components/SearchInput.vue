<template>
  <div>
    <!--
 - @input = v-on:input 디렉티브
 - $emit = 상위 컴포넌트로 값을 올림
 :value="searchKeyword"
  @input="$emit('input', $event.target.value)"
  = v-model 방식
 -->
    <input
      type="text"
      class="form-input rounded-md"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <button
      class="rounded-md border bg-indigo-500 py-3 px-4 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
      default: () => ''
    }
  }
})
</script>

<style scoped></style>
