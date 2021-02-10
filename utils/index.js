export const highCards = [
  "A",
  "K",
  // "Q",
  // "J",
  // "10",
];

export const hasPocketPair = (firstCard, secondCard) => {
  return firstCard.rank === secondCard.rank;
};

export const hasAtLeastOneHighCard = (firstCard, secondCard) => {
  return (
    highCards.includes(firstCard.rank) || highCards.includes(secondCard.rank)
  );
};

export const isSuited = (firstCard, secondCard) => {
  return firstCard.suit === secondCard.suit;
}

