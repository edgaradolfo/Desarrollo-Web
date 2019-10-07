var express = require("express");
var database = require("./modules/database");
var bodyParser = require('body-parser');
var usuariosRouter = require("./routers/usuarios-router");
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
//Exponer una carpeta como publica para archivos estaticos
app.use(express.static("public"));
app.use('/usuarios',usuariosRouter);

app.listen(8888, function(){
    console.log("Servidor levantado");
});