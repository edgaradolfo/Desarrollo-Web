(()=>{
    ocultarSubirArchivo();
})();

function ocultarSubirArchivo(){
        $.ajax({
            url:"/usuarios/informacion",
            method:"GET",
            dataType:"json",
            success:(res)=>{
                console.log(res);
                if(res.tipoUsuario == "Registrado"){
                    var botonesSubirArchivos = document.querySelectorAll("#subirArchivo");
                    for(let i=0;i<botonesSubirArchivos.length;i++){
                        botonesSubirArchivos[i].setAttribute("style","display: none !important;");
                    }
                }else{
                    var botonesSubirArchivos = document.querySelectorAll("#subirArchivo");
                    for(let i=0;i<botonesSubirArchivos.length;i++){
                        botonesSubirArchivos[i].setAttribute("style","display: block;");
                    }
                }
            },
            error:(error)=>{
                console.error(error);
            }
    
        });
}