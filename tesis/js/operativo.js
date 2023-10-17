function registrarCliente(){

	$("form").on('submit', function(e) {
		e.preventDefault();
		var grado = $("#grado").val();
		var nombre = $("#nombre").val();
		var ape_paterno = $("#ape_paterno").val();
		var ape_materno = $("#ape_materno").val();
		var edad = $("#edad").val();
		var dni = $("#dni").val();
		var direccion = $("#direccion").val();
		$.ajax({
			  type: "POST",
			  url: "registrarOperativos.php",
			  data: { grado: grado, ape_paterno: ape_paterno, ape_materno: ape_materno,
			  		  edad: edad, dni: dni, direccion: direccion },
			  success: function(msg){
			  	if(msg == "correcto"){
			  		$("#mensaje").html("<div class='alert alert-success'><i class='icon-ok-sign'></i> Cliente registrado con �xito</div>");
			  		listarClientes();
			  	}
			  }		  
		}).done(function() {
			$("#grado").val("");
			$("#nombre").val("");
			$("#ape_paterno").val("");
			$("#ape_materno").val("");
			$("#edad").val("");
			$("#dni").val("");
			$("#direccion").val("");
			$("#mensaje").fadeOut( 4000, "linear");
		  });
	});
}

function listarClientes(){
	 
	$.ajax({			
		url: 'listarOperativos.php',
		type: 'GET',
		beforeSend: function(){
			$("#tablaOp").html("");
			$("#tablaOp").removeClass("linea");
			$("#tablaOp").html("<div id='cargando'></div>"); 
			$('#cargando').html('<img src="css/images/cargar.gif"/>');
		},
		success: function(data){
           $("#tablaOp").html(data);
           $("#tablaOp").hide();
           $("#tablaOp").fadeToggle(2000,'swing');
           $("#tablaOp").addClass("linea");
		}
	});
}

function LDE(id){//Llenar Datos Editar
	$.ajax({
		type: 'POST',
		url: 'LlenarCamposEditarCliente.php',
		data: {ide:id},//parametros
		success: function(data){
           $("#myModal-Edit").html(data);
           console.log(data);  
		}
	});
}

function ME(id){//Mensaje Eliminar	
	$.ajax({
		type: 'POST',
		url: 'mensajeEliminar.php',
		data: {idEliminar:id},//parametros
		success: function(data){
           $("#myModal-Delete").html(data);
           console.log(data);  
		}
	});
}

function EC(){//Eliminar Cliente
	var id = $("#idcli").val();
	$.ajax({
		type: 'POST',
		url: 'eliminarCliente.php',
		data: {idcli:id},//parametros			
		success: function(data){
           if(data == 'Correcto'){
				$("div").removeClass('modal-backdrop');
				$("#tablaOp").removeClass("linea");
           		listarOperativos();
            }
		}
	});

}

function MD(){//Modificar � Editar Cliente
	var id = $("#ideditar").val();
	var nom_edit = $("#nom_edit").val();
	var ape_pedit = $("#ape_pedit").val();
	var ape_medit = $("#ape_medit").val();
	var edad_edit = $("#edad_edit").val();
	var dir_edit = $("#dir_edit").val();
	var dni_edit = $("#dni_edit").val();
	$.ajax({
		type: 'POST',
		url: 'editarCliente.php',
		data: {ideditar:id, nom_edit:nom_edit, ape_pedit:ape_pedit, 
		ape_medit:ape_medit, edad_edit:edad_edit, dir_edit:dir_edit, dni_edit:dni_edit},//parametros			
		success: function(data){
	           console.log(data);
		}
	}).done(function(){
		$("div").removeClass("modal-backdrop");
		$("#tablaOp").removeClass("linea");
		listarClientes();
	});	
}

