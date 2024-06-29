const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(express.json());

app.use('/recetas', require ('./rutas/recetas.rutas'));

app.get("/", (req, res) => {
  res.send("¡Bienvenidos al proyecto backend del grupo 18!");
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://backend-grupo18.vercel.app${PORT}`));
