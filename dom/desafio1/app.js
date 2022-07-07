new Vue ({
    el: '#desafio',
    data: {
        nome: 'Toshio',
        idade: 25,
        imagem: 'https://images5.alphacoders.com/104/thumb-1920-1046568.jpg',
    },
    methods: {
        multiplicaIdade3() {
            return this.idade * 3;
        },
        numeroRandomico() {
            return Math.random().toFixed(2);
        }
    }
})