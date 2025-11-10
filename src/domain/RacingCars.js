import { Random } from "@woowacourse/mission-utils";
import RacingCar from "./RacingCar.js";

const RANDOM_MIN = 0;
const RANDOM_MAX = 9;

class RacingCars {
  #racingCars;

  constructor(carNames) {
    const names = carNames.split(",").map((name) => name.trim());
    this.#racingCars = names.map((name) => new RacingCar(name));
  }

  playOneRound() {
    return this.#racingCars.map((racingCar) => {
        const randomValue = this.#generateRandomValue();
        racingCar.move(randomValue);
        const positionStatus = "-".repeat(racingCar.getPosition());
        return `${racingCar.getName()}: ${positionStatus}`;
    })
  }

  #generateRandomValue() {
    return Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX);
  }
}

export default RacingCars;
