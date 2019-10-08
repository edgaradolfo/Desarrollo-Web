function mostrarformularioVideo(){
    document.getElementById('formularioArchivo').style.display = 'none';
    document.getElementById('formularioArchivo').innerHTML = '';
    document.getElementById('formularioArchivo').innerHTML += `
    <div class="row card" style="border-radius: 15px;">
        <div class="col-12">
            <div class="imagen-archivos"> 
                <img src="img/subirvideo3.png" style="margin-left: 90px;" alt="">
            </div>
        </div>
        <hr>
        <form action="contenidos/subirVideo" method="POST" enctype="multipart/form-data">
            <div class="col-12">
                <input type="text" class="form-control" name="titulo" placeholder="Nombre Video">
            </div>
            <hr>
            <div class="col-12">
                <input type="text" class="form-control" name="observacion" placeholder="Descripción">
            </div>
            <hr>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Upload</span>
                </div>
                <div class="custom-file">
                    <label class="custom-file-label" for="video">Elegir Video</label>
                    <input type="file" name="video" id="video" class="custom-file-input">
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <button type="submit" class="form-control" id="botonArchivos">Subir Video</button>
                </div>
                <div class="col-6">
                    <button type="button" class="form-control" onclick="esconder();" id="botonArchivos">Cancelar</button>
                </div>
            </div>
        </form>
    </div>
    `;
    document.getElementById('formularioArchivo').style.display = 'block';
}

function mostrarformularioImagenes(){
    document.getElementById('formularioArchivo').style.display = 'none';
    document.getElementById('formularioArchivo').innerHTML = '';
    document.getElementById('formularioArchivo').innerHTML += `
    <div class="row card" style="border-radius: 15px;">
        <div class="col-12">
            <div class="imagen-archivos"> 
                <img src="img/subirimagen3.png" style="margin-left: 90px;" alt="">
            </div>
        </div>
        <hr>
        <form action="contenidos/subirImagen" method="POST" enctype="multipart/form-data">
            <div class="col-12 form-group">
                <input type="text" class="form-control" name="titulo" placeholder="Nombre Imagen">
            </div>
            <hr>
            <div class="col-12 form-group">
                <input type="text" class="form-control" name="observacion" placeholder="Descripcion">
            </div>
            <hr>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Upload</span>
                </div>
                <div class="custom-file">
                    <label class="custom-file-label" for="imagen">Elegir Imagen</label>
                    <input type="file" name="imagen" id="imagen" class="custom-file-input">
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <button type="submit" class="form-control" id="botonArchivos">Subir Imagen</button>
                </div>
                <div class="col-6">
                    <button type="button" class="form-control" onclick="esconder();" id="botonArchivos">Cancelar</button>
                </div>
            </div>
        </form>
    </div>
    `;
    document.getElementById('formularioArchivo').style.display = 'block';
}

function mostrarformularioOtros(){
    document.getElementById('formularioArchivo').style.display = 'none';
    document.getElementById('formularioArchivo').innerHTML = '';
    document.getElementById('formularioArchivo').innerHTML += `
    <div class="row card" style="border-radius: 15px;">
        <div class="col-12">
            <div class="imagen-archivos"> 
                <img src="img/subirarchivosgenericos3.png" style="margin-left: 90px;" alt="">
            </div>
        </div>
        <hr>        <div class="col-12">
            <input type="text" class="form-control" placeholder="Nombre Archivo">
        </div>
        <hr>
        <div class="col-12">
            <textarea name="" id="" cols="30" class="form-control" rows="2" placeholder="Descripcion Archivo"></textarea>
        </div>
        <hr>
        <div class="col-12">
            <input type="date" class="form-control" placeholder="Fecha Creacion">
        </div>
        <hr>
        <div class="col-12" style="margin-bottom: 10px;">
            <h5>Agregar Archivo</h5>
            <input type="file" name="" id="" class="form-control">
        </div>
        <div class="row">
            <div class="col-6">
                <button type="button" class="form-control" id="botonArchivos">Subir Archivo</button>
            </div>
            <div class="col-6">
                <button type="button" class="form-control" onclick="esconder();" id="botonArchivos">Cancelar</button>
            </div>
        </div>
        
    </div>
    `;
    document.getElementById('formularioArchivo').style.display = 'block';
}

function mostrarformularioComentario(){
    document.getElementById('formularioComentario').style.display = 'none';
    document.getElementById('formularioComentario').innerHTML = '';
    document.getElementById('formularioComentario').innerHTML += `
    <div class="card-body">
            <div class="card" style="border-color:rgba(243, 53, 28, 0.856);">
                <div class="container">
                    <label for="" style="font-size: 19px; text-shadow: 2px 2px 8px #FF0000; margin-top: 19px;">Comentar</label>
                    <textarea name="" class="form-control" id="" cols="30" rows="5" style="margin-bottom: 19px; margin-top: 5px;"></textarea>
                    <div class="row">
                        <div class="col-3">
                            <button type="button" id="botonArchivos" style="margin-bottom: 19px !important; margin-top: 0px !important; margin-left: 0px;">Ingresar Comentario</button>
                        </div>
                        <div class="col-3">
                            <button type="button" onclick="esconderCajaComentario()" id="botonArchivos" style="margin-bottom: 19px !important; margin-top: 0px !important; margin-left: 0px;">Cancelar Comentario</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    `;
    document.getElementById('formularioComentario').style.display = 'block';
    window.scrollBy(0, 350);
}

function mostrarformularioVerComentario(){
    document.getElementById('formularioVerComentarios').style.display = 'none';
    document.getElementById('formularioVerComentarios').innerHTML = '';
    document.getElementById('formularioVerComentarios').innerHTML += `
    <div class="card-body">
        <div class="card" style="border-color:rgba(243, 53, 28, 0.856);">
            <div class="container d-table">
                <div class="row">
                    <div class="col-3 text-right" style="margin-top: 19px;">
                        <p>Usuario :</p>
                    </div>
                    <div class="col-8 text-left" style="margin-top: 19px;">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, expedita deserunt. Cumque, quos quas, magnam eligendi consequatur vel tenetur voluptatem tempore minima ex facilis quaerat sit consequuntur odit velit rerum.</p>
                    </div>
                    <div class="col-12">
                        <hr style="background-color: rgba(243, 53, 28, 0.856);">
                    </div>
                    <div class="col-3 text-right" style="margin-top: 19px;">
                        <p>Usuario2 :</p>
                    </div>
                    <div class="col-8 text-left" style="margin-top: 19px;">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, expedita deserunt. Cumque, quos quas, magnam eligendi consequatur vel tenetur voluptatem tempore minima ex facilis quaerat sit consequuntur odit velit rerum.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById('formularioVerComentarios').style.display = 'block';
    window.scrollBy(0, 350);
}

function esconder(){
    document.getElementById('formularioArchivo').style.display = 'none';
    document.getElementById('formularioArchivo').innerHTML = '';
}

function esconderCajaComentario(){
    document.getElementById('formularioComentario').style.display = 'none';
    document.getElementById('formularioComentario').innerHTML = '';
}

function mostrarOtrasOpciones(){
    document.getElementById('div-opciones').style.display='block'
}

