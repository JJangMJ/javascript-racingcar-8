import RacingGameController from "./controller/RacingGameController.js";
import OutputView from "./view/OutputView.js";

class App {
  async run() {
    try {
      const racingGameController = new RacingGameController();
      await racingGameController.run();
    } catch (error) {
      OutputView.printError(error);
      throw error;
    }
  }
}

export default App;
