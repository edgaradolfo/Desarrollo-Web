var express = require('express');
var usuario = require('../models/usuario');
var router = express.Router();
var mongoose = require('mongoose');

/* obtener informacion de todos los usuarios */

router.get('/',function(req,res){
    usuario.find()
    .then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    });
});

/* insertar un usuario */

router.post('/',function(req,res){
    let u = new usuario({
        nombre:req.body.nombre,
        correo:req.body.correo,
        contrasena:req.body.contrasena,
        observacion:req.body.observacion,
        tipoUsuario:req.body.tipoUsuario,
        posts:[]
    }); 

    //Promesa
    u.save()
    .then(function(obj){
        res.send(obj);
        res.end();
    })
    .catch(function(error){
        res.send(error);
        res.end();
    });
});

/* eliminar un usuario en especifico */

router.delete('/:id',function(req,res){
    usuario.remove({_id:req.params.id})
    .then((result)=>{
        res.send(result);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    });
});



module.exports = router;

