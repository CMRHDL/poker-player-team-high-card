const highCards = [
  "A",
  "K",
  // "Q",
  // "J",
  // "10",
];

const hasPocketPair = (firstCard, secondCard) => {
  return firstCard.rank === secondCard.rank;
};

const hasAtLeastOneHighCard = (firstCard, secondCard) => {
  return (
    highCards.includes(firstCard.rank) || highCards.includes(secondCard.rank)
  );
};

const isSuited = (firstCard, secondCard) => {
  return firstCard.suit === secondCard.suit;
}

const hasHitPair = (firstCard, secondCard, community_cards) => {

}

class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    const [firstCard, secondCard] = gameState.players[gameState.in_action].hole_cards;

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
