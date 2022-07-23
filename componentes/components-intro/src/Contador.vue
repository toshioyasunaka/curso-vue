<template>
  <div class="contador">
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
        }
    }, 
    methods: {
        add() {
            this.contador++
        },
        decrease() {
            this.contador--
        }
    }
}
</script>

<style>
    .contador span {
        border: 1px solid black;
        height: 100px;
        padding: 20px;
    }

    .contador button {
        height: 50px;
        width: 50px;
        border-radius: 25px;
        color: white;
        background-color: salmon;
        margin-left: 10px;
        margin-bottom: 10px;
        outline: none;
        cursor: pointer;
    }
</style>