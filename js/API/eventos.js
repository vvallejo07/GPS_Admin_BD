//Eventos
var watchId = null;
var intent = 0;

$(document).ready(function(){
	
		//Sincronizar
		$('#sinc').tap(function(){
			obtenerRutas();
		});
		
		$('#datos').tap(function(){
			llenarRutas();
		});
		
		$('#bdRuta').change(function(){
			obtenerClientes($( "#bdRuta option:selected" ).text());
		});
		
});

function llenarClientes(clientes){ 
/*	$('#bdClient').empty();
	for(i=0; i<clientes.length; i++){
		$('#bdClient').append('<option dir="'+ clientes[i].direccion +'" value="'+ clientes[i].value +'">'+ clientes[i].label +'</option>');
	}*/
	 $('#autocomplete').autocomplete({
		lookup: clientes,
		onSelect: function (client) {
		  $('#outDireccion').html(client.direccion);
		  $('#outGeo').html(client.geo);
		  $('#codCliente').val(client.label);
		}
	  });
}

function sendData(){
	document.addEventListener("deviceready",libReady(), false);
}

function libReady(){
	var options = { frequency: 500, timeout: 5000, enableHighAccuracy: true };
	watchId = navigator.geolocation.watchPosition(onSuccess, onError, options);
}

function onSuccess(pos){
	if((pos.coords.latitude+'').length > 13 && intent < 3){
		//navigator.notification.alert(pos.coords.latitude + ' .. ' + pos.coords.longitude,null,'Cliente','Aceptar');
		updateBdClientes($('#codCliente').val(), $("#nota").val(), pos.coords.latitude, pos.coords.longitude );
		navigator.geolocation.clearWatch(watchId);
	}else{
		intent = intent + 1;
	}
}

function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
	
	
