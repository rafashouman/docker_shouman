import {
  create,
  findAll,
  findAllPublished,
  findOne,
  update,
  deleteOne,
  deleteAll,
  requestVtexProduct,
  requestVtexProductSKU
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

// Request VTEX
router.post("/products_vtex", requestVtexProduct)

// Request VTEX
router.post("/products_vtex_sku", requestVtexProductSKU)

// Request VTEX Queue
/* router.data("/products_vtex_queue", requestVtexProductQueue) */

router.use("/api/data", router);

export default router;
