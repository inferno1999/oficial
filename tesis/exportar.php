<?php
// Conexión a la base de datos
$mysqli = new mysqli("localhost", "root", "", "prueba");

// Verificar la conexión
if ($mysqli->connect_error) {
    die("Error en la conexión: " . $mysqli->connect_error);
}

// Consulta SQL para seleccionar los datos de tu tabla
$sql = "SELECT * FROM cartas";
$resultado = $mysqli->query($sql);

// Crear un archivo Excel
header('Content-Type: application/vnd.ms-excel');
header('Content-Disposition: attachment; filename=informe_excel.xls');

// Encabezados del archivo Excel
echo "Fecha\tRemitente\tMotivo\n";

// Recorrer los resultados de la consulta y agregar filas al archivo Excel
while ($fila = $resultado->fetch_assoc()) {
    echo $fila['fecha'] . "\t" . $fila['remitente'] . "\t" . $fila['motivo'] . "\n";
}

// Cerrar la conexión
$mysqli->close();
?>
