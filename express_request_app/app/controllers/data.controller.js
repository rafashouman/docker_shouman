//const db = require("../models");
import db from "../models/index.js"
import { sendGetRequest } from "./requests.controller.js"

const Data = db.data;

const getPagination = (page, size) => {
  //const limit = size ? +size : 3;
  const limit = size ? +size : 5000;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

// Create and Save a new Data
export const requestVtexProduct = (req, res, next) => {
  // Validate request
  if (!req.body.product_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } else {
    const prod_id = req.body.product_id;

    prod_id.forEach(async el => {
      let productResponse = await sendGetRequest(el)
      // Create a Data
      const data = new Data({
        product_id: el,
        url: `https://www.webcontinental.com.br/${productResponse.LinkId}/p`
      });

      // Save Data in the database
      if (productResponse.LinkId) {
        0
        data
          .save(data)
          .then((data) => {
            res.send(data);
            next()
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Data.",
            });
          });
      }

    })
  }

};

export const requestVtexProductSKU = (req, res) => {
  // Validate request
  if (!req.body.product_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const prod_sku = req.body.product_id
  let temArr = [];

  prod_sku.forEach(async el => {
    let productResponse = await sendGetRequestSkuID(el)
    // Create a Data
    temArr.push(productResponse.ProductId);
    console.log('temArr', temArr);
  })

  return console.log('temArr', temArr)
};

// Create and Save a new Data
export const create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }


  // Create a Data
  const data = new Data({
    title: req.body.title,
    description: req.body.description,
    //published: req.body.published ? req.body.published : false,
  });

  // Save Data in the database
  data
    .save(data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Data.",
      });
    });
};

// Retrieve all data from the database.
export const findAll = (req, res) => {
  const { page, size, title } = req.query;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  const { limit, offset } = getPagination(page, size);

  Data.paginate(condition, { offset, limit })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        data: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
    });
};

// Find a single Data with an id
export const findOne = (req, res) => {
  const id = req.params.id;

  Data.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Data with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Data with id=" + id });
    });
};

// Update a Data by the id in the request
export const update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Data.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Data with id=${id}. Maybe Data was not found!`,
        });
      } else res.send({ message: "Data was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Data with id=" + id,
      });
    });
};

// Delete a Data with the specified id in the request
export const deleteOne = (req, res) => {
  const id = req.params.id;

  Data.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Data with id=${id}. Maybe Data was not found!`,
        });
      } else {
        res.send({
          message: "Data was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Data with id=" + id,
      });
    });
};

// Delete all data from the database.
export const deleteAll = (req, res) => {
  Data.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Data were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all data.",
      });
    });
};

// Find all published data
export const findAllPublished = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  Data.paginate({ published: true }, { offset, limit })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        data: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
    });
};
  // Queue
/* exports.requestVtexProductQueue = (req, res) => {
  // Validate request
  if (!req.body.product_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const prod_id = req.body.product_id

  prod_id.forEach(async el => {
    Queue.add({ ...el });
  })
};

Queue.process(async (job) => {
  const { el } = job.data;
  let productResponse = await sendGetRequest(el)
  // Create a Data
  const data = new Data({
    product_id: el,
    url: `https://www.webcontinental.com.br/${productResponse.LinkId}/p`
  });

  // Save Data in the database
  data
    .save(data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Data.",
      });
    });
}); */