const Joi = require("joi");

const addSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

module.exports = {
  addSchema,
};
