new Vue ({
    el: '#app',
    data: {
        gameStart: false,
        gameEnd: false,
        playerLifeBar: 100,
        monsterLifeBar: 100,
        resultText: '',
        result: '',
    },
    methods: {
        attack() {
            const monsterDamage = Math.random() * (15 - 1);
            const monsterIntegerDamage = monsterDamage.toFixed();
            const playerDamage = Math.random() * (12 - 1);
            const playerIntegerDamage = playerDamage.toFixed();

            this.playerLifeBar -= monsterIntegerDamage;
            this.monsterLifeBar -= playerIntegerDamage;
        }
    },
    watch: {
        playerLifeBar() {
            if (this.playerLifeBar < 0) {
                this.playerLifeBar = 0;
                this.resultText = 'Você perdeu!!';
                this.result = 'lost';
                this.gameEnd = true;
            }
        },

        monsterLifeBar() {
            if(this.monsterLifeBar < 0) {
                this.monsterLifeBar = 0;
                this.resultText = 'Você ganhou!!';
                this.result = 'won';
                this.gameEnd = true;

            }
        },
    }
})