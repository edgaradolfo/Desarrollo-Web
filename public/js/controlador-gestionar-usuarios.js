function vaciarCampos(){
    document.getElementById('nombre').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('observacion').value = '';
    document.getElementById('contrasena').value = '';
    document.getElementById('tipoUsuario').value = '';
}

function filtrarUsuario(){

    var input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("buscadorUsuarios");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabla-usuarios");
    tr = table.getElementsByTagName("tr");

    for (i=0; i<tr.length; i++){
        td = tr[i].getElementsByTagName("td")[0];
        if (td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }


}