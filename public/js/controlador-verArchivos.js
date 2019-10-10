(()=>{
    llenarInformacionArchivos();
})();

/* obtener la informacion de las imagenes y mostrarlas */

function llenarInformacionArchivos(){
    $.ajax({
        url:"/contenidos/documentos",
        method:"GET",
        dataType:"json",
        success:(res)=>{
            console.log(res);
            $("#listaArchivos").empty();
            for(let i=0;i<res.length;i++){
                $("#listaArchivos").append(
                    `
                    <div class="card" style="margin-top: 20px;" id="${res[i]._id}">
                        <div class="row">
                            <div class="col-3">
                                <figure style="margin-bottom: 0px !important;">
                                    <img class="img-fluid rounded d-block" src="img/subirarchivosgenericos-mediano.png" alt="">
                                </figure>
                            </div>
                            <div class="col-9" style="margin-top: 10px; padding-right: 10px;">
                                <div class="detalle" style="padding-right: 10px;"> 
                                    Titulo: ${res[i].titulo}
                                </div>
                                <div class="detalle" style="padding-right: 10px;"> 
                                        Detalle: ${res[i].observacion}
                                </div>
                                <div style="position: absolute; bottom: 5px; right:auto;">
                                    <button type="button" class="botonVerImagenes" id="botonArchivos" onclick="eliminarImagen('${res[i]._id}','${res[i].nombreArchivo}')">Eliminar Documento</button>
                                    <a href="/documentos/${res[i].nombreArchivo}" id="linkDescarga" download>
                                        <button type="button" class="botonVerImagenes" id="botonArchivosDescargar">Descargar Documento</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                );
            }
            verificarTipoUsuario();
        },
        error:(error)=>{
            console.error(error);
        }

    });
}

function verificarTipoUsuario(){
    $.ajax({
        url:"/usuarios/informacion",
        method:"GET",
        dataType:"json",
        success:(res)=>{
            console.log(res);
            if(res.tipoUsuario == 'Registrado'){
                var botones = document.querySelectorAll("#botonArchivos");
                var botonesDescargar = document.querySelectorAll("#botonesDescargar");
                for(let i=0;i<botones.length;i++){
                    botones[i].setAttribute("style","display: none;");
                }
                for(let i=0;i<botonesDescargar.length;i++){
                    botones[i].setAttribute("style","display: block;");
                }
            }else{
                var botones = document.querySelectorAll("#botonArchivos");
                var linksDescargar = document.querySelectorAll("#linkDescarga");
                for(let i=0;i<botones.length;i++){
                    botones[i].setAttribute("style","display: block;");
                }
                for(let i=0;i<linksDescargar.length;i++){
                    linksDescargar[i].setAttribute("style","display: none;");
                }
            }
        },
        error:(error)=>{
            console.error(error);
        }

    });
}