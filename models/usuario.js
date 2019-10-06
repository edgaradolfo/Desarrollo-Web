var mongoose = require('mongoose');

var esquema = new mongoose.Schema({    
        nombre : String,
        correo : String,
        contrasena : String,
        observacion : String,
        tipoUsuario : String,
        posts : Array  
});

module.exports = mongoose.model('usuarios',esquema);