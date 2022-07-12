new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		perigo: true,
		classe3: '',
		classe4: '',
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 == 'destaque' ? this.classe1 = 'encolher' : this.classe1 = 'destaque' 
			}, 1000)
		},

		iniciarProgresso() {

		},

		setPerigo(event) {
			if (event.target.value == 'true') {
				this.perigo = true
			} else if (event.target.value == 'false'){
				this.perigo = false
			}
		}
	}
})
