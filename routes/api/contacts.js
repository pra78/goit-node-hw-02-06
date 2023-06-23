const express = require("express");

const {
  listContacts,
  getById,
  addContact,
  deleteById,
  updateById,
  updateFavourite,
} = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contacts");

const router = express.Router();

router.get("/", listContacts);

router.get("/:id", isValidId, getById);

router.post("/", validateBody(schemas.addSchema), addContact);

router.delete("/:id", isValidId, deleteById);

router.put("/:id", isValidId, validateBody(schemas.addSchema), updateById);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavouriteSchema),
  updateFavourite
);

module.exports = router;
