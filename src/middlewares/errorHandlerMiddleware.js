export function errorHandlerMiddleware(error, _req, res, _next) {
  if (error.typeCode) {
    console.log(error);
    return res.status(error.typeCode).send(error.message);
  }
  
  console.log(error);
  res.sendStatus(500);
}