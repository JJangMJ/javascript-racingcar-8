const ERROR_PREFIX = "[ERROR]";

const ERROR_MESSAGES = Object.freeze({
  NAME_EMPTY: `${ERROR_PREFIX} 자동차 이름은 공백일 수 없습니다.`,
  NAME_LENGTH_INVALID: `${ERROR_PREFIX} 자동차 이름은 1~5자 이내여야 합니다.`,
  NAME_DUPLICATED: `${ERROR_PREFIX} 자동차 이름은 중복될 수 없습니다.`,
  NAME_LIST_FORMAT_INVALID: `${ERROR_PREFIX} 자동차 이름은 쉼표(,)로 구분해 입력해야 합니다.`,

  ATTEMPT_COUNT_EMPTY: `${ERROR_PREFIX} 시도 횟수는 공백일 수 없습니다.`,
  ATTEMPT_COUNT_NON_NUMERIC: `${ERROR_PREFIX} 시도 횟수는 숫자로만 입력해야 합니다.`,
  ATTEMPT_COUNT_NOT_POSITIVE: `${ERROR_PREFIX} 시도 횟수는 자연수여야 합니다.`,
});

export default ERROR_MESSAGES;
