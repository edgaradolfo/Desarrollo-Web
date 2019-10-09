var express = require("express");
var database = require("./modules/database");
var bodyParser = require('body-parser');
var fileUpload = require("express-fileupload");
var session = require('express-session');
var usuariosRouter = require("./routers/usuarios-router");
var contenidosRouter = require("./routers/contenidos-router");
var app = express();


app.use(session({secret: 'work hard'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
//Exponer una carpeta como publica para archivos estaticos
app.use(express.static("public"));
app.use(fileUpload());
app.use('/usuarios',usuariosRouter);
app.use('/contenidos',contenidosRouter);

var sess;

app.get('/elegirarchivo', function(req,res){
    res.redirect('/elegirarchivo.html');
})

app.get('/index', function(req,res){
    sess = req.session;
    if(sess.correo && sess.tipoUsuario == 'Administrador'){
        res.redirect('/index.html');
       
    }else if(sess.correo && sess.tipoUsuario == 'Registrado'){
        res.redirect('/pagina-usuario-registrado.html');
        
    }else if(!sess.correo || !sess.contrasena){
        res.write('<h1>Please login first.</h1>');
    }
})

/* app.get('/informacion',function(req,res){
    if(sess.correo && sess.tipoUsuario == 'Administrador'){
        res.send(sess);
        res.end();
    }else if(sess.correo && sess.tipoUsuario == 'Registrado'){
        res.send(sess);
        res.end();
    }
}) */

app.listen(8888, function(){
    console.log("Servidor levantado");
});