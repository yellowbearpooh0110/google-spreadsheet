import express from "express";

import * as DataController from "../controller/data.controller";
import * as Middleware from "../middleware";

const router = express.Router();
/* POST login. */
router.get("/", DataController.GetAllData);

export default router;
