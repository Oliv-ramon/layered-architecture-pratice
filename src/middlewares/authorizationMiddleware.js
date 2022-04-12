import jwt from "jsonwebtoken";
import { unauthorizedError } from "../utils/errorUtils.js";

export function authorizationMiddleware(req, res, next) {
  const authorization = req.headers.authorization || "";
  const token = authorization.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  let user;

  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    throw unauthorizedError("unauthorized");
  }
  console.log("passou")

  res.locals.user = user;
  next();
}