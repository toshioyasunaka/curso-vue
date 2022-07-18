new Vue ({
    el: '#app',
    data: {
        gameHome: true,
        gameStarted: false,
        gameEnd: false,
        playerLife: 100,
        monsterLife: 100,
        resultText: '',
        result: '',
        battleHistoric: [],
        historicStyle: '',
    },
    methods: {
        gameStart() {
            this.gameHome = false;
            this.gameEnd = false;
            this.gameStarted = true;
            this.playerLife = 100;
            this.monsterLife = 100;
        },

        attack() {
            const monsterDamage = Math.random() * (15 - 1);
            const monsterIntegerDamage = monsterDamage.toFixed();
            const playerDamage = Math.random() * (12 - 1);
            const playerIntegerDamage = playerDamage.toFixed();

            this.playerLife -= monsterIntegerDamage;
            this.monsterLife -= playerIntegerDamage;

            this.attackReactions();
        },

        specialAttack() {
            const monsterDamage = Math.random() * (12 - 1);
            const monsterIntegerDamage = monsterDamage.toFixed();
            const playerDamage = Math.random() * (15 - 1);
            const playerIntegerDamage = playerDamage.toFixed();

            this.playerLife -= monsterIntegerDamage;
            this.monsterLife -= playerIntegerDamage;

            this.attackReactions();
        },

        heal() {
            const monsterDamage = Math.random() * (12 - 1);
            const monsterIntegerDamage = monsterDamage.toFixed();
            const playerHeal = Math.random() * (15 - 1);
            const playerIntegerHeal = playerHeal.toFixed();

            this.playerLife -= Number(monsterIntegerDamage);
            this.playerLife += Number(playerIntegerHeal);

            if (this.playerLife > 100) {
                this.playerLife = 100;
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
            if (this.playerLife <= 0 && this.monsterLife > 0) {
                this.playerLife = 0;
                this.resultText = 'Você perdeu!!';
                this.result = 'lost';
                this.reset();
            }

            else if (this.monsterLife <= 0 && this.playerLife > 0) {
                this.monsterLife = 0;
                this.resultText = 'Você ganhou!!';
                this.result = 'won';
                this.reset();
            }

            if (this.monsterLife <= 0 && this.playerLife <= 0) {
                this.monsterLife = 0;
                this.playerLife = 0;
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