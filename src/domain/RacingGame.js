class RacingGame {
  #racingCars;
  #roundCount;

  constructor(racingCars, roundCount) {
    this.#racingCars = racingCars;
    this.#roundCount = roundCount;
  }

  playRounds() {
    const roundResults = [];
    for (let round = 0; round < this.#roundCount; round++) {
      const roundResult = this.#racingCars.playOneRound();
      roundResults.push(roundResult);
    }

    return { roundResults };
  }
}

export default RacingGame;
