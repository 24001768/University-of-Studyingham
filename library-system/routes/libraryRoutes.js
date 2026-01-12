import express from "express";
import { authMiddleware } from "../middleware/authmiddleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";
import { statusMiddleware } from "../middleware/statusmiddleware.js";

import {
    getResources,
    borrowResource,
    returnResource,
    getBorrowHistory
} from "../controllers/libraryController.js";

const router = express.Router();

/**
 * All library routes:
 * - must be authenticated
 * - must be student
 * - must be approved
 */
router.use(
    authMiddleware,
    roleMiddleware(["student"]),
    statusMiddleware(["approved"])
);

router.get("/resources", getResources);
router.post("/borrow", borrowResource);
router.post("/return", returnResource);
router.get("/history", getBorrowHistory);

export default router;

