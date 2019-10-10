function cargarUsuarios(){
    var tabla_usuarios=document.getElementById('tabla_usuarios');
    var tabla_usuarios=document.getElementById("tabla_usuarios");
    var info_tabla='';
    socket.emit('get-users',null);
    socket.on('send-users',function(data){
        for(var i=0;i<data.length;i++){
            info_tabla+='<tr><th>'+data[i].cod_usuario+'</th>';
            info_tabla+='<th>'+data[i].carne+'</th>';
            info_tabla+='<th>'+data[i].nombre+'</th>';
            info_tabla+='<th>'+data[i].direccion+'</th>';
        }
        tabla_usuarios.innerHTML=info_tabla;
    });
}