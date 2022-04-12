import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import * as userRepository from "../repositories/userRepository.js";
import { badRequestError, unauthorizedError } from "../utils/errorUtils.js";

export async function create(name, email, password) {
  const existingUsers = await userRepository.findByEmail(email);
  
  if (existingUsers) {
    throw badRequestError("this user already exist");
  }

  const hashedPassword = bcrypt.hashSync(password, 12);

  await userRepository.insert(name, email, hashedPassword);
}

export async function login(email, password) {
  const user = await userRepository.findByEmail(email);
  
  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw unauthorizedError("the email or password are incorrect");
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET
  );
  
  return token;
}