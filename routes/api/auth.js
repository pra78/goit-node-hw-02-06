const express = require("express");

const {
  register,
  verifyEmail,
  resendVerifyEmail,
  login,
  logout,
  getCurrent,
  updateSubscription,
  updateAvatar,
} = require("../../controllers/auth");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

// sign up
router.post("/register", validateBody(schemas.registerSchema), register);

router.get("/verify/:verificationToken", verifyEmail);

router.post(
  "/verify",
  validateBody(schemas.verifyEmailSchema),
  resendVerifyEmail
);

// sign in
router.post("/login", validateBody(schemas.loginSchema), login);

// sign out
router.post("/logout", authenticate, logout);

// get current
router.get("/current", authenticate, getCurrent);

router.patch(
  "/:id/subscription",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  updateSubscription
);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
