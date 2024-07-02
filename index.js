// index.js
const express = require("express");
const app = express();
const authRoutes = require("./routes/routes.auth");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// Middleware para seguridad
app.use(helmet());

// Limitador de tasa
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Middleware para parsear JSON
app.use(express.json());

// Rutas para autenticación
app.use('/auth', authRoutes);

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static("public"));

// Ruta principal
app.get("/", (req, res) => {
    res.send("¡Bienvenidos al proyecto Backend del grupo 18!");
});

// Puerto de escucha
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

