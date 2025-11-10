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
  }

  async #inputCarNames() {
    return this.#inputView.inputCarNames();
  }
}

export default RacingGameController;