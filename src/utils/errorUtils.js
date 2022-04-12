export function badRequestError(message) {
  return { typeCode: 409, message };
}

export function unprocessableEntityError(message) {
  return { typeCode: 422, message };
}

export function unauthorizedError(message) {
  return { typeCode: 401, message };
}