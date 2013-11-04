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
			alert($( "#bdRuta option:selected" ).text());
		});
});

function llenarClientes(clientes){
	for(i=0; i<rutas.length; i++){
		$('#bdRuta').append('<option val="'+ clientes.value +'">'+ clientes.label +'</option>');
	}
}