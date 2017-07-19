"use strict";

import express from "express";
import controller from "./controller";
const router = express.Router();

router.get("/list", controller.list);
router.get("/:id", controller.get);
router.post("/", controller.create);
router.put("/:id", controller.update);

router.all("*", function(req, res) {
    res.status(404).send("not found");
});

export default router;
