// Almacenamiento
function getBD(){
	var db = window.openDatabase("admingeo", "1.0", "Admin GPS", 1000000);	
	return db;
}

function actualizarBD(rutas){
	getBD().transaction(function(tx){
			tx.executeSql('CREATE TABLE IF NOT EXISTS rutas (id unique, nombre)');
			for(i=0; i<10; i++){
				tx.executeSql('INSERT INTO rutas (nombre) VALUES ("'+i+'")');
			}
		},function(err){
			alert('Error: ' + err.code);
		}, function(){
			navigator.notification.alert('Esperando Conexión a Internet',null,'Datos Guardados','Aceptar');	
		})
}

function llenarRutas(){
	accesoBD().transaction(function(tx){
		tx.executeSql('SELECT * FROM rutas',[],function(tx2,res){
			var largo = res.rows.length;
			for(i=0; i<largo; i++){
				$('#bdRuta').append('<option val="'+ i +'">'+ res.rows.item(i).nombre +'</option>');
			}
		},function(err){
			alert('Error: '+err.code);	
		});
	},function(err){
		alert('Error: '+err.code);	
	},function(){
		var a;
	});
}