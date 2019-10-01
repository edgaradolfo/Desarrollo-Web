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
        <div class="col-12">
            <input type="text" class="form-control" placeholder="Nombre Video">
        </div>
        <hr>
        <div class="col-12">
            <textarea name="" id="" cols="30" class="form-control" rows="2" placeholder="Descripcion Video"></textarea>
        </div>
        <hr>
        <div class="col-12">
            <input type="date" class="form-control" placeholder="Fecha Creacion">
        </div>
        <hr>
        <div class="col-12" style="margin-bottom: 10px;">
            <h5>Agregar Video</h5>
            <input type="file" name="" id="" class="form-control">
        </div>
        <div class="row">
            <div class="col-6">
                <button type="button" class="form-control" id="botonArchivos">Subir Video</button>
            </div>
            <div class="col-6">
                <button type="button" class="form-control" onclick="esconder();" id="botonArchivos">Cancelar</button>
            </div>
        </div>
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
        <div class="col-12">
            <input type="text" class="form-control" placeholder="Nombre Imagen">
        </div>
        <hr>
        <div class="col-12">
            <textarea name="" id="" cols="30" class="form-control" rows="2" placeholder="Descripcion Imagen"></textarea>
        </div>
        <hr>
        <div class="col-12">
            <input type="date" class="form-control" placeholder="Fecha Creacion">
        </div>
        <hr>
        <div class="col-12" style="margin-bottom: 10px;">
            <h5>Agregar Imagen</h5>
            <input type="file" name="" id="" class="form-control">
        </div>
        <div class="row">
            <div class="col-6">
                <button type="button" class="form-control" id="botonArchivos">Subir Imagen</button>
            </div>
            <div class="col-6">
                <button type="button" class="form-control" onclick="esconder();" id="botonArchivos">Cancelar</button>
            </div>
        </div>
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
        <hr>
        <div class="col-12">
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

function esconder(){
    document.getElementById('formularioArchivo').style.display = 'none';
    document.getElementById('formularioArchivo').innerHTML = '';
}

function mostrarOtrasOpciones(){
    document.getElementById('div-opciones').style.display='block'
}