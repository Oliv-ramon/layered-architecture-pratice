import { Router } from "express";

import * as financialEventController from "../controllers/financialEventController.js"
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware.js";

const financialEventRouter = Router();

financialEventRouter.use(authorizationMiddleware);
financialEventRouter.post("/financial-events", financialEventController.create);
financialEventRouter.get("/financial-events", financialEventController.getAll);
financialEventRouter.get("/financial-events/sum", financialEventController.getSum);

export default financialEventRouter;