<template>
  <div class="hello">
    <h1 >{{ heading }}</h1>
    <p>{{ content}}</p>
    <span v-bind:title="message">test for title v bind</span>
  </div>
</template>

<script>
export default {
  name: 'FirstComponent',
  props: {
    heading: String,
    content: String,
    message: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
