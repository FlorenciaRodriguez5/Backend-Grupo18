const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "mysql-florrodriguez.alwaysdata.net",
    user: "359811_main" ,
    password: "Florencia12878" ,
    database: "florrodriguez_g18",
});

connection.connect((error)=> {
    if(error) {
        return console.error(error);
    }
    console.log("¡Conexión Exitosa!");
});
// ESTA ESTRUCTURA DE CODIGO ES SIEMPRE IGUAL SOLO CAMBIA LA INFORMACION de LA BASE DE DATOS

module.exports = connection;