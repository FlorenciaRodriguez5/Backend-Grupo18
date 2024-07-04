const db = require('../db/db');
const { signToken, comparePasswords, encryptPassword } = require('../controllers/auth');

// Registro de usuario
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Encriptar la contraseña
    const hashedPassword = await encryptPassword(password);

    // Guardar el usuario en la base de datos
    const sql = 'INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error al registrar el usuario.' });
      }

      // Generar un token JWT
      const token = signToken(result.insertId);

      res.status(201).json({
        status: 'success',
        token,
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

// Login de usuario
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Buscar el usuario en la base de datos por nombre de usuario
    const sql = 'SELECT * FROM usuarios WHERE username = ?';
    db.query(sql, [username], async (err, result) => {
      if (err || result.length === 0) {
        return res.status(401).json({ error: 'Credenciales incorrectas.' });
      }

      // Verificar la contraseña
      const isMatch = await comparePasswords(password, result[0].password);

      if (!isMatch) {
        return res.status(401).json({ error: 'Credenciales incorrectas.' });
      }

      // Generar un token JWT
      const token = signToken(result[0].id);

      res.status(200).json({
        status: 'success',
        token,
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

// Procesar formulario de contacto
exports.procesarContacto = async (req, res) => {
  try {
    const { nombre, apellido, mail, comentario } = req.body;

    // Guardar datos en la base de datos
    const sql = 'INSERT INTO contactos (nombre, apellido, mail, comentario) VALUES (?, ?, ?, ?)';
    db.query(sql, [nombre, apellido, mail, comentario], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error al procesar el formulario de contacto.' });
      }

      res.status(200).json({
        status: 'success',
        message: '¡Formulario enviado correctamente!',
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};
