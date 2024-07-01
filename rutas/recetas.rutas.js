const express = require ('express');
const router = express.Router();

const controller = require('../controllers/recetas.controller');

router.get('/recetas', controller.index);
router.get("/:id", controller.show);
router.post("/", controller.store);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

//METODO GET 
/*router.get('/:id', (req,res)=> {
    console.log(req.params.id);
    const receta = receta.find(elemento => elemento.id== req.params.id)

    if(!receta) {
        return res.status(404).send( { error: 'No existe la receta'}) 
    }
    res.json(receta);
 
})

//METODO PUT
router.put('/:id', (req,res) => {
    console.log(req.params.id);
    const receta = receta.find(elemento => elemento.id== req.params.id)

    if(!receta) {
        return res.status(404).send( { error: 'No existe la receta'}) 
    }

    receta.nombre =req.body.nombre
    receta.tipo =req.body.tipo
    res.send(receta)
})
//METODO DELETE 

router.delete('/:id', (req,res) => {
    console.log(req.params);

    console.log(req.params.id);
    const receta = receta.find(elemento => elemento.id== req.params.id)

    if(!receta) {
        return res.status(404).send( { error: 'No existe la receta'}) 
    }

    const recetaIndex = receta.findIndex(elemento => elemento.id== req.params.id)
    receta.splice(recetaIndex, 1);
    res.send(receta);
})

//METODO POST
router.post('/', (req, res)=> {
    console.log(req.body);
    const receta = {
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        porciones: req.body.porciones, 
        id: receta.length + 1, 
        ingredientes: req.body.ingredientes,
    };
    receta.push(receta);

    res.status(201).send(receta);

    res.send("POST");
})*/

module.exports = router;
