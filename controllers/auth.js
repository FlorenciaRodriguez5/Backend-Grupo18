const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { promisify } = require('util');
const db = require('../db/db');

// Función para firmar un JWT
exports.signToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Función para verificar un JWT
exports.verifyToken = async (req, res, next) => {
  try {
    let token;

    // Verificar si hay un token en las cabeceras de autorización
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        status: 'fail',
        message: 'Acceso denegado. No has proporcionado un token válido.',
      });
    }

    // Verificar el token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Verificar si el usuario aún existe
    const sql = 'SELECT * FROM usuarios WHERE id = ?';
    db.query(sql, [decoded.id], (err, result) => {
      if (err || result.length === 0) {
        return res.status(401).json({
          status: 'fail',
          message: 'El usuario asociado a este token ya no existe.',
        });
      }

      // Adjuntar la información del usuario al objeto de solicitud para uso posterior
      req.user = result[0];
      next();
    });
  } catch (error) {
    return res.status(401).json({
      status: 'fail',
      message: 'Acceso denegado. Token inválido o expirado.',
    });
  }
};

// Función para encriptar la contraseña
exports.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Función para comparar contraseñas encriptadas
exports.comparePasswords = async (inputPassword, hashedPassword) => {
  return bcrypt.compare(inputPassword, hashedPassword);
};
