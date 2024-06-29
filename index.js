const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("¡Bienvenidos al proyecto backend del grupo 18!");
});

app.use('/recetas', require ('./rutas/recetas.rutas'));

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
