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

  printWinners(winners) {
    const winnerResult = `${PROMPT_MESSAGES.FINAL_WINNERS_PREFIX} : ${winners.join(", ")}`;
    Console.print(winnerResult);
  }

  printError(message) {
    Console.print(message);
  }
}

export default OutputView;
