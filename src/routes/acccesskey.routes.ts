import { Router } from "express";

import { createAccessKey } from "../controllers/access_keys/create.accesskey.controller";

import { authMiddleware } from "../middlewares/middleware";

const router = Router();

router.post("/", authMiddleware, createAccessKey);


export default router;