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
			console.log(data);
        	alert(data.responseText);
        },
        success: function(result) {
			console.log(result);
			actualizarBD(result);
        }
	});
}