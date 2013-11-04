//Eventos
$(document).ready(function(){
	
		//Sincronizar
		$('#sinc').tap(function(){
			obtenerRutas("http://192.168.1.97:8081/facturador/qro/find/rutas");
		});
		
		$('#datos').tap(function(){
			llenarRutas();
		});
		
		$('#bdRuta').change(function(){
			obtenerClientes($( "#bdRuta option:selected" ).text());
		});
});

function llenarClientes(clientes){ 
	$('#bdClient').empty();
	for(i=0; i<clientes.length; i++){
		$('#bdClient').append('<option val="'+ clientes[i].value +'">'+ clientes[i].label +'</option>');
	}
}

function sendData(){
	document.addEventListener("deviceready",libReady(), false);
}

function libReady(){
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(pos){
	updateBdClientes($( "#bdClient option:selected" ).val(), $("#nota").val(),
	pos.coords.latitude, pos.coords.longitude );
}

function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }