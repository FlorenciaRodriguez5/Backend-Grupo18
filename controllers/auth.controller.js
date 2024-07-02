const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db/db");
require("dotenv").config();

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    const [rows] = await db.promise().query("SELECT * FROM usuario WHERE email = ?", [email]);
    if (rows.length > 0) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar el nuevo usuario en la base de datos
    await db.promise().query("INSERT INTO usuario (username, email, password) VALUES (?, ?, ?)", [username, email, hashedPassword]);

    // Crear un token JWT
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ message: "Usuario registrado exitosamente", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocurrió un error al registrar el usuario" });
  }
};

module.exports = { register };
