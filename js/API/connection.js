// Conexion
function estaConectado(){
	navigator.notification.alert("Con "+navigator.connection.type+" - "+Connection.NONE, null, 'Registro','Aceptar');
	if(navigator.connection.type != Connection.NONE)
		return true;
	else
		return false;
}