import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js"
import RacingCars from "../domain/RacingCars.js"
import RacingGame from "../domain/RacingGame.js"

class RacingGameController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async run() {
    const racingCars = await this.#enrollRacingCars();
    const roundCount = await this.#setRoundCount();

    let racingGame = new RacingGame(racingCars, roundCount);
    const roundResult = racingGame.playRounds();
    this.#outputView.printRoundResult(roundResult);
  }

  async #enrollRacingCars() {
    const carNames = await this.#inputView.inputCarNames();
    return new RacingCars(carNames);
  }

  async #setRoundCount() {
    return await this.#inputView.inputRoundCount();
  }
}

export default RacingGameController;