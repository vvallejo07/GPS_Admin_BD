//Eventos
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
	/*var options = { enableHighAccuracy: true }; 
	navigator.geolocation.getCurrentPosition(onSuccess, onError, options);*/
	
	var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { frequency: 3000 });
	
}

function onSuccess(pos){
	/*updateBdClientes($('#codCliente').val(), $("#nota").val(),
	pos.coords.latitude, pos.coords.longitude );*/
	navigator.notification.alert(pos.coords.latitude + ' ## ' + pos.coords.longitude,null,'Cliente','Aceptar');	
	
}

function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
	
	
