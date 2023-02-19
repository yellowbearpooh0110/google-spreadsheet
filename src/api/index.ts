import express from "express";
import passport from "passport";

import user from "./user";
import auth from "./auth";
import data from "./data";

const router = express.Router();

router.use("/user", user);
router.use("/auth", auth);
router.use("/data", data);

export default router;
