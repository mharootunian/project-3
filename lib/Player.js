class Player {

    constructor(name, socket) {
        this.name = name;
        this.socket = socket;
        this.cards = [];
        this.visibleCards = [];
    };

    hideCards(cardsToHide) {
        cardsToHide.forEach( card =>{
            this.visibleCards.splice(this.visibleCards.indexOf(card),1)
        });
    };

    createHand(cardsToAdd) {
        this.cards = cardsToAdd;
        this.visibleCards = cardsToAdd;
    };
};

module.exports = Player;