import ERROR_MESSAGES from "../constants/errorMessages.js";

export function parseAndValidateCarNames(rawInput) {
  if (!rawInput || rawInput.trim() === "") {
    throw new Error(ERROR_MESSAGES.NAME_EMPTY);
  }

  const splitted = rawInput.split(",");
  if (splitted.length === 0) {
    throw new Error(ERROR_MESSAGES.NAME_LIST_FORMAT_INVALID);
  }

  const trimmedNames = splitted.map((name) => name.trim());

  if (trimmedNames.some((name) => name.length === 0)) {
    throw new Error(ERROR_MESSAGES.NAME_EMPTY);
  }

  if (trimmedNames.some((name) => name.length < 1 || name.length > 5)) {
    throw new Error(ERROR_MESSAGES.NAME_LENGTH_INVALID);
  }

  const uniqueNames = new Set(trimmedNames);
  if (uniqueNames.size !== trimmedNames.length) {
    throw new Error(ERROR_MESSAGES.NAME_DUPLICATED);
  }

  return trimmedNames;
}

export function parseAndValidateRoundCount(rawInput) {
  if (!rawInput || rawInput.trim() === "") {
    throw new Error(ERROR_MESSAGES.ATTEMPT_COUNT_EMPTY);
  }

  const trimmed = rawInput.trim();

  if (!/^\d+$/.test(trimmed)) {
    throw new Error(ERROR_MESSAGES.ATTEMPT_COUNT_NON_NUMERIC);
  }

  const count = Number(trimmed);

  if (!Number.isInteger(count) || count <= 0) {
    throw new Error(ERROR_MESSAGES.ATTEMPT_COUNT_NOT_POSITIVE);
  }

  return count;
}
