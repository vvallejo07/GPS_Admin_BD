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
		
		$('#simplebool').tap(function(){
		  var dirTxt = $("#bdClient option:selected").attr('dir');
		  if(dirTxt === "undefined" || dirTxt === ''){
			  dirTxt = "No cuenta con dirección establecida";
		  }
		  
		  $(this).simpledialog({
			'mode' : 'bool',
			'prompt' : dirTxt,
			'useModal': true,
			'buttons' : {
			  'OK': {
				click: function () {
				  $('#dialogoutput').text('OK');
				}
			  }
			}
		  })
		})
});

function llenarClientes(clientes){ 
	$('#bdClient').empty();
	for(i=0; i<clientes.length; i++){
		$('#bdClient').append('<option dir="'+ clientes[i].direccion +'" value="'+ clientes[i].value +'">'+ clientes[i].label +'</option>');
	}
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
	
	
