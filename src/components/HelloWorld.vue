<template>
  <h1>{{ msg }}</h1>

  <p class="text-3xl text-red-400">
    Risichat
  </p>

  <button type="button" @click="count++">Number of risi peoples is: {{ count }}</button>

</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
