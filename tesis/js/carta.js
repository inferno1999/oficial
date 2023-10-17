function registrarCliente(){

	$("form").on('submit', function(e) {
		e.preventDefault();
		var fecha = $("#fecha").val();
		var remitente = $("#remitente").val();
		var motivo = $("#motivo").val();
		
		$.ajax({
			  type: "POST",
			  url: "registrarcarta.php",
			  data: { fecha: fecha, remitente: remitente, motivo: motivo,
			  		   },
			  success: function(msg){
			  	if(msg == "correcto"){
			  		$("#mensaje").html("<div class='alert alert-success'><i class='icon-ok-sign'></i> Cliente registrado con �xito</div>");
			  		listarClientes();
			  	}
			  }		  
		}).done(function() {
			$("#fecha").val("");
			$("#remitente").val("");
			$("#motivo").val("");
			$("#mensaje").fadeOut( 4000, "linear");
		  });
	});
}

function listarClientes(){
	 
	$.ajax({			
		url: 'listarCliente.php',
		type: 'GET',
		beforeSend: function(){
			$("#tablaCarta").html("");
			$("#tablaCarta").removeClass("linea");
			$("#tablaCarta").html("<div id='cargando'></div>"); 
			$('#cargando').html('<img src="css/images/cargar.gif"/>');
		},
		success: function(data){
           $("#tablaCarta").html(data);
           $("#tablaCarta").hide();
           $("#tablaCarta").fadeToggle(2000,'swing');
           $("#tablaCarta").addClass("linea");
		}
	});
}

function LDE(id){//Llenar Datos Editar
	$.ajax({
		type: 'POST',
		url: 'LlenarCamposEditarCarta.php',
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
				$("#tablaCarta").removeClass("linea");
           		listarClientes();
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
		$("#tablaCarta").removeClass("linea");
		listarClientes();
	});	
}

