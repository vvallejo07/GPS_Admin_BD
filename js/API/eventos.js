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
	var currencies = [
    { value: 'Afghan afghani', data: 'AFN' },
    { value: 'Albanian lek', data: 'ALL' },
    { value: 'Algerian dinar', data: 'DZD' },
    { value: 'European euro', data: 'EUR' },
    { value: 'Angolan kwanza', data: 'AOA' },
    { value: 'East Caribbean dollar', data: 'XCD' },
    { value: 'Vietnamese dong', data: 'VND' },
    { value: 'Yemeni rial', data: 'YER' },
    { value: 'Zambian kwacha', data: 'ZMK' },
    { value: 'Zimbabwean dollar', data: 'ZWD' },
  ];
		$('#autocomplete').autocomplete({
		lookup: currencies,
		onSelect: function (client) {
		  var thehtml = '<strong>Nombre Comercial:</strong> ' + client.direccion + ' <br> <strong>Geolocalizacion:</strong> ' + client.direccion;
      $('#outDireccion').html(thehtml);
		}
	  });
}

function sendData(){
	document.addEventListener("deviceready",libReady(), false);
}

function libReady(){
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(pos){
	updateBdClientes($("#bdClient option:selected").val(), $("#nota").val(),
	pos.coords.latitude, pos.coords.longitude );
}

function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
	
	
