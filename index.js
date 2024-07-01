const express = require("express");
const app = express();

app.use(express.json());
app.use('/recetas', require ('./routes/routes.recetas'));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("!Bienvenidos al proyecto Backend del grupo 18!");
});


const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
