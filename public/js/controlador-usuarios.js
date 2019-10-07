(()=>{
    llenarTabla();
})();

function llenarTabla(){
    $.ajax({
        url:"/usuarios/",
        method:"GET",
        dataType:"json",
        success:(res)=>{
            console.log(res);
            $("#tabla-usuarios").empty();
            for(let i=0;i<res.length;i++){
                $("#tabla-usuarios").append(
                    `
                    <tr id="${res[i]._id}">
                        <td>${res[i].nombre}</td>
                        <td>${res[i].tipoUsuario}</td>
                        <td>${res[i].correo}</td>
                        <td>${res[i].observacion}</td>
                        <td><button type="button" id="botonArchivos" onclick="eliminarUsuario('${res[i]._id}')" style="margin-top: 2px !important; margin-left: 21px;"><span><i class="fas fa-trash"></i></span></button></td>
                    </tr>
                    `
                );
            }
        },
        error:(error)=>{
            console.error(error);
        }

    });
}

function guardarUsuario(){
    //Guardar en el servidor
    let parametros = `nombre=${document.getElementById('nombre').value}&correo=${document.getElementById('correo').value}&contrasena=${document.getElementById('contrasena').value}&observacion=${document.getElementById('observacion').value}&tipoUsuario=${$('#tipoUsuario option:selected').text()}`;
    console.log('Información a enviar: ' + parametros);
    $.ajax({
        url:'/usuarios/',
        method:'POST',
        data:parametros,
        dataType:'json',
        success:(res)=>{
            console.log(res);
            if (res._id != undefined){
                console.log('Se guardo el usuario');
                $('#exampleModalCenter').modal('hide');
                llenarTabla();
                document.getElementById('nombre').value = "";
                document.getElementById('correo').value = "";
                document.getElementById('observacion').value = "";
                document.getElementById('contrasena').value = "";
                document.getElementById('tipoUsuario').value = "";
             }
        },
        error:(error)=>{
            console.error(error);
        }
    });
}

function eliminarUsuario(id){
    $.ajax({
        url:`usuarios/${id}`,
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