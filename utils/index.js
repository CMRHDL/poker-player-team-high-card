const highCards = [
  "A",
  "K",
  // "Q",
  // "J",
  // "10",
];

const cards = [
  "A",
  "K",
  "Q",
  "J",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
]

const toRanks = (card) => card.rank;
const containsCard = rank => (card) => card.rank === rank;

const utils = {
  highCards,
  hasPocketPair: (firstCard, secondCard) => {
    return firstCard.rank === secondCard.rank;
  },
  hasHighCards: (firstCard, secondCard, cards) => {
    return cards.includes(firstCard.rank) && cards.includes(secondCard.rank);
  },
  hasAce: (firstCard, secondCard) => {
    return firstCard.rank === "A" || secondCard.rank === "A";
  },
  hasAtLeast: (firstCard, secondCard, card) => {
    const cardIndex = cards.indexOf(card);
    return cards.indexOf(firstCard.rank) <= cardIndex || cards.indexOf(secondCard.rank) <= cardIndex;
  },
  isSuited: (firstCard, secondCard) => {
    return firstCard.suit === secondCard.suit;
  },
  hasAtLeastOneHighCard: (firstCard, secondCard) => {
    return (
      highCards.includes(firstCard.rank) || highCards.includes(secondCard.rank)
    );
  },
};

module.exports = utils;
