import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import RacingCars from "../domain/RacingCars.js";
import RacingGame from "../domain/RacingGame.js";
import {
  parseAndValidateCarNames,
  parseAndValidateRoundCount,
} from "../validator/validators.js";

class RacingGameController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async run() {
    try {
      const racingCars = await this.#enrollRacingCars();
      const roundCount = await this.#setRoundCount();

      let racingGame = new RacingGame(racingCars, roundCount);
      const roundResult = racingGame.playRounds();

      this.#outputView.printResultHeader();
      this.#outputView.printRoundResults(roundResult);
    } catch (error) {
      this.#outputView.printError(error.message);
    }
  }

  async #enrollRacingCars() {
    const input = await this.#inputView.inputCarNames();
    const carNames = parseAndValidateCarNames(input);
    return new RacingCars(carNames);
  }

  async #setRoundCount() {
    const input = await this.#inputView.inputRoundCount();
    return parseAndValidateRoundCount(input);
  }
}

export default RacingGameController;
