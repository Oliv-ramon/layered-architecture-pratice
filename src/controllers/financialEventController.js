import * as financialEventService from "../services/financialEventService.js"
import { unprocessableEntityError } from "../utils/errorUtils.js";

export async function create(req, res) {
  const user = res.locals.user;

  const { value, type } = req.body;

  if (!value || !type) {
    throw unprocessableEntityError("all the fields need to be filled");
  }

  await financialEventService.create(value, type, user);

  res.sendStatus(201);
};

export async function getAll (req, res) {
  const user = res.locals.user;

  try {

    const events = await connection.query(
      `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
      [user.id]
    );

    res.send(events.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export async function getSum(req, res) {
  const user = res.locals.user;

  try {

    const events = await connection.query(
      `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
      [user.id]
    );

    const sum = events.rows.reduce(
      (total, event) =>
        event.type === "INCOME" ? total + event.value : total - event.value,
      0
    );

    res.send({ sum });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};