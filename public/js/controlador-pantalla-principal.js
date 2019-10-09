(()=>{
    llenarInfoUsuario();
})();

function llenarInfoUsuario(){
    $.ajax({
        url:"/usuarios/informacion",
        method:"GET",
        dataType:"json",
        success:(res)=>{
            console.log(res);
            $("#informacionUsuario").empty();
            $("#informacionUsuario").append(
                    `
                    <div class="col-12">
                        <div class="imagen-usuario"> 
                            <img src="img/usuarios.png" class="rounded mx-auto d-block" alt="">
                        </div>
                    </div>
                    <hr>
                    <div class="col-12">
                        Nombre Usuario: ${res.nombre}
                    </div>
                    <hr>
                    <div class="col-12">
                        Correo Electrónico: ${res.correo}
                    </div>
                    <hr>
                    <div class="col-12">
                        Tipo Usuario: ${res.tipoUsuario}
                    </div>
                    <hr>
                    <div class="col-12"  style="margin-bottom: 17px;">
                        Observación: ${res.observacion}
                    </div>
                    `
            );
            
        },
        error:(error)=>{
            console.error(error);
        }

    });
}