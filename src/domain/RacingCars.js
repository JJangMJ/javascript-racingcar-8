import { Random } from "@woowacourse/mission-utils";
import RacingCar from "./RacingCar.js";

const RANDOM_MIN = 0;
const RANDOM_MAX = 9;

class RacingCars {
  #racingCars;

  constructor(carNames) {
    this.#racingCars = carNames.map((name) => new RacingCar(name));
  }

  playOneRound() {
    return this.#racingCars.map((racingCar) => {
      const randomValue = this.#generateRandomValue();
      racingCar.move(randomValue);
      const positionStatus = "-".repeat(racingCar.getPosition());
      return `${racingCar.getName()}: ${positionStatus}`;
    });
  }

  getWinners() {
    const maxPosition = Math.max(
      ...this.#racingCars.map((car) => car.getPosition())
    );

    return this.#racingCars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
  }

  #generateRandomValue() {
    return Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX);
  }
}

export default RacingCars;
