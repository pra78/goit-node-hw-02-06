const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    if (
      (req.route.methods.post || req.route.methods.put) &&
      Object.keys(req.body).length === 0
    ) {
      next(HttpError(400, "missing fields"));
    }
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = validateBody;
