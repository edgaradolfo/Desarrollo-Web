var mongoose = require('mongoose');

var esquema = new mongoose.Schema({    
        nombre : String,
        correo : String,
        contrasena : String,
        observacion : String,
        tipoUsuario : String,
        posts : Array  
});

/* var bcrypt = require('bcrypt');
let SALT = 10;

esquema.pre('save',function(next){

        var usuario = this;

        if(usuario.isModified('contrasena')){
                bcrypt.genSalt(SALT, function(err,salt){
                        if(err) return next(err);

                        bcrypt.hash(usuario.contrasena, salt, function (err,hash){
                                if(err) return next(err);
                                usuario.contrasena = hash;
                                next();
                        })
                })
        }else{
                next();
        }

}) */

var bcrypt = require('bcrypt');
let SALT = 10;

esquema.pre('save',function(next){

        var usuario = this;

        if(usuario.isModified('contrasena')){
                bcrypt.genSalt(SALT)
                 .then(salt => {
                     bcrypt.hash(usuario.contrasena,salt)
                     .then(hash => {
                             usuario.contrasena = hash;
                             next();
                     }).catch(err => {
                             next(err);
                     } )   
                 }).catch(err2 => {
                         next(err2);
                 })
        }else{
                next();
        }

})

esquema.methods.compararContrasena = function(candidatePassword, callback){

        bcrypt.compare(candidatePassword, this.contrasena, function(err, isMatch){
                if(err) return callback(err);
                callback(null, isMatch);
        });
}


module.exports = mongoose.model('usuarios',esquema);






/* bcrypt.compare(candidatePassword,this.contrasena, function(err,isMatch){
                if(err){
                        return checkpassword(err);
                }else{
                        checkpassword(null, isMatch);
                }
        }); */

        /* bcrypt.compare(candidatePassword,this.contrasena)
        .then(function(isMatch){
                checkpassword(null, isMatch);
        })
        .catch(function(err){
                return checkpassword(err);
}); */