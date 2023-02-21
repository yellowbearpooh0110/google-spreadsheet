import express from "express";

import * as DataController from "../controller/data.controller";
import * as Middleware from "../middleware";

const router = express.Router();
/* Get Data. */
router.get("/", Middleware.AuthorizationMiddleware, DataController.GetAllData);

/* Refetch Data. */
router.get("/refetch", DataController.RefetchData);

export default router;
