import { Console } from "@woowacourse/mission-utils";
import { PROMPT_MESSAGES } from "../constants/promptMessages.js";

class InputView {
  async inputCarNames() {
    return await Console.readLineAsync(PROMPT_MESSAGES.CAR_NAMES_INPUT);
  }

  async inputRoundCount() {
    return await Console.readLineAsync(PROMPT_MESSAGES.ATTEMPT_COUNT_INPUT);
  }
}

export default InputView;
