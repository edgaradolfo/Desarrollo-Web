var express = require('express');
var usuario = require('../models/usuario');
var router = express.Router();
var mongoose = require('mongoose');

var sess;

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

/* Registrar un Usuario */

router.post('/registrar',function(req,res){
    
    var registroObservacion = "Este usuario se registro desde el formulario de LogIn";
    var registroTipoUsuario = "Registrado";
    
    
    let u = new usuario({
        nombre:req.body.nombre,
        correo:req.body.correo,
        contrasena:req.body.contrasena,
        observacion:registroObservacion,
        tipoUsuario:registroTipoUsuario,
        posts:[]
    }); 

    //Promesa
    u.save()
    .then(function(obj){
        res.redirect('/index.html');
        res.send(obj);
        res.end();
    })
    .catch(function(error){
        /* res.send(error); */
        res.end();
    });
});

/* Autenticacion LogIn */

router.post('/login',function(req,res){
    
     
    /* usuario.findOne({'correo': req.body.correo})
    .then(function(respuesta){
        if(!respuesta){
            res.json({message: 'Fallo para hacer login, el usuario no existe'});
        }else{
            usuario.compararContrasena(req.body.contrasena, function(err,isMatch){
                if(err){
                    throw err;
                }else if(!isMatch){
                    return res.status(400).json({message:'Contrasena equivocada'});
                }else{
                    res.status(200).send('Login Satisfactorio');
                }
            })
        }
    }).catch(function(error){
        console.log(error);
    }) */


    usuario.findOne({'correo': req.body.correo},function(error,respuesta){
        /* console.log(respuesta); */
        if(!respuesta){
            res.json({message:'Usuario no encontrado'});
            throw error;
        }else{
            respuesta.compararContrasena(req.body.contrasena, (err,isMatch)=>{
                if(err){
                    throw err;
                }else if(!isMatch){
                    return res.write('<h1>Password Inexistente.</h1>');
                }else{
                    if(respuesta.tipoUsuario == 'Administrador'){
                        /* res.status(200).send('logged in Succesfully'); */
                        req.session.nombre = respuesta.nombre;
                        req.session.correo = respuesta.correo;
                        req.session.tipoUsuario = respuesta.tipoUsuario;
                        req.session.observacion = respuesta.observacion;
                        res.redirect('/usuarios/index');
                        /* res.end(); */
                    }else{
                        req.session.nombre = respuesta.nombre;
                        req.session.correo = respuesta.correo;
                        req.session.tipoUsuario = respuesta.tipoUsuario;
                        req.session.observacion = respuesta.observacion;
                        res.redirect('/usuarios/index');
                        /* res.end(); */
                    }
                }    
            });
        }  
    })
});

/* verificar que alguien haya hecho login para poder acceder a esta pagina */

router.get('/index', function(req,res){
    sess = req.session;
    if(sess.correo && sess.tipoUsuario == 'Administrador'){
        res.redirect('/paginaprincipal.html');
        res.end();
    }else if(sess.correo && sess.tipoUsuario == 'Registrado'){
        res.redirect('/pagina-usuario-registrado.html');
        res.end();
    }else if(!sess.correo || !sess.contrasena){
        res.write('<h1>Inicie Sesion Primero.</h1>');
        res.end();  
    }
})

/* verificar que alguien haya hecho login para poder acceder a esta pagina */

router.get('/elegirarchivo', function(req,res){
    sess = req.session;
    if(sess.correo && sess.tipoUsuario == 'Administrador'){
        res.redirect('/elegirarchivo.html');
        res.end();
    }else if(sess.correo && sess.tipoUsuario == 'Registrado'){
        res.redirect('/elegirarchivo.html');
        res.end();
    }else if(!sess.correo || !sess.contrasena){
        res.write('<h1>Inicie Sesion Primero.</h1>');
        res.end();
    }
})

/* verificar que alguien haya hecho login para poder acceder a esta pagina */

router.get('/gestionarComentarios', function(req,res){
    sess = req.session;
    if(sess.correo && sess.tipoUsuario == 'Administrador'){
        res.redirect('/gestionarComentarios.html');
        res.end();
    }else if(sess.correo && sess.tipoUsuario == 'Registrado'){
        res.write('<h1>No tiene acceso a esta Pagina.</h1>');
        res.end();
    }else if(!sess.correo || !sess.contrasena){
        res.write('<h1>Inicie Sesion Primero.</h1>');
        res.end();
    }
})

/* verificar que alguien haya hecho login para poder acceder a esta pagina */

router.get('/creartema', function(req,res){
    sess = req.session;
    if(sess.correo && sess.tipoUsuario == 'Administrador'){
        res.redirect('/creartema.html');
        res.end();
    }else if(sess.correo && sess.tipoUsuario == 'Registrado'){
        res.write('<h1>No tiene acceso a esta Pagina.</h1>');
        res.end();
    }else if(!sess.correo || !sess.contrasena){
        res.write('<h1>Inicie Sesion Primero.</h1>');
        res.end();
    }
})

/* verificar que alguien haya hecho login para poder acceder a esta pagina */

router.get('/gestionarUsuarios', function(req,res){
    sess = req.session;
    if(sess.correo && sess.tipoUsuario == 'Administrador'){
        res.redirect('/gestionarUsuarios.html');
        res.end();
    }else if(sess.correo && sess.tipoUsuario == 'Registrado'){
        res.write('<h1>No tiene acceso a esta Pagina.</h1>');
        res.end();
    }else if(!sess.correo || !sess.contrasena){
        res.write('<h1>Inicie Sesion Primero.</h1>');
        res.end();
    }
})

/* verificar que alguien haya hecho login para poder acceder a esta pagina */

router.get('/verArchivos', function(req,res){
    sess = req.session;
    if(sess.correo && sess.tipoUsuario == 'Administrador'){
        res.redirect('/verArchivos.html');
        res.end();
    }else if(sess.correo && sess.tipoUsuario == 'Registrado'){
        res.write('/verArchivos.html');
        res.end();
    }else if(!sess.correo || !sess.contrasena){
        res.write('<h1>Inicie Sesion Primero.</h1>');
        res.end();
    }
})

/* verificar que alguien haya hecho login para poder acceder a esta pagina */

router.get('/verImagenes', function(req,res){
    sess = req.session;
    if(sess.correo && sess.tipoUsuario == 'Administrador'){
        res.redirect('/verImagenes.html');
        res.end();
    }else if(sess.correo && sess.tipoUsuario == 'Registrado'){
        res.write('/verImagenes.html');
        res.end();
    }else if(!sess.correo || !sess.contrasena){
        res.write('<h1>Inicie Sesion Primero.</h1>');
        res.end();
    }
})

/* verificar que alguien haya hecho login para poder acceder a esta pagina */

router.get('/verVideos', function(req,res){
    sess = req.session;
    if(sess.correo && sess.tipoUsuario == 'Administrador'){
        res.redirect('/verVideos.html');
        res.end();
    }else if(sess.correo && sess.tipoUsuario == 'Registrado'){
        res.write('/verVideos.html');
        res.end();
    }else if(!sess.correo || !sess.contrasena){
        res.write('<h1>Inicie Sesion Primero.</h1>');
        res.end();
    }
})

/* verificar que alguien haya hecho login para poder acceder a esta pagina */

router.get('/adminpaginaestatica', function(req,res){
    sess = req.session;
    if(sess.correo && sess.tipoUsuario == 'Administrador'){
        res.redirect('/adminpaginaestatica.html');
        res.end();
    }else if(sess.correo && sess.tipoUsuario == 'Registrado'){
        res.write('<h1>No tiene acceso a esta Pagina.</h1>');
        res.end();
    }else if(!sess.correo || !sess.contrasena){
        res.write('<h1>Inicie Sesion Primero.</h1>');
        res.end();
    }
})

/* verificar que alguien haya hecho login para poder acceder a esta pagina */

router.get('/administrarPagina', function(req,res){
    sess = req.session;
    if(sess.correo && sess.tipoUsuario == 'Administrador'){
        res.redirect('/administrarPagina.html');
        res.end();
    }else if(sess.correo && sess.tipoUsuario == 'Registrado'){
        res.redirect('/administrarPagina.html');
        res.end();
    }else if(!sess.correo || !sess.contrasena){
        res.write('<h1>Inicie Sesion Primero.</h1>');
        res.end();
    }
})

/* verificar que alguien haya hecho login para poder acceder a esta pagina */

router.get('/posts', function(req,res){
    sess = req.session;
    if(sess.correo && sess.tipoUsuario == 'Administrador'){
        res.redirect('/posts.html');
        res.end();
    }else if(sess.correo && sess.tipoUsuario == 'Registrado'){
        res.write('/posts.html');
        res.end();
    }else if(!sess.correo || !sess.contrasena){
        res.write('<h1>Inicie Sesion Primero.</h1>');
        res.end();
    }
})

/* verificar que alguien haya hecho login para poder acceder a esta pagina */

router.get('/crearpost', function(req,res){
    sess = req.session;
    if(sess.correo && sess.tipoUsuario == 'Administrador'){
        res.redirect('/crearpost.html');
        res.end();
    }else if(sess.correo && sess.tipoUsuario == 'Registrado'){
        res.write('/crearpost.html');
        res.end();
    }else if(!sess.correo || !sess.contrasena){
        res.write('<h1>Inicie Sesion Primero.</h1>');
        res.end();
    }
})


/* envio de la informacion del usuario que hizo login, para poder mostrarla en la pantalla principal */

router.get('/informacion',function(req,res){
    sess = req.session;
    if(sess.correo && sess.tipoUsuario == 'Administrador'){
        res.send(sess);
        res.end();
    }else if(sess.correo && sess.tipoUsuario == 'Registrado'){
        res.send(sess);
        res.end();
    }
})

/* eliminar variable de sesion */

router.get('/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/index.html');
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

