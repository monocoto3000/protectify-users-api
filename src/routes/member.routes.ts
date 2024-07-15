import { Router } from "express";

import { createMember } from "../controllers/members/create.member.controller";
import { deleteMember } from "../controllers/members/delete.member.controller";
import { getAllMember } from "../controllers/members/getAll.member.controller";
import { getByIdMember } from "../controllers/members/getById.member.controller";
import { updateMember } from "../controllers/members/update.member.controller";

import { authMiddleware } from "../middlewares/middleware";

const router = Router();

router.post("/", authMiddleware, createMember);
router.delete("/:id", authMiddleware, deleteMember);
router.get("/", getAllMember);
router.get("/:id",getByIdMember)
router.put("/:id", authMiddleware, updateMember);


export default router;