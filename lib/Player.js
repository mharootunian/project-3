class Player {

    constructor(name) {
        this.name = name;
        //this.socket = socket;
        this.cards = [];
        this.visibleCards = [];

    };

    hideCards(cardsToHide) {
        cardsToHide.forEach( card =>{
            this.visibleCards.splice(this.visibleCards.indexOf(card),1)
        });
    };

    populateCards(cardsToAdd) {
        this.cards = cardsToAdd;
    };

};

module.exports = Player;