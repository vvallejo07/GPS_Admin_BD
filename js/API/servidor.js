//Servidor
function obtenerRutas(url){
	$.ajax({
        url: url,
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
        url: "http://192.168.1.97:8081/qro/find/clientsbyrutas",
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
			llenarClientes(result);
        }
	});
}