const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post(
  "/register",
  [
    check("username").isString(),
    check("email").isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  authController.register
);

module.exports = router;
