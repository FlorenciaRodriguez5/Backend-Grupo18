const db = require("../db/db");

const index = (req, res) => {
  const sql = "SELECT * FROM recetas";
  db.query(sql, (error, rows) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }
    res.json(rows);
  });
};

const show = (req, res) => {1
  const { id } = req.params;

  const sql = "SELECT * FROM recetas WHERE id = ?";
  db.query(sql, [id], (error, rows) => {
    
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    if (rows.length == 0) {
      return res.status(404).send({ error: "No existe la receta" });
    }

    res.json(rows[0]);
  });
};

const store = (req, res) => {
  const { nombre, tipo, porciones, id, ingredientes } = req.body;

  const sql = "INSERT INTO recetas (nombre, tipo, porciones, id, ingredientes) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [nombre, tipo, porciones, id, ingredientes], (error, result) => {
    // console.log(result);
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    const receta = { ...req.body, id: result.insertId };

    res.status(201).json(receta);
  });
};

const update = (req, res) => {
  const { id } = req.params;
  const { nombre, tipo, porciones, ingredientes } = req.body;

  const sql =
    "UPDATE recetas SET nombre = ?, tipo = ?, porciones = ?, ingredientes=? WHERE id = ?";
  db.query(sql, [nombre, tipo, porciones, id, ingredientes], (error, result) => {
    console.log(result);
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    if (result.affectedRows == 0) {
      return res.status(404).send({ error: "Receta inexistente" });
    }

    const receta = { ...req.body, ...req.params };

    res.json(receta);
  });
};

const destroy = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM recetas WHERE id = ?";
  db.query(sql, [id], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    if (result.affectedRows == 0) {
      return res.status(404).send({ error: "Receta inexistente" });
    }

    res.json({ mensaje: "Receta eliminada" });
  });
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};