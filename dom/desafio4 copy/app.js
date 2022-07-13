new Vue ({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		perigo: true,
		classe3: '',
		classe4: '',
		estilo5: {
			width: '100px',
			height: '100px'
		},
		cor5: '',
		progresso: 0,
		concluido: '',
		texto: '',
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 == 'destaque' ? this.classe1 = 'encolher' : this.classe1 = 'destaque';
			}, 500)
		},
		iniciarProgresso() {
			let valorProgresso = 0
			let temporizador = setInterval(() => {
				valorProgresso += 20;
				this.progresso = `${valorProgresso}%`
				if (valorProgresso === 100) {
					clearInterval(temporizador);
					this.concluido = {backgroundColor:'green'}
					this.texto = 'Concluido!!'
				}
			}, 500)
		},
		atribuirClassePerigo(event) {
			if (event.target.value === 'true') {
				this.perigo = true
			} else if (event.target.value === 'false') {
				this.perigo = false
			}
		}
	}
})