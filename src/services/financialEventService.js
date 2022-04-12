import * as financialEventRepository from "../repositories/financialEventRepository.js"
import { unprocessableEntityError } from "../utils/errorUtils.js";

export async function create(value, type, user) {
  const financialTypes = ["INCOME", "OUTCOME"];

  if (!financialTypes.includes(type)) {
    throw unprocessableEntityError("the type of a financial-event need to be INCOME or OUTCOME");
  }

  if (value < 0) {
    throw unprocessableEntityError("value must be greater than 0");
  }

  await financialEventRepository.insert(value, type, user);
}