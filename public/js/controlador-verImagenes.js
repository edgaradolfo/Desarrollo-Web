(()=>{
    llenarInformacionImagenes();
})();

/* obtener la informacion de las imagenes y mostrarlas */

function llenarInformacionImagenes(){
    $.ajax({
        url:"/contenidos/",
        method:"GET",
        dataType:"json",
        success:(res)=>{
            console.log(res);
            $("#listaImagenes").empty();
            for(let i=0;i<res.length;i++){
                $("#listaImagenes").append(
                    `
                    <div class="card" style="margin-top: 20px;" id="${res[i]._id}">
                        <div class="row">
                            <div class="col-5">
                                <figure style="margin-bottom: 0px !important;">
                                    <img class="img-fluid rounded d-block" src="img/${res[i].nombreArchivo}" alt="">
                                </figure>
                            </div>
                            <div class="col-7" style="margin-top: 10px; padding-right: 10px;">
                                <div class="detalle" style="padding-right: 10px;"> 
                                    Titulo: ${res[i].titulo}
                                </div>
                                <div class="detalle" style="padding-right: 10px;"> 
                                        Detalle: ${res[i].observacion}
                                </div>
                                <div style="position: absolute; bottom: 5px; right:auto;">
                                    <button type="button" id="botonArchivos" onclick="eliminarImagen('${res[i]._id}','${res[i].nombreArchivo}')">Eliminar Imagen</button>
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

/* eliminar una imagen en especifico */

function eliminarImagen(id,nombre){
    $.ajax({
        url:`contenidos/${id}/${nombre}`,
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