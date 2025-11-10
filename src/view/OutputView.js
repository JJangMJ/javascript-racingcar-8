import { Console } from "@woowacourse/mission-utils";
import { PROMPT_MESSAGES } from "../constants/promptMessages.js";

class OutputView {
  printResultHeader() {
    Console.print(PROMPT_MESSAGES.RESULT_HEADER);
  }

  printRoundResults(roundResults) {
    roundResults.forEach((roundResult) => {
      roundResult.forEach((line) => {
        Console.print(line);
      });
      Console.print("");
    });
  }

  static printError(message) {
    Console.print(message);
  }
}

export default OutputView;
