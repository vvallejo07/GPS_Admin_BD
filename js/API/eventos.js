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
	for(i=0; i<clientes.length; i++){
		$('#bdClient').append('<option val="'+ clientes[i].value +'">'+ clientes[i].label +'</option>');
	}
}