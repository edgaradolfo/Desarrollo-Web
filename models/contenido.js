var mongoose = require('mongoose');

var esquema = new mongoose.Schema({    
        titulo : String,
        observacion : String,
        url : String,
        tipoArchivo : String,
        nombreArchivo : String,
        pagina : Array
});

module.exports = mongoose.model('contenidos',esquema);