const utils = require("./utils");

const {
  hasAce,
  hasAtLeast,
  hasAtLeastOneHighCard,
  hasHitPair,
  hasPocketPair,
  highCards,
  hasHighCards,
  isSuited,
} = utils;

const early = 200;
const mid = 100;
const late = 50;
const end = 10;

class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    const player = gameState.players[gameState.in_action];
    const [firstCard, secondCard] = player.hole_cards;

    const strongStartingHand =
      highCards.includes(firstCard.rank) && highCards.includes(secondCard.rank);

    if (strongStartingHand) {
      return bet(10000);
    }

    if (player.stack / gameState.small_blind < early) {
      // pretty good hand
      if (
        hasPocketPair(firstCard, secondCard) &&
        hasAtLeast(firstCard, secondCard, "10")
      ) {
        return bet(10000);
      }
    }

    if (player.stack / gameState.small_blind < mid) {
      // decent hand
      if (hasAce(firstCard, secondCard) && isSuited(firstCard, secondCard)) {
        return bet(10000);
      }

      if (
        hasPocketPair(firstCard, secondCard) &&
        hasAtLeast(firstCard, secondCard, "8")
      ) {
        return bet(10000);
      }

      if (hasHighCards(firstCard, secondCard, ["A", "K", "Q", "J"])) {
        return bet(10000);
      }

      if (hasHighCards(firstCard, secondCard, ["A", "K", "Q", "J", "10"]) && isSuited(firstCard, secondCard)) {
        return bet(10000);
      }
    }

    if (player.stack / gameState.small_blind < late) {
      // okish hand
      if (
        hasPocketPair(firstCard, secondCard) &&
        hasAtLeast(firstCard, secondCard, "5")
      ) {
        return bet(10000);
      }

      if (hasHighCards(firstCard, secondCard, ["A", "K", "Q", "J", "10"])) {
        return bet(10000);
      }
      return bet(10000);
    }

    if (player.stack / gameState.small_blind < end) {
      // nothing hand
      return bet(10000);
    }

    return bet(0);
  }

  static showdown(gameState) {}
}

module.exports = Player;
