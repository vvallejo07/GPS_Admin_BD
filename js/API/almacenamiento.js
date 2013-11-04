// Almacenamiento
function getBD(){
	var db = window.openDatabase("admingeo", "1.0", "Admin GPS", 1000000);	
	return db;
}

function actualizarBD(rutas){
	getBD().transaction(function(tx){
			tx.executeSql('CREATE TABLE IF NOT EXISTS rutas (id unique, nombre)');
			tx.executeSql('DELETE from rutas');
			for(i=0; i<rutas.length; i++){
				tx.executeSql('INSERT INTO rutas (nombre) VALUES ("'+rutas[i].label+'")');
			}
		},function(err){
			alert('Error: ' + err.code);
		}, function(){
			navigator.notification.alert('Exitosamente',null,'Datos Guardados','Aceptar');	
		})
}

function llenarRutas(){
	getBD().transaction(function(tx){
		tx.executeSql('SELECT * FROM rutas',[],function(tx2,res){
			var largo = res.rows.length;
			$('#bdRuta').empty();
			for(i=0; i<largo; i++){
				$('#bdRuta').append('<option val="'+ i +'">'+ res.rows.item(i).nombre +'</option>');
			}
			obtenerClientes($("#bdRuta option:first").val());
		},function(err){
			alert('Error: '+err.code);	
		});
	},function(err){
		alert('Error: '+err.code);	
	},function(){
		var a;
	});
}