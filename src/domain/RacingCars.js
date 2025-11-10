class RacingCars {
  #racingCars;

  constructor(carNames) {
    this.#racingCars = carNames.map((name) => new RacingCar(name));
  }
}
