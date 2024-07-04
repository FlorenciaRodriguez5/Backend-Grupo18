const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { verifyToken } = require("../controllers/auth");

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

// Ruta para registro de usuarios
router.post(
  "/register",
  [
    check("username").isString().withMessage("El nombre de usuario es obligatorio"),
    check("email").isEmail().withMessage("Debe ser un correo electrónico válido"),
    check("password").isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres"),
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

// Ruta para procesar el formulario de contacto
router.post(
  "/contacto",
  [
    check("nombre").isString().withMessage("El nombre es obligatorio"),
    check("apellido").isString().withMessage("El apellido es obligatorio"),
    check("mail").isEmail().withMessage("El correo electrónico es obligatorio y debe ser válido"),
    check("comentario").isString().withMessage("El comentario es obligatorio")
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  authController.procesarContacto
);

module.exports = router;
