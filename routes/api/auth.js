const express = require("express");

const {
  register,
  login,
  logout,
  getCurrent,
} = require("../../controllers/auth");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

// sign up
router.post("/register", validateBody(schemas.registerSchema), register);

// sign in
router.post("/login", validateBody(schemas.loginSchema), login);

// sign out
router.post("/logout", authenticate, logout);

// get current
router.get("/current", authenticate, getCurrent);

module.exports = router;