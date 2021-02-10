const highCards = [
  "A",
  "K",
  // "Q",
  // "J",
  // "10",
];

const utils = {
  highCards,
  hasPocketPair: (firstCard, secondCard) => {
    return firstCard.rank === secondCard.rank;
  },
  hasAtLeastOneHighCard: (firstCard, secondCard) => {
    return (
      highCards.includes(firstCard.rank) || highCards.includes(secondCard.rank)
    );
  },
  isSuited: (firstCard, secondCard) => {
    return firstCard.suit === secondCard.suit;
  },
  hasHitPair: (firstCard, secondCard, community_cards) => {},
};

module.exports = utils;
