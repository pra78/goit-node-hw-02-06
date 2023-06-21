const express = require("express");

const {
  listContacts,
  getById,
  addContact,
  deleteById,
  updateById,
  updateFavourite,
} = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contacts");

const router = express.Router();

router.get("/", authenticate, listContacts);

router.get("/:id", authenticate, isValidId, getById);

router.post("/", authenticate, validateBody(schemas.addSchema), addContact);

router.delete("/:id", authenticate, isValidId, deleteById);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  updateById
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavouriteSchema),
  updateFavourite
);

module.exports = router;
