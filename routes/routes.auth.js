const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { verifyToken } = require("../auth/auth"); // Importa el middleware verifyToken

// Middleware para validar el token en rutas protegidas
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token == null) {
    return res.sendStatus(401); // Unauthorized si no hay token
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden si el token no es válido
    }
    req.user = user; // Almacenar el usuario decodificado en la solicitud
    next();
  });
};

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

// Ruta protegida que requiere token
router.get("/protected-route", authenticateToken, (req, res) => {
  res.json({
    message: "Acceso permitido. Recurso protegido.",
    user: req.user // El usuario autenticado está disponible aquí
  });
});

module.exports = router;
