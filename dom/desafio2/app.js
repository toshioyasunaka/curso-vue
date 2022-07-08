new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: '',
        valor3: ''
    },
    methods: {
        exibirAlerta() {
            alert('Você clicou no botão');
        },
        armazenaValor(event) {
            this.valor2 = event.target.value;
        }
    }
})