<?php 
	/* Desarrollado por: PROGRAMANDO BROTHERS 	
	Suscribete a : https://www.youtube.com/ProgramandoBrothers y comparte los vídeos.
	Recuerda: "EL CONOCIMIENTO SE COMPARTE, POR MÁS POCO QUE SEA".
	*/
	include_once('conexion.php');
	$grado = $_POST['grado'];
	$nombre = $_POST['nombre'];
	$ape_paterno = $_POST['ape_paterno'];
	$ape_materno = $_POST['ape_materno'];
	$edad = $_POST['edad'];
	$dni = $_POST['dni'];
	$direccion = $_POST['direccion'];

	$sql = "INSERT INTO personalop (grado, nombre, ape_paterno, ape_materno, edad, direccion, dni, estado) 
				VALUES ('$grado', '$nombre', '$ape_paterno', '$ape_materno', $edad, '$direccion', '$dni', 1);";
	$res = mysqli_query($conn,$sql);
	if ( isset( $res ) )
		echo "correcto";
	else
		echo "error";	

?>
