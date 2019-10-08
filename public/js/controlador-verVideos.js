(()=>{
    llenarInformacionVideos();
})();

/* obtener videos y mostrarlos en pantalla */

function llenarInformacionVideos(){
    $.ajax({
        url:"/contenidos/videos",
        method:"GET",
        dataType:"json",
        success:(res)=>{
            console.log(res);
            $("#listaVideos").empty();
            for(let i=0;i<res.length;i++){
                $("#listaVideos").append(
                    `
                    <div class="card" style="margin-top: 20px;" id="${res[i]._id}">
                        <div class="row">
                            <div class="col-4">
                                <video controls src="videos/${res[i].nombreArchivo}" style="width: 100%; height: 100%;">
                                </video>
                            </div>
                            <div class="col-8" style="margin-top: 10px; padding-right: 10px;">
                                <div class="detalle" style="padding-right: 10px;"> 
                                    Nombre del Video: ${res[i].titulo}
                                </div>
                                <div class="detalle" style="padding-right: 10px;"> 
                                        Detalle: ${res[i].observacion}
                                </div>
                                <div style="position: absolute; bottom: 5px; right:auto;">
                                    <button type="button" id="botonArchivos" onclick="eliminarVideo('${res[i]._id}','${res[i].nombreArchivo}')">Eliminar Video</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                );
            }
        },
        error:(error)=>{
            console.error(error);
        }

    });
}

/* funcion eliminar videos */

function eliminarVideo(id,nombre){
    $.ajax({
        url:`contenidos/${id}/${nombre}/videos`,
        method:'delete',
        dataType:'json',
        success:(res)=>{
            console.log(res);
            if (res.ok == 1){
                $(`#${id}`).remove();
            }
        },
        error:(error)=>{
            console.error(error);
        }
    });
}