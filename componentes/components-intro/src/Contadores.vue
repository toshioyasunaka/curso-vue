<template>
    <div class="contadores">
        <h1>Contadores</h1>
        <app-contador v-for="(count, index) in 5" :key="index"/>
    </div>
</template>

<script>
import Contador from './Contador.vue'

export default {
    components: {'app-contador': Contador}
}
</script>

<style>

</style>