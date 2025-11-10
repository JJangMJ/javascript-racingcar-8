import { Console } from "@woowacourse/mission-utils";
import { PROMPT_MESSAGES } from "../constants/promptMessages.js";

class InputView {
    async inputCarNames() {
    return await Console.readLineAsync(PROMPT_MESSAGES.inputCarNames);
  }
}

export default InputView;