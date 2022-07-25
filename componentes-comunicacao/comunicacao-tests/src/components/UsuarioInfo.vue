<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: {{ inverterNome() }}</p>
        <button @click="reiniciarNome()">Reiniciar Nome</button>
        <button @click="reiniciarNomeFn()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            // required: true,
            default: 'Anônimo'
        },
        reiniciarNomeFn: Function
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            this.nome = 'Pedro'
            this.$emit('nomeMudou', this.nome)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
