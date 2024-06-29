const database = require("../database/db");

const index = (req,res) => {
    const sql = "SELECT * FROM recetas" ;
    database.query(sql, (error,rows) =>{
        if (error) {
            return res.status(500).json({error:'Intente más tarde'});
        }
        
        res.json(rows);
    })
    
};

module.exports = {
    index,
}