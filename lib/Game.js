const Player = require("./Player");
const NameGenerator = require("./NameGenerator");

class Game {
    constructor(player1, category, socketIO) {
        this.player1 = player1;
        this.player2 = "";
        this.status = "Waiting for player 2";
        this.whosTurn = "waiting";
        this.name = NameGenerator();
        this.socketIO = socketIO;
        this.category = category;
    };

    hidePlayerCards(player, cardsToHide) {
        player.hideCards(cardsToHide);
    };

    playerJoined(player2) {
        this.player2 = new Player(player2);
    };

    startGame() {
        this.status = "Ongoing"
        this.player1.createHand([1, 2, 3]);
        this.player2.createHand([1, 2, 3]);
        this.socketIO.emit("yello");
    }

};

module.exports = Game;