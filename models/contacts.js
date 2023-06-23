const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const addSchema = Joi.object().keys({
  name: Joi.string().required().messages({
    "any.required": "Set name for contact",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "missing field email",
  }),
  phone: Joi.string().required().messages({
    "any.required": "missing field phone",
  }),
});

const updateFavouriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": "missing field favorite",
  }),
});

const schemas = {
  addSchema,
  updateFavouriteSchema,
};

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemas,
};
