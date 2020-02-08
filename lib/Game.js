const Player = require("./Player");
const NameGenerator = require("./NameGenerator");

class Game {
    constructor(player1, socket) {
        this.player1 = player1;
        this.player2 = "";
        this.status = "Waiting player 2";
        this.socket = socket;
        this.whosTurn = "waiting";
        this.name = NameGenerator();
    };

    hidePlayerCards(player, cardsToHide) {
        player.hideCards(cardsToHide);
    };

    playerJoined(player2) {
        this.player2 = player2;
    };

};

module.exports = Game;