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
	document.addEventListener("deviceready",function(){
                navigator.geolocation.getCurrentPosition(function(pos){
                        alert(pos.coords.latitude+"/"+pos.coords.longitude);
                }, function(err){
                        alert('Error: '+err.code);
                });
        }, false);
}

