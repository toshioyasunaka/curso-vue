new Vue ({
    el: '#app',
    data: {
        gameHome: true,
        gameStarted: false,
        gameEnd: false,
        playerLifeBar: 100,
        monsterLifeBar: 100,
        resultText: '',
        result: '',
    },
    methods: {
        gameStart() {
            this.gameHome = false;
            this.gameEnd = false;
            this.gameStarted = true;
            this.playerLifeBar = 100;
            this.monsterLifeBar = 100;
        },

        attack() {
            const monsterDamage = Math.random() * (15 - 1);
            const monsterIntegerDamage = monsterDamage.toFixed();
            const playerDamage = Math.random() * (12 - 1);
            const playerIntegerDamage = playerDamage.toFixed();

            this.playerLifeBar -= monsterIntegerDamage;
            this.monsterLifeBar -= playerIntegerDamage;

            this.attackReactions();
        },

        specialAttack() {
            const monsterDamage = Math.random() * (12 - 1);
            const monsterIntegerDamage = monsterDamage.toFixed();
            const playerDamage = Math.random() * (15 - 1);
            const playerIntegerDamage = playerDamage.toFixed();

            this.playerLifeBar -= monsterIntegerDamage;
            this.monsterLifeBar -= playerIntegerDamage;

            this.attackReactions();
        },

        heal() {
            const monsterDamage = Math.random() * (12 - 1);
            const monsterIntegerDamage = monsterDamage.toFixed();
            const playerHeal = Math.random() * (15 - 1);
            const playerIntegerHeal = playerHeal.toFixed();

            this.playerLifeBar -= Number(monsterIntegerDamage);
            this.playerLifeBar += Number(playerIntegerHeal);

            if (this.playerLifeBar > 100) {
                this.playerLifeBar = 100;
                alert("Sua vida está no máximo")
            }

            this.attackReactions();
        },

        giveUp() {
            this.reset();
            this.result = 'lost';
            this.resultText = 'Você desistiu do jogo!!';
        },

        attackReactions() {
            if (this.playerLifeBar <= 0 && this.monsterLifeBar > 0) {
                this.playerLifeBar = 0;
                this.resultText = 'Você perdeu!!';
                this.result = 'lost';
                this.reset();
            }

            else if (this.monsterLifeBar <= 0 && this.playerLifeBar > 0) {
                this.monsterLifeBar = 0;
                this.resultText = 'Você ganhou!!';
                this.result = 'won';
                this.reset();
            }

            if (this.monsterLifeBar <= 0 && this.playerLifeBar <= 0) {
                this.monsterLifeBar = 0;
                this.playerLifeBar = 0;
                this.resultText = 'Empatou!';
                this.result = 'draw';
                this.reset();
            }
        },

        reset() {
            this.gameEnd = true;
            this.gameStarted = false;
            this.gameHome = true;
        },
    },
})