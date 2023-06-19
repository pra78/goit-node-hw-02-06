const express = require("express");

const {
  listContacts,
  getById,
  addContact,
  deleteById,
  updateById,
} = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", listContacts);

router.get("/:id", getById);

router.post("/", validateBody(schemas.addSchema), addContact);

router.delete("/:id", deleteById);

router.put("/:id", validateBody(schemas.addSchema), updateById);

module.exports = router;
