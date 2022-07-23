<template>
  <div id="contador">
    <h1>Contadores</h1>
    <span>{{ contador }}</span>
    <button @click="add()">+</button>
    <button @click="decrease()">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    add() {
      this.contador++;
    },
    decrease() {
      this.contador--;
    },
  },
};
</script>

<style>
</style>