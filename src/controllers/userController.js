import * as userService from "../services/userService.js";
import { unprocessableEntityError } from "../utils/errorUtils.js";

export async function create(req, res) {
  console.log("tentou")
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw unprocessableEntityError("all the fields need to be filled");
  }

  await userService.create(name, email, password);

  res.sendStatus(201);
}

export async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    throw unprocessableEntityError("all the fields need to be filled");
  }

  const token = await userService.login(email, password);

  res.send({ token });
}