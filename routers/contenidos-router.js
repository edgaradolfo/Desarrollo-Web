var express = require('express');
var contenido = require('../models/contenido');
var router = express.Router();
var mongoose = require('mongoose');
var fse = require('fs-extra');

/* obtener todas las imagenes */

router.get('/',function(req,res){
    contenido.find({tipoArchivo: "Imagen"})
    .then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    });
});

/* obtener todos los videos, con el filtro de tipo de archivo */

router.get('/videos',function(req,res){
    contenido.find({tipoArchivo: "Video"})
    .then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    });
});

/* obtener todos los videos, con el filtro de tipo de archivo */

router.get('/documentos',function(req,res){
    contenido.find({tipoArchivo: "Documento"})
    .then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    });
});

/* subir Imagen */

router.post('/subirImagen', function(req,res){

    var imageFile = req.files.imagen;

    var ruta = `public/img/${imageFile.name}`;
    var archivo = "Imagen";
    var identificador = imageFile.name;

    imageFile.mv("public/img/" + imageFile.name, function(error){

        if(error){
            console.log("No se pudo subir imagen");
            console.log(error);      
        }else{
            console.log("La imagen se subio de manera satisfactoria");

            let c = new contenido({
                titulo:req.body.titulo,
                observacion:req.body.observacion,
                url: ruta,
                tipoArchivo: archivo,
                nombreArchivo: identificador,
                pagina:[]
            }); 
            //Promesa
            c.save()
            .then(function(obj){
                /* res.send(obj); */
                res.redirect('/elegirarchivo.html');
                res.end();
            })
            .catch(function(error){
                /* res.send(error); */
                res.end();
            });
        
        }

    });

});

/* subir video */

router.post('/subirVideo', function(req,res){

    var videoFile = req.files.video;

    var rutaVideo = `public/videos/${videoFile.name}`;
    var archivoVideo = "Video";
    var identificadorVideo = videoFile.name;

    videoFile.mv("public/videos/" + videoFile.name, function(error){

        if(error){
            console.log("No se pudo subir video");
            console.log(error);      
        }else{
            console.log("El video se subio de manera satisfactoria");

            let c = new contenido({
                titulo:req.body.titulo,
                observacion:req.body.observacion,
                url: rutaVideo,
                tipoArchivo: archivoVideo,
                nombreArchivo: identificadorVideo,
                pagina:[]
            }); 
            //Promesa
            c.save()
            .then(function(obj){
                /* res.send(obj); */
                res.redirect('/elegirarchivo.html');
                res.end();
            })
            .catch(function(error){
                /* res.send(error); */
                res.end();
            });
        
        }

    });

});

router.post('/subirDocumentos', function(req,res){

    var documentoFile = req.files.archivo;

    var rutaDocumento = `public/documentos/${documentoFile.name}`;
    var archivoDocumento = "Documento";
    var identificadorDocumento = documentoFile.name;

    documentoFile.mv("public/documentos/" + documentoFile.name, function(error){

        if(error){
            console.log("No se pudo subir el documento");
            console.log(error);      
        }else{
            console.log("El documento se subio de manera satisfactoria");

            let c = new contenido({
                titulo:req.body.titulo,
                observacion:req.body.observacion,
                url: rutaDocumento,
                tipoArchivo: archivoDocumento,
                nombreArchivo: identificadorDocumento,
                pagina:[]
            }); 
            //Promesa
            c.save()
            .then(function(obj){
                /* res.send(obj); */
                res.redirect('/usuarios/elegirarchivo');
                res.end();
            })
            .catch(function(error){
                /* res.send(error); */
                res.end();
            });
        
        }

    });

});

/* servicio para eliminar video, imagen o archivo */
router.delete('/:id/:nombre',function(req,res){
    contenido.remove({_id:req.params.id})
    .then((result)=>{
        res.send(result);
        fse.remove(`public/img/${req.params.nombre}`)
        .then(() => {
            console.log('success!');
        })
        .catch(err => {
            console.error(err);
        })
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    });
});

router.delete('/:id/:nombre/videos',function(req,res){
    contenido.remove({_id:req.params.id})
    .then((result)=>{
        res.send(result);
        fse.remove(`public/videos/${req.params.nombre}`)
        .then(() => {
            console.log('success!');
        })
        .catch(err => {
            console.error(err);
        })
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    });
});




module.exports = router;