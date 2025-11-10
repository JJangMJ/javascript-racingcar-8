import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js"

class RacingGameController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async run() {
    const carNames = await this.#inputCarNames();
    const roundCount = await this.#inputRoundCount();
  }

  async #inputCarNames() {
    return this.#inputView.inputCarNames();
  }

  async #inputRoundCount() {
    return this.#inputView.inputRoundCount();
  }
}

export default RacingGameController;