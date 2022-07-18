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
            this.battleHistoric = [];
            this.playerLife = 100;
            this.monsterLife = 100;
        },

        attack() {
            const monsterDamage = Math.random() * (15 - 1) + 1;
            const monsterIntegerDamage = Math.round(monsterDamage);
            const playerDamage = Math.random() * (12 - 1) + 1;
            const playerIntegerDamage = Math.round(playerDamage);

            this.playerLife -= monsterIntegerDamage;
            this.monsterLife -= playerIntegerDamage;

            this.registerBattle(`O jogador atacou o monstro e deu ${playerIntegerDamage} de dano.`, 'player-historic');
            this.registerBattle(`O monstro atacou o jogador e deu ${monsterIntegerDamage} de dano.`, 'monster-historic');

            this.attackReactions();
        },

        specialAttack() {
            const monsterDamage = Math.random() * (12 - 1) + 1;
            const monsterIntegerDamage = Math.round(monsterDamage);
            const playerDamage = Math.random() * (15 - 1) + 1;
            const playerIntegerDamage = Math.round(playerDamage);

            this.playerLife -= monsterIntegerDamage;
            this.monsterLife -= playerIntegerDamage;

            this.registerBattle(`O jogador fez um ataque especial no monstro e deu ${playerIntegerDamage} de dano.`, 'player-historic');
            this.registerBattle(`O monstro atacou o jogador e deu ${monsterIntegerDamage} de dano.`, 'monster-historic');

            this.attackReactions();
        },

        heal() {
            const monsterDamage = Math.random() * (12 - 1) + 1;
            const monsterIntegerDamage = Math.round(monsterDamage);
            const playerHeal = Math.random() * (15 - 1) + 1;
            const playerIntegerHeal = Math.round(playerHeal);

            this.playerLife -= Number(monsterIntegerDamage);
            this.playerLife += Number(playerIntegerHeal);

            if (this.playerLife > 100) {
                this.playerLife = 100;
                alert("Sua vida está no máximo")
            }

            this.registerBattle(`O jogador se curou em ${playerIntegerHeal} de vida.`, 'player-historic');
            this.registerBattle(`O monstro atacou o jogador e deu ${monsterIntegerDamage} de dano.`, 'monster-historic');

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

        registerBattle(text, styleClass) {
            this.battleHistoric.unshift( {text, styleClass} ); //coloca o elemento na primeira posição da Array
        }
    },
})