import { Router } from "express";
import userRouter from "./userRouter.js";
import financialEventRouter from "./financialEventRouter.js";

const router = Router();
router.use(userRouter);
router.use(financialEventRouter);

export default router;