import {
  create,
  findAll,
  findAllPublished,
  findOne,
  update,
  deleteOne,
  deleteAll
} from "../controllers/data.controller.js"

import express from 'express';
var router = express.Router();

// Create a new Data
router.post("/", create);

// Retrieve all data
router.get("/", findAll);

// Retrieve a single Data with id
router.get("/:id", findOne);

// Update a Data with id
router.put("/:id", update);

// Delete a Data with id
router.delete("/:id", deleteOne);

// Create a new Data
router.delete("/", deleteAll);

// Retrieve all published data
router.get("/published", findAllPublished);

router.use("/api/data", router);

export default router;
