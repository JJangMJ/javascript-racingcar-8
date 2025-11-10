import RacingGameController from "./controller/RacingGameController.js";

class App {
  async run() {
    try {
      const racingGameController = new RacingGameController();
      await racingGameController.run();
    } catch (error) {
      OutputView.printError(error.message);
      throw error;
    }
  }
}

export default App;
