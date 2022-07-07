new Vue ({
    el: '#desafio',
    data: {
        nome: 'Toshio',
        idade: 25,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg',
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