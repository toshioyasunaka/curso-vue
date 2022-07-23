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
            contador: 0
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
        border-bottom: 2px solid #CCC;
        height: 50px;
        padding: 10px 40px;
    }

    .contador button {
        height: 50px;
        width: 50px;
        border-radius: 25px;
        color: white;
        background-color: coral;
        margin-left: 15px;
        outline: none;
        cursor: pointer;
    }
</style>