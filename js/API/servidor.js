//Servidor
function obtenerRutas(){
	$.ajax({
        url: "http://landcserver3.no-ip.org:9990/facturador/qro/find/rutas",
        type: "GET",        
        dataType: "JSON",
		beforeSend: function(x) {
			if (x && x.overrideMimeType) {
			  x.overrideMimeType("application/json;charset=UTF-8");
			}
        },
        error: function(data) {
        	alert(data.responseText);
        },
        success: function(result) {
			actualizarBD(result);
        }
	});
}

function obtenerClientes(ruta){
	$.ajax({
        url: "http://landcserver3.no-ip.org:9990/facturador/qro/find/clientsbyrutas",
        type: "GET",        
        dataType: "JSON",
		data: {ruta : ruta},
		beforeSend: function(x) {
			if (x && x.overrideMimeType) {
			  x.overrideMimeType("application/json;charset=UTF-8");
			}
        },
        error: function(data) {
        	alert(data.responseText);
        },
        success: function(result) {
			llenarClientes(result);
        }
	});
}

function updateBdClientes(id, nota, lat, long){
	$.ajax({
        url: "http://landcserver3.no-ip.org:9990/facturador/qro/update/client",
        type: "POST",        
        dataType: "JSON",
		data: {id : id, nota : nota, latitud : lat, longitud : long},
		beforeSend: function(x) {
			if (x && x.overrideMimeType) {
			  x.overrideMimeType("application/json;charset=UTF-8");
			}
        },
        error: function(data) {
        	alert(data.value);
        },
        success: function(result) {
			navigator.notification.alert('Actualizado Exitosamente',null,'Cliente','Aceptar');	
        }
	});
}