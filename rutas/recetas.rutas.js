const express = require ('express');
const router = express.Router();

const controller = require('../controllers/recetas.controller');

router.get('/recetas', controller.index);

//METODO GET 
/*router.get('/:id', (req,res)=> {
    console.log(req.params.id);
    const producto = receta.find(elemento => elemento.id== req.params.id)

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
    receta.stock =req.body.stock
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
    receta.splice(productoIndex, 1);
    res.send(receta);
})

//METODO POST
router.post('/', (req, res)=> {
    console.log(req.body);
    const receta = {
        id: receta.length + 1, 
        nombre: req.body.nombre,
        tipo: req.body.tipo,
    };
    receta.push(receta);

    res.status(201).send(receta);

    res.send("POST");
})*/

module.exports = router;
