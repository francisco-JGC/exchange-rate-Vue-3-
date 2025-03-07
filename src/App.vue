<script setup lang="ts">
import { computed } from "vue";

const title = "que onda perro estoy aprendiendo vue.js";
const onClick = () => alert("Hola");

computed: {
  activeUser: () => {};
}
</script>

<template>
  <div class="title">
    {{ title }}
    <button v-on:click="onClick()">Click me</button>
  </div>
</template>

<style scoped>
.title {
  min-height: 100dvh;
}
</style>
