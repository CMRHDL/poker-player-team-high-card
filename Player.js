const utils = require("./utils");

const {
  highCards,
  hasPocketPair,
  hasAtLeastOneHighCard,
  isSuited,
  hasHitPair,
} = utils;

class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    const [firstCard, secondCard] = gameState.players[
      gameState.in_action
    ].hole_cards;

    const strongStartingHand =
      highCards.includes(firstCard.rank) && highCards.includes(secondCard.rank);

    if (strongStartingHand) {
      return bet(10000);
    }

    return bet(0);
  }

  static showdown(gameState) {}
}

module.exports = Player;
