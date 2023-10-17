<?php 
	/* Desarrollado por: PROGRAMANDO BROTHERS 	
	Suscribete a : https://www.youtube.com/ProgramandoBrothers y comparte los vídeos.
	Recuerda: "EL CONOCIMIENTO SE COMPARTE, POR MÁS POCO QUE SEA".
	*/
	include_once('conexion.php');
	
	$fecha = $_POST['fecha'];
	$remitente = $_POST['remitente'];
	$motivo = $_POST['motivo'];

	$sql = "INSERT INTO cartas (fecha, remitente, motivo, estado) 
				VALUES ('$fecha', '$remitente', '$motivo', 1);";
	$res = mysqli_query($conn,$sql);
	if ( isset( $res ) )
		echo "correcto";
	else
		echo "error";	

?>
